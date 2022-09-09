import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr"

interface ProfileResponse {
  ok: boolean;
  profile: User;
}

//const fetcher = (url: string) => fetch(url).then((response) => response.json());
export default function useUser() {
  // swr super key
  const { data, error } = useSWR<ProfileResponse>(typeof window === "undefined" ? null : "/api/users/me");
  const router = useRouter();

  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
  }, [data, router])


  return { user: data?.profile, isLoading: !data && !error };


  // const [user, setUser] = useState();
  // const router = useRouter();
  // useEffect(() => {
  //   fetch("/api/users/me")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (!data.ok) {
  //         return router.replace("/enter")
  //       }
  //       setUser(data.profile);
  //     });
  // }, []);
  // return user;
}

// super_cache = {
//   "/api/users/me": {
//     ok:true,
//     profile:
//   }
// }
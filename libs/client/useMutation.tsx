import { useState } from "react";

// ts
interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): UseMutationResult {
  // 아래 useState 짧게 한곳에모으기 하면 이런식
  const [state, setState] = useState({
    loadng: false,
    data: undefined,
    error: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      // 데이터가 없어서 작동 안할때도 있으니 catch 써주기
      // response에 json이 없을때만 해당하는 경우
      .then((response) => response.json().catch(() => {}))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }
  return [mutation, { loading, data, error }];
}

// js
// export default function useMutation(
//   url: string
// ): [
//   (data?: any) => void,
//   { loading: boolean; data: undefined | any; error: undefined | any }
// ] {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState<undefined | any>(undefined);
//   const [error, setError] = useState<undefined | any>(undefined);

//   // 1번째 인자
//   function mutation(data?: any) {}

//   return [mutation, { loading, data, error }];
// }

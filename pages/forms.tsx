import { FieldErrors, useForm } from "react-hook-form";

// Less code (c)
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)
interface LoginForm {
  username: string;
  password: string;
  email: string;
  error?: string;
}

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    reset,
    resetField,
  } = useForm<LoginForm>({
    defaultValues: {
      username: "hello",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });
  const onValid = (data: LoginForm) => {
    //console.log("im valid bby");

    // back end fetch이후
    setError("username", { message: "Taken username" });
    // setError("errors", {message:"Backed is offline sorry."})

    // 리셋 필요시
    //reset();

    // 부분 리셋 필요시
    resetField("password");
  };
  const oninvalid = (errors: FieldErrors) => {
    //console.log("im oninvalid bby");
    //console.log(errors);
  };
  // console.log(register("name"));
  // console.log(watch());
  console.log(errors);
  setValue("username", "hello2");
  return (
    <form onSubmit={handleSubmit(onValid, oninvalid)}>
      <input
        type="text"
        placeholder="Username"
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5,
          },
        })}
      />
      {errors.username?.message}
      <br></br>
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
            // notGmail: (value) =>
            //   !value.includes("@gmail.com") ? "" : "Gmail is not allowed",
          },
        })}
        className={`${Boolean(errors.email?.message) ? "border-red-500" : ""}`}
      />
      {errors.email?.message}
      <br></br>
      <input
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
        })}
      />
      {errors.password?.message}
      <br></br>
      <input type="submit" value="Create Account" />
      <br></br>
      {errors.errors?.message}
    </form>
  );
}

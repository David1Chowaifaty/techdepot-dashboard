"use client";
import { Input } from "./ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/button";
import axios from "axios";
interface ProductData {
  email: string;
  password: string;
}
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<ProductData>();
  const onSubmit: SubmitHandler<ProductData> = async (formData) => {
    try {
      const url = `http://localhost:5080/auth/register`;
      const { data } = await axios.post(url, { ...formData });
      console.log(data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="flex flex-col gap-5 w-full max-w-2xl"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        placeholder="Email"
        {...register("email", { required: true })}
        errorMessage={
          errors.email?.type === "required" ? "Required" : undefined
        }
      />
      <Input
        placeholder="Password"
        {...register("password", {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[a-z])(?=.*\d)(?=.*[@$.!%*?&])[a-z\d@$!.%*?&]+$/,
        })}
        errorMessage={
          errors.password?.type === "required" ? "Required" : undefined
        }
      />
      <Button type="submit">Register</Button>
    </form>
  );
}

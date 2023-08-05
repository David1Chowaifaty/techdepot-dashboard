"use client";
import React from "react";
import { Input } from "./ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./ui/button";
import axios from "axios";
interface ProductData {
  email: string;
  password: string;
}
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductData>();
  const onSubmit: SubmitHandler<ProductData> = async (formData) => {
    try {
      const url = `https://api-techdepot.onrender.com/auth/login`;
      const { data } = await axios.post(url, { ...formData });
      console.log(data);
      const authToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("auth-token"));
      if (authToken) {
        console.log(authToken.split("=")[1]);
      }
      console.log(authToken);

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
          pattern: /^(?=.*[a-z])(?=.*\d)(?=.*[@$.!%*?&])[a-z\d@$!.%*?&]+$/,
        })}
        errorMessage={
          errors.password?.type === "required" ? "Required" : undefined
        }
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
}

"use client";
import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
interface ProductData {
  product_name: string;
  price: number;
  quantity: number;
  category: string;
}
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
export default function AddProductForm({
  closeDialog,
}: {
  closeDialog: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductData>();
  const onSubmit: SubmitHandler<ProductData> = (data) => {
    reset();
    closeDialog(false);
  };
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Product Name"
        {...register("product_name", { required: true })}
        errorMessage={
          errors.product_name?.type === "required" ? "Required" : undefined
        }
      />
      <div
        className={cn(
          "flex justify-between gap-5",
          errors.price || errors.quantity ? "items-start" : "items-center"
        )}
      >
        <Input
          placeholder="Price"
          {...register("price", { required: true })}
          errorMessage={
            errors.price?.type === "required" ? "Required" : undefined
          }
        />
        <Input
          placeholder="Quantity"
          {...register("quantity", { required: true })}
          errorMessage={
            errors.quantity?.type === "required" ? "Required" : undefined
          }
        />
      </div>
      <Input
        placeholder="Category"
        {...register("category", { required: true })}
        errorMessage={
          errors.category?.type === "required" ? "Required" : undefined
        }
      />

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col shadow-sm items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>

      <div className="flex items-center justify-end gap-3">
        <AlertDialog>
          <AlertDialogTrigger
            className={buttonVariants({ variant: "outline" })}
          >
            Discard
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete all
                your product data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className={buttonVariants({ variant: "destructive" })}
                onClick={() => reset()}
              >
                Discard
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button type="submit">Add Product</Button>
      </div>
    </form>
  );
}

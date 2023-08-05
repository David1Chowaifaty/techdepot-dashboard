"use client";
import AddProductForm from "@/components/product-form";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function AddProduct() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "outline" }), "gap-2 w-52")}
      >
        <PlusIcon />
        <p>Add Product</p>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add your product</DialogTitle>
          <DialogDescription>
            Before proceeding, please take a moment to review the details of
            your new product. This step marks the beginning of its journey
            within our system
          </DialogDescription>
        </DialogHeader>
        <AddProductForm closeDialog={setIsOpen} />
      </DialogContent>
    </Dialog>
  );
}

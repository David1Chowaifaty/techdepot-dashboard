"use client";
import { ProductTable } from "@/components/ProductTable";
import axios from "axios";
import React, { useEffect, useState } from "react";
export interface Category {
  category: string;
}
export default function Products() {
  const [products, setProducts] = useState<Product[]>();
  const [categories, setCategories] = useState<Category[]>();

  useEffect(() => {
    (async () => {
      const [productResponse, categoriesResponse] = await Promise.all([
        await axios.get(
          "https://api-techdepot.onrender.com/product/getAllProducts/10&&0"
        ),
        await axios.get(
          "https://api-techdepot.onrender.com/product/getAllCategories"
        ),
      ]);
      setProducts(productResponse.data as Product[]);
      setCategories(categoriesResponse.data as Category[]);
    })();
  }, []);
  return (
    <main className="px-4 md:px-6 lg:px-10">
      <ProductTable data={products ?? []} categories={categories ?? []} />
    </main>
  );
}

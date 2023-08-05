import { ProductTable } from "@/components/ProductTable";
import axios from "axios";
import React from "react";

export default async function Products() {
  const { data } = await axios.get(
    "https://api-techdepot.onrender.com/product/getAllProducts/1&&0"
  );
  const categories = await axios.get(
    "https://api-techdepot.onrender.com/product/getAllCategories"
  );
  return (
    <main className="px-4 md:px-6 lg:px-10">
      <ProductTable data={data} categories={categories.data} />
    </main>
  );
}

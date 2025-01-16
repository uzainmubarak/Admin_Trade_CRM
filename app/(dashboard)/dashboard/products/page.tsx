"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

type Product = {
  id: string;
  name: string;
  code: string;
  description: string;
  price: string;
  category: string;
}

const columns: ColumnDef<Product>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "code", header: "Code" },
  { accessorKey: "description", header: "Description" },
  { accessorKey: "price", header: "Price" },
  { accessorKey: "category", header: "Category" }
];

const data: Product[] = [
  {
    id: "1",
    name: "Sample Product",
    code: "PROD001",
    description: "Sample product description",
    price: "$99.99",
    category: "Electronics"
  }
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Products</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
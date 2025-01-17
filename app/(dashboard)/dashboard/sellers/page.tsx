"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PlusCircle } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

import { SellerForm } from "./components/SellerForm"
import { ProductForm } from "./components/ProductForm";

type Buyer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
};

const columns: ColumnDef<Buyer>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "phone", header: "Phone" },
  { accessorKey: "address", header: "Address" },
  { accessorKey: "country", header: "Country" },
];

const data: Buyer[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    address: "123 Main St",
    country: "USA",
  },
];

export default function SellerPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Seller</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Seller
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Entry</DialogTitle>
            </DialogHeader>
            <Tabs defaultValue="seller" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="seller">Seller</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
              </TabsList>
              <TabsContent value="seller">
                <SellerForm />
              </TabsContent>
              <TabsContent value="product">
                <ProductForm />
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

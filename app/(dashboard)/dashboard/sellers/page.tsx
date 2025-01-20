"use client";

import Link from "next/link";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';
import { ColumnDef } from "@tanstack/react-table";

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
        <h1 className="text-3xl font-bold ml-14 sm:ml-0">Seller</h1>
        <Link href="/dashboard/sellers/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Seller
          </Button>
        </Link>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}


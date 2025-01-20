"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

type Quotation = {
  id: string;
  quotationNumber: string;
  customer: string;
  status: string;
  total: string;
  date: string;
}

const columns: ColumnDef<Quotation>[] = [
  { accessorKey: "quotationNumber", header: "Quotation Number" },
  { accessorKey: "customer", header: "Customer" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "total", header: "Total" },
  { accessorKey: "date", header: "Date" }
];

const data: Quotation[] = [
  {
    id: "1",
    quotationNumber: "QUO-001",
    customer: "John Doe",
    status: "Processing",
    total: "$299.99",
    date: "2024-03-20"
  }
];

export default function RFQ() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="sm:text-3xl text-2xl font-bold ml-14 sm:ml-0">Quotations</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
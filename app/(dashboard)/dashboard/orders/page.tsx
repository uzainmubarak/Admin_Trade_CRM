"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

type Order = {
  id: string;
  orderNumber: string;
  customer: string;
  status: string;
  total: string;
  date: string;
}

const columns: ColumnDef<Order>[] = [
  { accessorKey: "orderNumber", header: "Order Number" },
  { accessorKey: "customer", header: "Customer" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "total", header: "Total" },
  { accessorKey: "date", header: "Date" }
];

const data: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-001",
    customer: "John Doe",
    status: "Processing",
    total: "$299.99",
    date: "2024-03-20"
  }
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Orders</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Order
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Order</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="customer">Customer</Label>
                <Input id="customer" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="products">Products</Label>
                <Input id="products" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="total">Total Amount</Label>
                <Input id="total" type="number" required />
              </div>
              <Button type="submit">Create Order</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
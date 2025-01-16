"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PlusCircle } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

type Email = {
  id: string,
  subject: string,
  recipient: string,
  status: string,
  sentDate: string
}

const columns: ColumnDef<Email>[] = [
  { accessorKey: "subject", header: "Subject" },
  { accessorKey: "recipient", header: "Recipient" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "sentDate", header: "Sent Date" }
];

const data: Email[] = [
  {
    id: "1",
    subject: "Welcome Email",
    recipient: "john@example.com",
    status: "Sent",
    sentDate: "2024-03-20"
  }
];

export default function EmailPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Email</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Compose Email
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Compose New Email</DialogTitle>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="to">To</Label>
                <Input id="to" type="email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required className="min-h-[200px]" />
              </div>
              <Button type="submit">Send Email</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
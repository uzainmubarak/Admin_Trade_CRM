"use client";

import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const columns = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "startDate", header: "Start Date" },
  { accessorKey: "endDate", header: "End Date" },
  { accessorKey: "description", header: "Description" }
];

const initialData = [
  {
    id: "1",
    name: "Summer Sale",
    type: "Discount",
    status: "Active",
    startDate: "2024-06-01",
    endDate: "2024-06-30",
    description: "Summer season special discount campaign"
  }
];

export default function CampaignsPage() {
  const [campaignData, setCampaignData] = useState(initialData);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    startDate: "",
    endDate: ""
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: any) => {
    setFormData(prev => ({
      ...prev,
      type: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      type: "",
      description: "",
      startDate: "",
      endDate: ""
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const newCampaign = {
        id: (campaignData.length + 1).toString(),
        ...formData,
        status: "Draft"
      };

      setCampaignData(prevData => [...prevData, newCampaign]);
      setOpen(false);
      resetForm();
    } catch (error) {
      console.error("Error adding campaign:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <Dialog open={open} onOpenChange={(newOpen) => {
          setOpen(newOpen);
          if (!newOpen) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Campaign
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Campaign</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Campaign Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="type">Campaign Type</Label>
                <Select 
                  value={formData.type} 
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select campaign type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Discount">Discount</SelectItem>
                    <SelectItem value="Promotion">Promotion</SelectItem>
                    <SelectItem value="Seasonal">Seasonal</SelectItem>
                    <SelectItem value="Flash Sale">Flash Sale</SelectItem>
                    <SelectItem value="Holiday">Holiday</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter campaign details..."
                  required 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input 
                    id="startDate" 
                    name="startDate" 
                    type="date" 
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input 
                    id="endDate" 
                    name="endDate" 
                    type="date" 
                    value={formData.endDate}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>

              <Button type="submit" className="mt-4">Create Campaign</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable columns={columns} data={campaignData} />
    </div>
  );
}
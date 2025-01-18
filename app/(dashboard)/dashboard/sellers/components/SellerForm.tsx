import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Agriculture",
  "Energy",
  "Transportation",
  "Entertainment"
]

const formFields = [
  { id: "seller-name", label: "Name", type: "text" },
  { id: "seller-email", label: "Email", type: "email" },
  { id: "seller-company-contact", label: "Company Contact", type: "tel" },
  { id: "seller-address", label: "Address", type: "text" },
  { id: "seller-country", label: "Country", type: "text" },
  { id: "poc-name", label: "POC Name", type: "text" },
  { id: "poc-contact", label: "POC Contact", type: "text" },
  { id: "document", label: "Document", type: "file" },
]

export function SellerForm() {
  return (
    <form className="grid gap-6">
      <div className="grid gap-4">
        {formFields.map((field) => (
          <div key={field.id} className="grid gap-2">
            <Label htmlFor={field.id}>{field.label}</Label>
            <Input id={field.id} type={field.type} required />
          </div>
        ))}
        <div className="grid gap-2">
          <Label htmlFor="seller-industry">Industry</Label>
          <Select>
            <SelectTrigger id="seller-industry">
              <SelectValue placeholder="Select an industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry.toLowerCase()}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="w-fit" type="submit">Save Seller</Button>
    </form>
  )
}


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const formFields = [
  { id: "product-name", label: "Name", type: "text" },
  { id: "product-description", label: "Description", type: "textarea" },
  { id: "product-code", label: "Code", type: "text" },
  { id: "product-function", label: "Function", type: "text" },
  { id: "product-image", label: "Image URL", type: "url" },
]

export function ProductForm() {
  return (
    <form className="grid gap-6">
      <div className="grid gap-4">
        {formFields.map((field) => (
          <div key={field.id} className="grid gap-2">
            <Label htmlFor={field.id}>{field.label}</Label>
            {field.type === "textarea" ? (
              <Textarea id={field.id} required />
            ) : (
              <Input id={field.id} type={field.type} required />
            )}
          </div>
        ))}
      </div>
      <Button type="submit">Save Product</Button>
    </form>
  )
}


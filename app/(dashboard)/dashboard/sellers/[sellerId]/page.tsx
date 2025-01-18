"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SellerForm } from "../components/SellerForm"
import { ProductForm } from "../components/ProductForm"
import { ProductSpecsForm } from "../components/ProductSpecsForm"
import { DescriptionListForm } from "../components/DescriptionListForm"

type Props = {
  params: { sellerId: string }
}

const SellerDetailClient: React.FC<Props> = ({ params }) => {
  const sellerId = params.sellerId as string
  const isNewSeller = sellerId === "new"

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        {isNewSeller ? "Add New Seller" : "Edit Seller"}
      </h1>
      <Tabs defaultValue="seller" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="seller">Seller</TabsTrigger>
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>
        <div className="mt-6">
          <TabsContent value="seller">
            <SellerForm />
          </TabsContent>
          <TabsContent value="product">
            <ProductForm />
          </TabsContent>
          <TabsContent value="specifications">
            <ProductSpecsForm />
          </TabsContent>
          <TabsContent value="details">
            <DescriptionListForm />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default SellerDetailClient


"use client";

import { SellerForm } from "../components/SellerForm";



type Props = {
  params: { sellerId: string };
};

const SellerDetailClient: React.FC<Props> = ({ params }) => {
  const sellerId = params.sellerId as string;
  const isNewSeller = sellerId === "new";

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">
        {isNewSeller ? "Add New Seller" : "Edit Seller"}
      </h1>
      <div>
        <SellerForm />
      </div>
    </div>
  );
};

export default SellerDetailClient;

"use client";

import { BuyerForm } from "../components/BuyerForm";



type Props = {
  params: { buyerId: string };
};

const SellerDetailClient: React.FC<Props> = ({ params }) => {
  const buyerId = params.buyerId as string;
  const isNewBuyer = buyerId === "new";

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {isNewBuyer ? "Add New Buyer" : "Edit Buyer"}
      </h1>
      <div>
        <BuyerForm />
      </div>
    </div>
  );
};

export default SellerDetailClient;

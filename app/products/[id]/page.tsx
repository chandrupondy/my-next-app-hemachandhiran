//"use client";

import { products } from "@/data/products";
//import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({params}: Props) {
  //const params = useParams();
  const {id} = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        width="400"
        style={{ objectFit: "cover" }}
      />

      <h2>${product.price}</h2>
      <p>{product.description}</p>
    </div>
  );
}
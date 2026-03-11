import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div style={{ textAlign: "center", padding: "80px" }}>
      <h1>Product Not Found</h1>
      <p>Sorry, the product you're looking for doesn't exist.</p>
      
      <Link href="/products">
        Back to Products
      </Link>
    </div>
  );
}

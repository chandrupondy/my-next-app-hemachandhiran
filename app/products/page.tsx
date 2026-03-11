import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Product List</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="100%"
              height="150"
              style={{ objectFit: "cover" }}
            />

            <h3>{product.name}</h3>
            <p>${product.price}</p>

            <Link href={`/products/${product.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
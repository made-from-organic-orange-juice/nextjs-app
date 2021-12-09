import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/products/3");
  };

  return (
    <div>
      <h2>Product Page</h2>
      <Link href="products/1">
        <a> Product 1</a>
      </Link>
      <Link href="products/hej">
        <a> Product hej</a>
      </Link>
      <button onClick={handleClick}>Product 3</button>
    </div>
  );
}

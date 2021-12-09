import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1> Landing Page </h1>
      <Link href="/products">
        <a> Show Products</a>
      </Link>
      <Link href="/posts">
        <a> Show Posts</a>
      </Link>
    </div>
  );
}

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ProductDetail = () => {
  const router = useRouter();
  const id = router.query.productId;

  return (
    <div>
      <h1>Product Id: {id}</h1>
      {/* when using replace, the user will not be able to go back to this page using the back arrow in the browser,
       since its not pushed on the stack 
       */}
      <Link href={`/products`} replace>
        <a>Return to prev page</a>
      </Link>
    </div>
  );
};

export default ProductDetail;

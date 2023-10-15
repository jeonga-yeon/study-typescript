import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("지상최강"));
  return (
    <div>
      <h1>Show all products</h1>
    </div>
  );
};

export default ProductPage;

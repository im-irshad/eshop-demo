import React, { useEffect } from "react";
import Corousel from "./Corousel";
import PdData from "./PdData";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productAction";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  console.log(id);
  const { product, loading, error } = useSelector(
    (state) => state.productDetailsReducer
  );
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <Corousel />
      <PdData />
    </div>
  );
}

export default ProductDetails;

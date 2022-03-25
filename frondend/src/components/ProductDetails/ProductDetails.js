import React, { useEffect } from "react";
import ProductImages from "./ProductImages";
import PdData from "./PdData";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Loader from "../Loader/Loader";
import {
  clearErrors,
  getProductDetails,
} from "../../redux/actions/productDetailAction";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { error, product, loading } = useSelector(
    (state) => state.productDetailsReducer
  );

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);

  console.log(product, loading, error);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={2} mt={6} mb={6}>
          <Grid
            item
            xs={6}
            sx={{
              border: "1px solid black",
            }}
          ></Grid>
          <Grid
            item
            xs={6}
            sx={{
              border: "1px solid black",
            }}
          >
            <PdData product={product} />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ProductDetails;

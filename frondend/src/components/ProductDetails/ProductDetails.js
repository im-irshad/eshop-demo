import React, { useEffect } from "react";
import Corousel from "./Corousel";
import PdData from "./PdData";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productAction";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import Loader from "../Loader/Loader";
import productDetailsReducer from "../../redux/reducers/productDetailsReducer";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector(
    (state) => state.productDetailsReducer
  );
  console.log(product);
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

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
          >
            <Corousel />
          </Grid>
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

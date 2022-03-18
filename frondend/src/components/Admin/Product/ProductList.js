import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAdminProduct } from "../../../redux/actions/adminProductAction";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../../Loader/Loader";
import { clearErrors } from "../../../redux/actions/productAction";

function ProductList() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const rows = [];
  const { loading, products } = useSelector((state) => state.prodsAdminReducer);
  useEffect(() => {
    dispatch(getAdminProduct());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "Product ID" },

    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
    },
  ];
  console.log(products);
  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        stock: item.Stock,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h1>ALL PRODUCTS</h1>
          <DataGrid
            rows={rows}
            columns={columns}
            disableSelectionOnClick
            autoHeight
          />{" "}
        </div>
      )}
    </>
  );
}

export default ProductList;

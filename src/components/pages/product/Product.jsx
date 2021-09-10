import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../chart/Chart";
import { productData } from "../../../dummyData";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className="product">
      <div className="product-title-container">
        <h1>Product</h1>
        <Link to="/products/product">
          <button className="product-add-btn">Create</button>
        </Link>
      </div>
      <div className="product-top">
        <div className="product-top-left">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="product-top-right">
          <div className="product-info-top">
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="product"
              className="product-info-img"
            />
            <span className="product-name">Apple Airpods</span>
          </div>
          <div className="product-info-bottom">
            <div className="product-info-item">
              <span className="product-info-key">Id: </span>
              <span className="product-info-value">105</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Sales: </span>
              <span className="product-info-value">350</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">Active: </span>
              <span className="product-info-value">Yes</span>
            </div>
            <div className="product-info-item">
              <span className="product-info-key">In Stock: </span>
              <span className="product-info-value">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="product-bottom">
        <form action="" className="product-form">
          <div className="product-form-left">
            <label htmlFor="name">Poduct Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Apple Airpods"
            />
            <label htmlFor="inStock">In Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="product-form-right">
            <div className="product-upload">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="product-ipload-img"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                name="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <button className="product-btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;

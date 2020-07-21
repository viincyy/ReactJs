import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    this.props.detailProduct(this.props.product);
  };

  render() {
    const { product } = this.props;

    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button className="btn btn-success" onClick={this.handleDetail}>
              Chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}

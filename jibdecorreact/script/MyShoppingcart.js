// Hàm formatMoney: thêm dấu phẩy ngăn cách phần nghìn
Number.prototype.formatMoney = function(c, d, t) {
  var n = this,
    c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? "," : d,
    t = t == undefined ? "." : t,
    s = n < 0 ? "-" : "",
    i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + "",
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : "")
  );
};

// Cách 3
function Rating(props) {
  let rating = [];
  for (let i = 0; i < props.value; i++) {
    rating.push(
      <i key={i} className="fa fa-star">
        {" "}
      </i>
    );
  }
  return rating;
}

const MAX_QUANTITY = 99;

class MyShoppingcart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 1,
          thumbnail: "img/product1.png",
          name: "Kệ tủ gỗ 1",
          price: 2599000,
          quantity: 3,
          rating: 3
        },
        {
          id: 2,
          thumbnail: "img//product2.png",
          name: "Kệ tủ gỗ 2",
          price: 3000000,
          quantity: 5,
          rating: 5
        }
      ],
      coupons: [
        {
            code: 'JIBDECOR',
            value: 200000
        },
        {
            code: 'SUMMER-OUTLET',
            value: 300000
        }
      ],
      coupon_code: '',
      discount: 0
    };
  }

// Update số lượng sản phẩm
onChangeQty(index, event){
const newProducts = this.state.products;
        const value = event.target.value;
        const valueInt = parseInt(value);

        if (value === '') {
            newProducts[index].quantity = value
        } else if (valueInt > 0 && valueInt <= MAX_QUANTITY) {
            newProducts[index].quantity = valueInt
        }

        this.setState({
            products: newProducts
        })
}

//   Xóa sản phẩm
  deleteProduct(index) {
    const newProducts = this.state.products;
    newProducts.splice(index, 1);

    this.setState({
        products: newProducts
    })
}

  changeCouponCode(e) {
    this.setState({ coupon_code: e.target.value });
  }

  handleApplyCoupon() {
    const { coupons, coupon_code, discount } = this.state;

    const validCoupon = coupons.filter(coupon => coupon.code === coupon_code)

    if (validCoupon.length === 1) {
       this.setState({ discount: validCoupon[0].value });
    } else {
       alert('Mã giảm giá không hợp lệ!');
        this.setState({ discount: 0 });
    }
  }

  render() {
    const {products, coupon_code, discount} = this.state;
    let cartItems = [];
    let shippingPrice = 300000;
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      totalPrice += product.price * product.quantity;

      cartItems.push(
        <tr className="cart-item" key={product.id}>
          <td className="product-thumbnail">
            <a href="shop-detail.html">
              <img src={product.thumbnail} />{" "}
            </a>{" "}
          </td>{" "}
          <td className="product-name">
            <a href="detail.html">
              {" "}
              {product.name} <br />

              {/* Cách 1: Vòng lặp trong JSX */}{" "}
              {(function() {
                let rating = [];
                for (let i = 0; i < product.rating; i++) {
                  rating.push(
                    <i key={i} className="fa fa-star">
                      {" "}
                    </i>
                  );
                }
                return rating;
              })()}

              {/* Cách 2:  */}{" "}
              {/* {Array(product.rating).fill(1).map((value, index) => <i key={index} className="fa fa-star"></i>)} */}{" "}
            </a>

            {/* Cách 3: Tạo riêng 1 Component khác */} <br />
            {/* <Rating value={4} /> */}

          </td>{" "}
          <td className="product-price">
            {" "}
            {product.price.formatMoney(0, 3)}
            VNĐ{" "}
          </td>{" "}
          <td className="product-quantity">
            <div>
              <input 
                type="number"
                className="form-control text-center"
                min="1"
                max="99"
                defaultValue={product.quantity}
                onChange={this.onChangeQty.bind(this, i)}
              />{" "}
            </div>{" "}
          </td>{" "}
          <td className="product-subtotal">
            {" "}
            {(product.price * product.quantity).formatMoney(0, 3)}
            VNĐ{" "}
          </td>{" "}
          <td className="product-remove">
            <button>
              {" "}
              <i className="fa fa-2x fa-trash-o" onClick={this.deleteProduct.bind(this, i)}/>{" "}
            </button>{" "}
          </td>{" "}
        </tr>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="cart-container">
              <table className="cart">
                <thead>
                  <tr>
                    <th className="product-thumbnail">
                      {" "}
                      <b className="hidden-mobile"> Sản phẩm </b>
                    </th>
                    <th className="product-name">
                      {" "}
                      <span className="hidden-mobile">
                        {" "}
                        <b> Tên sản phẩm </b>
                      </span>{" "}
                    </th>{" "}
                    <th className="product-price">
                      {" "}
                      <span className="hidden-mobile">
                        {" "}
                        <b> Đơn giá </b>
                      </span>{" "}
                    </th>{" "}
                    <th className="product-quantity">
                      {" "}
                      <span className="hidden-mobile">
                        {" "}
                        <b> Số lượng </b>
                      </span>{" "}
                    </th>{" "}
                    <th className="product-subtotal">
                      {" "}
                      <b className="hidden-mobile"> Thành tiền </b>
                    </th>
                    <th className="product-remove">
                      {" "}
                      <b className="hidden-mobile"> Xóa tất cả </b>
                    </th>
                  </tr>{" "}
                </thead>

                <tbody>
                  {" "}
                  {cartItems}{" "}
                  
                  <tr>
                    <td colSpan={6} className="actions">
                      <div className="more">
                        <button
                          type="button"
                          className="btn-payment btn btn-primary btn-lg"
                        >
                          {" "}
                          Xóa toàn bộ{" "}
                        </button>{" "}
                      </div>{" "}
                    </td>{" "}
                  </tr>{" "}
                </tbody>
              </table>{" "}
            </div>{" "}
            <div className="container">
              <div className="cart-checkout row">

              <Coupon
                            couponCode={coupon_code}
                            changeCouponCode={this.changeCouponCode.bind(this)}
                            applyCoupon={this.handleApplyCoupon.bind(this)} />
                
                {/* <div className="col-xl-6 col-lg-6 col-md-12 box">
                  <div className="cart-coupon">
                    <h3> Mã giảm giá </h3>{" "}
                    <input type="text" placeholder="Nhập mã giảm giá" />
                    <div className="more">
                      <button
                        type="button"
                        className="btn-payment btn btn-primary btn-lg"
                      >
                        {" "}
                        Áp dụng{" "}
                      </button>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "} */}
                
                <div className="col-xl-6 col-lg-6 col-md-12 box">
                  <div className="cart-total">
                    <h3> Tổng tiền </h3>{" "}
                    <table>
                      <tbody>
                        <tr className="cart-subtotal">
                          <th> Giá tiền </th>{" "}
                          <td className="float-right">
                            {" "}
                            {totalPrice.formatMoney(0, 3)}
                            VNĐ{" "}
                          </td>{" "}
                        </tr>{" "}
                        <tr className="cart-discount">
                          <th>
                            {" "}
                            Giảm giá <span className="discount-rate" />{" "}
                          </th>{" "}
                          <td className="float-right">{discount.formatMoney(0, 3)} VNĐ </td>{" "}
                        </tr>{" "}
                        <tr className="cart-shipping">
                          <th>
                            {" "}
                            Vận chuyển <span className="discount-rate" />{" "}
                          </th>{" "}
                          <td className="float-right">
                            {" "}
                            {shippingPrice.formatMoney(0, 3)}
                            VNĐ{" "}
                          </td>{" "}
                        </tr>{" "}
                        <tr className="order-total">
                          <th> Tổng tiền </th>{" "}
                          <td className="amount float-right">
                            {" "}
                            {(totalPrice + shippingPrice - discount).formatMoney(0, 3)}
                            VNĐ{" "}
                          </td>{" "}
                        </tr>{" "}
                      </tbody>{" "}
                    </table>{" "}
                    <div className="checkout-proceed">
                      <div className="more">
                        <button
                          type="button"
                          className="btn-payment btn btn-primary btn-lg"
                        >
                          {" "}
                          Đặt hàng{" "}
                        </button>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

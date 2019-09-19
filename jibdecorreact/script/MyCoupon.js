function Coupon(props) {
  return (
    <div className="col-xl-6 col-lg-6 col-md-12 box">
      <div className="cart-coupon">
        <h3> Mã giảm giá </h3>{" "}
        <input
          type="text"
          placeholder="Nhập mã giảm giá"
          value={props.couponCode}
          onChange={props.changeCouponCode}
        />
        <div className="more">
          <button
            type="button"
            className="btn-payment btn btn-primary btn-lg"
            onClick={props.applyCoupon}
          >
            {" "}
            Áp dụng{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

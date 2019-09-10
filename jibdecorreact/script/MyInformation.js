function MyInformation(){
    return(
      <div className="container">
     <div className="checkout-address-selection">
    <div className="checkout-address-selection__container">
      <div className="checkout-address-selection__section-header">
        <div className="checkout-address-selection__section-header-text">
          <svg className="shopee-svg-icon icon-location-marker" height={16} viewBox="0 0 12 16" width={12}>
            <path d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z" fillRule="evenodd" />
          </svg> 
          Địa chỉ nhận hàng
        </div>
      </div>
      <div className="checkout-address-selection__selected-address-summary">
        <div className="checkout-address-row">
          <div className="checkout-address-row__user-detail">Nguyễn Văn A (+84) 123456789</div>
          <div className="checkout-address-row__address-summary">295 Kim Ngưu, Phường Thanh Lương, Quận Hai Bà Trưng, Hà Nội</div>
          <div className="checkout-address-row__default-label">Mặc định</div>
        </div>
        <div className="checkout-address-selection__change-btn">Thay đổi</div>
      </div>
    </div>
  </div>
  </div>
    )
  }
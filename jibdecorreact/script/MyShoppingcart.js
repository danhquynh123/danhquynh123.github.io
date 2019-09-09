Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
c = isNaN(c = Math.abs(c)) ? 2 : c,
d = d == undefined ? "," : d,
t = t == undefined ? "." : t,
s = n < 0 ? "-" : "",
i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

class MyShoppingcart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {
                    id: 1,
                    thumbnail: 'img/product1.png',
                    name: 'Kệ tủ gỗ 1',
                    price: 2599000,
                    quantity: 2
                },
                {
                    id: 2,
                    thumbnail: 'img//product2.png',
                    name: 'Kệ tủ gỗ 2',
                    price: 3000000,
                    quantity: 4
                }
            ]
        };
    }

    render() {
        const products = this.state.products;
        let cartItems = [];
        let shippingPrice = 300000;
        let totalPrice = 0;

        for (let i = 0; i < products.length; i++) {
            const product = products[i];

            totalPrice += product.price * product.quantity

            cartItems.push(
                <tr className="cart-item" key={product.id}>
                    <td className="product-thumbnail">
                        <a href="shop-detail.html">
                            <img src={product.thumbnail} />
                        </a>
                    </td>
                    <td className="product-name">
                        <a href="detail.html">{product.name}</a>
                    </td>
                    <td className="product-price">{product.price.formatMoney(0,3)} VNĐ</td>
                    <td className="product-quantity">
                        <div>
                            <input type="number" className="form-control text-center" defaultValue={product.quantity} />
                        </div>
                    </td>
                    <td className="product-subtotal">{(product.price * product.quantity).formatMoney(0,3)} VNĐ</td>
                    <td className="product-remove">
                        <button><i className="fa fa-trash-o" /></button>
                    </td>
                </tr>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="cart-container">
                            <table className="cart">
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail"><b className="hidden-mobile">Sản phẩm</b></th>
                                        <th className="product-name"><span className="hidden-mobile"><b>Tên sản phẩm</b></span></th>
                                        <th className="product-price"><span className="hidden-mobile"><b>Đơn giá</b></span></th>
                                        <th className="product-quantity"><span className="hidden-mobile"><b>Số lượng</b></span></th>
                                        <th className="product-subtotal"><b className="hidden-mobile">Thành tiền</b></th>
                                        <th className="product-remove"><b className="hidden-mobile">Xóa tất cả</b></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cartItems}
                                    {/* <tr className="cart-item">
                                    <td className="product-thumbnail">
                                        <a href="shop-detail.html">
                                        <img src="img/product1.png" />
                                        </a>
                                    </td>
                                    <td className="product-name">
                                        <a href="detail.html">Bộ bàn ghế sofa</a> 
                                    </td>
                                    <td className="product-price">2.599.000đ</td>
                                    <td className="product-quantity">
                                        <div>
                                        <input type="number" className="form-control text-center" defaultValue={1} />
                                        </div>
                                    </td>
                                    <td className="product-subtotal">2.599.000đ</td>
                                    <td className="product-remove">
                                        <button><i className="fa fa-trash-o" /></button>
                                    </td>
                                    </tr>
                                    <tr className="cart-item">
                                    <td className="product-thumbnail">
                                        <a href="shop-detail.html">
                                        <img src="img//product2.png" alt="quynh cool" />
                                        </a>
                                    </td>
                                    <td className="product-name">
                                        <a href="detail.html">Bộ bàn ghế sofa</a> 
                                    </td>
                                    <td className="product-price">2.599.000đ</td>
                                    <td className="product-quantity">
                                        <div>
                                        <input type="number" className="form-control text-center" defaultValue={1} />
                                        </div>
                                    </td>
                                    <td className="product-subtotal">2.599.000đ</td>
                                    <td className="product-remove">
                                        <button><i className="fa fa-trash-o" /></button>
                                    </td>
                                    </tr> */}

                                    <tr>
                                        <td colSpan={6} className="actions">
                                            <div className="more">
                                                <button type="button" className="btn-payment btn btn-primary btn-lg">Xóa toàn bộ</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="container">
                            <div className="cart-checkout row">
                                <div className="col-xl-6 col-lg-6 col-md-12 box">
                                    <div className="cart-coupon">
                                        <h3>Mã giảm giá</h3>
                                        <input type="text" placeholder="Nhập mã giảm giá" />
                                        <div className="more">
                                            <button type="button" className="btn-payment btn btn-primary btn-lg">Áp dụng</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12 box">
                                    <div className="cart-total">
                                        <h3>Tổng tiền</h3>
                                        <table>
                                            <tbody>
                                                <tr className="cart-subtotal">
                                                    <th>Giá tiền</th>
                                                    <td className="float-right">{totalPrice.formatMoney(0,3)} VNĐ</td>
                                                </tr>
                                                <tr className="cart-discount">
                                                    <th>Giảm giá<span className="discount-rate" /></th>
                                                    <td className="float-right">0 VNĐ</td>
                                                </tr>
                                                <tr className="cart-shipping">
                                                    <th>Vận chuyển<span className="discount-rate" /></th>
                                                    <td className="float-right">{shippingPrice.formatMoney(0,3)} VNĐ</td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th>Tổng tiền</th>
                                                    <td className="amount float-right">{(totalPrice + shippingPrice).formatMoney(0,3)} VNĐ</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="checkout-proceed">
                                            <div className="more">
                                                <button type="button" className="btn-payment btn btn-primary btn-lg">Đặt hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
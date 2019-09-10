function MyHeader(){
    return(
      <div>
    <div className="topbanner">
      <p>20% OFF EXTRA - USE: JIBDECOR</p>
    </div>
    <header className="w-100 fixed-mobile container">
      <nav className="navbar navbar-expand-lg navbar-light p-3 navbar1">
        <button className="navbar-toggler mr-auto collapsed navbar-toggler1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-toggler-icon1" />
        </button>
        <a className="navbar-brand d-md-block d-lg-none reset" href="index.html">
          <img src="img/logo-fixed.png" alt="quynh cool" />
        </a>
        <div className="ml-auto" />
        <div className="navbar-collapse collapse" id="navbarSupportedContent" style={{}}>
          <ul className="navbar-nav mr-auto header-left">
            <li className="nav-item">
              <form className="nav-link nav-link1 nav-search">
                <button type="submit"><i className="fa fa-search" /></button>
                <input className="ml-2" type="text" placeholder="Nhập từ khóa cần tìm" />
              </form>
            </li>
          </ul>
          <a className="navbar-brand d-none d-lg-block" href="index.html">
            <img src="img/logo-fixed.png" alt="quynh cool" />
          </a>
          <ul className="navbar-nav ml-auto header-right">	
            <ul className="navbar-nav ml-auto header-right">
              <div className="userProfile d-flex" id="divAuthentication">
                <li className="nav-item nav-login">
                  <a className="nav-link nav-link1" href="#" data-toggle="modal" data-target="#loginModal">
                    Đăng nhập
                  </a>
                </li>
                <li className="nav-item btn-register">
                  <a className="btn btn-submit" href="#" data-toggle="modal" data-target="#registerModal">
                    Đăng ký
                  </a>
                </li>
              </div>
            </ul>
            <li className="nav-item  btn-cart d-sm-block d-sm-none">
              <a className="cart-icon  shopping-cart" href="payment.html">
                <img src="img/shopping.png" alt="quynh cool" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>
    )
  }
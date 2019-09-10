function MyNavbar(){
    return(
    <div className="container">
    <nav className="navbar navbar-jib navbar-expand-lg navbar-light bg-light container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContentXL" aria-controls="navbarSupportedContentXL" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContentXL">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link nav-link2" href="menu.html">Nội thất<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nav-link2" href="menu.html">Ngoài trời<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nav-link2" href="menu.html">Đèn nến<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nav-link2" href="menu.html">Đồ Trang Trí<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nav-link2" href="menu.html">Thảm<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nav-link2" href="sale.html">Giảm Giá<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link nav-link2" href="contact.html">Liên Hệ<span className="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
  }
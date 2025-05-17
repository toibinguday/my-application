// app/chitietsanpham/page.js
export default function ChiTietSanPham() {
  return (
    <main className="container">
      <section className="product-header">
        <h1 className="product-title">Nem Nướng Lạng Sơn</h1>
        <p className="product-price">Giá: <strong>50.000đ/phần</strong></p>
      </section>

      <section className="product-main">
        <div className="product-image">
          <img
            src="https://cdn.tgdd.vn/Files/2020/03/25/1244527/cach-lam-banh-xeo-chay-thom-ngon-gion-rum-don-gian-13-760x367.jpg"
            alt="Nem Nướng Lạng Sơn"
          />
        </div>
        <div className="product-info">
          <p className="short-desc">
            Nem nướng Lạng Sơn - Đặc sản nức tiếng vùng núi, thơm lừng, béo ngậy, chinh phục mọi thực khách.
          </p>

          <h2>Thành phần:</h2>
          <ul>
            <li>Thịt lợn xay nhuyễn</li>
            <li>Bì lợn thái sợi</li>
            <li>Gia vị đặc biệt</li>
            <li>Xiên tre và lá chuối</li>
          </ul>

          <div className="button-group">
            <button className="btn buy">Mua ngay</button>
            <button className="btn order">Đặt hàng</button>
          </div>
        </div>
      </section>

      <section className="product-description">
        <h2>Giới thiệu món ăn</h2>
        <p>
          Nem nướng Lạng Sơn được chế biến từ nguyên liệu tươi ngon, tẩm ướp gia vị khéo léo, nướng trên bếp than hồng cho đến khi chín vàng óng.
          Vị ngọt của thịt, độ dai giòn của bì và mùi thơm phức của lá chuối quyện hòa, tạo nên món ăn đậm đà khó cưỡng.
          Thưởng thức nem nướng cùng bún, rau sống và nước chấm pha đặc biệt là chuẩn vị nhất!
        </p>
      </section>
    </main>
  );
}

// app/chitietsanpham/page.js
export default function ChiTietSanPham() {
  return (
    <main className="container">
      <section className="product-header">
        <h1 className="product-title">Bò Lá Lốt</h1>
        <p className="product-price">Giá: <strong>60.000đ/phần</strong></p>
      </section>

      <section className="product-main">
        <div className="product-image">
          <img
            src="https://cdn.tgdd.vn/Files/2017/03/23/964066/cach-lam-bo-nuong-la-lot-va-nuoc-cham-thom-ngon-dung-vi-202205241656356081.jpg"
            alt="Bò Lá Lốt"
          />
        </div>
        <div className="product-info">
          <p className="short-desc">
            Bò lá lốt - Món ăn dân dã mang hương vị đặc trưng, thịt bò mềm thơm cuộn trong lá lốt nướng thơm lừng.
          </p>

          <h2>Thành phần:</h2>
          <ul>
            <li>Thịt bò xay nhuyễn</li>
            <li>Mỡ heo</li>
            <li>Gia vị đặc trưng</li>
            <li>Lá lốt tươi</li>
            <li>Xiên tre hoặc tăm tre</li>
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
          Bò lá lốt là món ăn quen thuộc với hương vị đậm đà, hấp dẫn. Thịt bò được xay nhuyễn, tẩm ướp kỹ lưỡng rồi cuộn trong lá lốt tươi,
          sau đó nướng trên than hồng cho đến khi dậy mùi thơm đặc trưng. Lớp lá lốt cháy xém nhẹ, thơm lừng, quyện cùng nhân thịt mềm mọng tạo nên trải nghiệm ẩm thực khó quên.
          Thưởng thức cùng bánh hỏi, rau sống và nước mắm chua ngọt để cảm nhận trọn vẹn hương vị truyền thống.
        </p>
      </section>
    </main>
  );
}

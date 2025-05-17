import styles from "./footer.module.css"
import Image from "next/image";

export function Footer() {
    return (
        <div className={styles.mainFooter}>
        <footer className={styles.footer}>
          <div className={styles.footerContainer}>
            <ul className={styles.footerColumn}>
              <li><h4>VỀ GEARVN</h4></li>
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Liên hệ</a></li>
            </ul>

            <ul className={styles.footerColumn}>
              <li><h4>CHÍNH SÁCH</h4></li>
              <li><a href="#">Chính sách bảo hành</a></li>
              <li><a href="#">Chính sách giao hàng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
            </ul>

            <ul className={styles.footerColumn}>
              <li><h4>THÔNG TIN</h4></li>
              <li><a href="#">Hệ thống cửa hàng</a></li>
              <li><a href="#">Hướng dẫn mua hàng</a></li>
              <li><a href="#">Hướng dẫn thanh toán</a></li>
              <li><a href="#">Hướng dẫn trả góp</a></li>
              <li><a href="#">Tra cứu bảo hành</a></li>
            </ul>

            <ul className={styles.footerColumn}>
              <li><h4>TỔNG ĐÀI HỖ TRỢ (8:00 - 21:00)</h4></li>
              <li>Mua hàng: <a href="tel:19005301" className={styles.phone}>1900.5301</a></li>
              <li>Bảo hành: <a href="tel:19005325" className={styles.phone}>1900.5325</a></li>
              <li>Khiếu nại: <a href="tel:18006173" className={styles.phone}>1800.6173</a></li>
              <li>Email: <a href="mailto:cskh@gearvn.com">cskh@gearvn.com</a></li>
            </ul>
          </div>

          <div className={styles.social}>
            <h4>KẾT NỐI VỚI CHÚNG TÔI</h4>
            <div className={styles.socialIcons}>
              <a href="#"><img src="/facebook.webp" alt="Facebook" /></a>
              <a href="#"><img src="/tiktok.webp" alt="TikTok" /></a>
              <a href="#"><img src="/youtube.webp" alt="YouTube" /></a>
              <a href="#"><img src="/zalo.webp" alt="Zalo" /></a>
            </div>
          </div>

          <div className={styles.paymentShipping}>
            <div className={styles.shipping}>
              <h4>ĐƠN VỊ VẬN CHUYỂN</h4>
              <Image src="/ship.webp" width={50 } height={25  } alt="Shipping" />
              
            </div>
            <div className={styles.payment}>
              <h4>CÁCH THỨC THANH TOÁN</h4>
              <Image src="/pay.webp" width={250} height={50} alt="Payment" />
            </div>
          </div>

          <div className={styles.copyright}>
            <p>© 2024 GEARVN. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
}
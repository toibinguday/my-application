import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

// Danh sách sản phẩm
const products = [
  { image: "/image1.jpg", name: "Bánh Bèo", price: "15.000đ", oldPrice: "20.000đ", discount: "-25%", remain: 100 },
  { image: "/image2.jpg", name: "Bánh Khọt", price: "15.000đ - 20.000đ", oldPrice: "25.000đ", discount: "-20%", remain: 80 },
  { image: "/image3.jpg", name: "Bánh Xèo", price: "30.000đ", oldPrice: "40.000đ", discount: "-25%", remain: 50 },
];

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.productContainer}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <Image src={product.image} alt={product.name} width={150} height={150} />
            <h3>{product.name}</h3>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.oldPrice}><del>{product.oldPrice}</del> <span className={styles.discount}>{product.discount}</span></p>
            <p className={styles.remain}>Còn {product.remain} suất</p>
            <button className={styles.buyButton}>Mua ngay</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

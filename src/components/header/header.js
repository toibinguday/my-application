import Image from "next/image";
import styles from "./header.module.css";

export function Header() {
    return (  
      
        <><header className={styles.header}>
            <h1>H O M E</h1>
            <div className={styles.logo}>
                <Image src="/images.jpg" width={200} height={150} alt="logo"></Image>
            </div>
        </header>
        <nav className={styles.navbarContainer}>
                <div className={styles.navbar}>
                    <a href="Home">Trang chủ </a>
                    <a href="#">Sản Phẩm</a>
                    <a href="#">Sự kiện</a>
                    <a href="#">Liên hệ</a>
                </div>
            </nav></>
    );
}
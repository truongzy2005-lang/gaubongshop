"use client";
import React, { useState, use } from "react";
import Link from "next/link";
import { bears } from "../../data"; // Import từ file data vừa sửa ở trên
import styles from "./page.module.css";

export default function ProductDetail({ params }) {
  // Giải nén params bằng use() của Next.js Client Component
  const { id } = use(params); 
  
  const [quantity, setQuantity] = useState(1);

  // Tìm bé gấu theo id
  const product = bears.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className={styles.error}>Không tìm thấy bé gấu này rồi! 🧸</div>;
  }
  return (
    <div className={styles.wrapper}>
      {/* HEADER (Giống trang chủ) */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>GẤU YÊU 🧸</Link>
          <div className={styles.navLinks}>
            <Link href="/">Trang chủ</Link>
            <a href="#">Sản phẩm</a>
            <a href="#">Giỏ hàng</a>
            <a href="#">Liên hệ</a>
          </div>
          <button className={styles.memberBtn}>Thành Viên</button>
        </div>
      </nav>

      <main className={styles.container}>
        {/* PHẦN TRÊN: ẢNH VÀ THÔNG TIN MUA HÀNG */}
        <div className={styles.mainCard}>
          {/* Bên trái: Ảnh sản phẩm */}
          <div className={styles.imageSection}>
            <div className={styles.mainImageWrapper}>
              <img src={product.img} alt={product.name} />
            </div>
          </div>

          {/* Bên phải: Thông tin chi tiết */}
          <div className={styles.infoSection}>
            <nav className={styles.breadcrumb}>Trang chủ / {product.name}</nav>
            <h1 className={styles.productName}>{product.name}</h1>
            
            <div className={styles.priceRow}>
              <span className={styles.currentPrice}>{product.price}</span>
              <span className={styles.oldPrice}>400.000đ</span>
              <span className={styles.discountTag}>-20%</span>
            </div>

            <p className={styles.shortDesc}>
              Bé <b>{product.name}</b> phiên bản cao cấp, chất liệu bông Mochi siêu mềm mịn, 
              đàn hồi cực tốt. Sản phẩm an toàn cho làn da, phù hợp để ôm ngủ hoặc làm quà tặng.
            </p>

            <div className={styles.status}>Trạng thái: <span>Còn hàng</span></div>

            <div className={styles.orderRow}>
              <div className={styles.quantityBox}>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              
              <button className={styles.addCartBtn}>THÊM VÀO GIỎ HÀNG</button>
              <button className={styles.buyNowBtn}>MUA NGAY</button>
            </div>
          </div>
        </div>

        {/* PHẦN DƯỚI: MÔ TẢ CHI TIẾT */}
        <div className={styles.detailBox}>
          <h3>Thông tin chi tiết</h3>
          <h4>Mô tả sản phẩm</h4>
          <p>Bé <b>{product.name}</b> được thiết kế với phong cách hiện đại, đáng yêu, phù hợp cho mọi lứa tuổi.</p>
          <ul>
            <li><b>Loại sản phẩm:</b> Gấu bông Mochi cao cấp.</li>
            <li><b>Kích thước:</b> 30cm - 40cm.</li>
            <li><b>Chất liệu:</b> Vỏ vải nỉ nhung co giãn 4 chiều, bông nhân vật 7D trắng tinh khiết.</li>
            <li><b>Công dụng:</b> Ôm ngủ, trang trí phòng khách, quà tặng sinh nhật, kỷ niệm.</li>
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Tiệm Gấu Yêu - Mềm mại như vòng tay mẹ 💙</p>
      </footer>
    </div>
  );
}
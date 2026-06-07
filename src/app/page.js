"use client";
import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const bears = [
  { id: 1, name: "Cinamon cute", price: "250.000đ", tag: "Bán Chạy", img: "/hinh/1.jpg" },
  { id: 2, name: "Kurumi đáng yêu", price: "185.000đ", tag: "Mới Về", img: "/hinh/2.jpg" },
  { id: 3, name: "Medoly xinh xắn", price: "220.000đ", tag: "Yêu Thích", img: "/hinh/3.jpg" },
  { id: 4, name: "Cặp đôi Thiên Thần Nhỏ", price: "195.000đ", tag: "Giới Hạn", img: "/hinh/4.jpg" },
  { id: 5, name: "Cánh cụt đen", price: "240.000đ", tag: "Hot", img: "/hinh/5.jpg" },
  { id: 6, name: "Cánh cụt đen lạnh lùng", price: "350.000đ", tag: "Độc Lạ", img: "/hinh/6.jpg" },
  { id: 7, name: "Cánh cụt đen hài hước", price: "210.000đ", tag: "Bán Chạy", img: "/hinh/7.jpg" },
  { id: 8, name: "Cánh cụt đen nhỏ xiu", price: "235.000đ", tag: "Mới Về", img: "/hinh/8.jpg" },
  { id: 9, name: "Capypara", price: "280.000đ", tag: "Hot", img: "/hinh/9.jpg" },
  { id: 10, name: "Capypara cặp xanh", price: "190.000đ", tag: "Yêu Thích", img: "/hinh/10.jpg" },
  { id: 11, name: "Capypara trái cam", price: "175.000đ", tag: "Ưu Đãi", img: "/hinh/11.jpg" },
  { id: 12, name: "Capypara dâu tây", price: "225.000đ", tag: "Best Seller", img: "/hinh/12.jpg" },
  { id: 13, name: "Capypara đầu bếp", price: "165.000đ", tag: "Mới Về", img: "/hinh/13.jpg" },
  { id: 14, name: "Chú chó giận dữ", price: "295.000đ", tag: "Premium", img: "/hinh/14.jpg" },
  { id: 15, name: "Chú chó thông noel", price: "320.000đ", tag: "Giới Hạn", img: "/hinh/15.jpg" },
];

export default function GauYeuShop() {
  return (
    <div className={styles.wrapper}>
      {/* --- MENU ĐIỀU HƯỚNG --- */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>GẤU YÊU 🧸</div>
          <ul className={styles.navLinks}>
            <li><a href="#">Trang Chủ</a></li>
            <li><a href="#">Tiệm Gấu</a></li>
            <li><a href="#">Góc Review</a></li>
            <li><a href="#">Liên Hệ</a></li>
          </ul>
          <div className={styles.navActions}>
            <div className={styles.cartBtn}>
               🛒 <span className={styles.badge}>15</span>
            </div>
            <button className={styles.memberBtn}>Thành Viên</button>
          </div>
        </div>
      </nav>

      <main>
        {/* --- BANNER CHÍNH --- */}
        <header className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.tagline}>Tiệm Gấu Yêu - Thế giới Mochi 💙</span>
            <h1>Những Người Bạn <br/><span>Mềm Mại Như Mây</span></h1>
            <p>
              Từ Cinamon đến Capypara, mỗi chú gấu tại Gấu Yêu đều được tuyển chọn kỹ lưỡng, 
              mang lại cảm giác êm ái và hạnh phúc cho bạn.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>Nhận Nuôi Ngay 🐾</button>
              <button className={styles.btnSecondary}>Mẫu Mới Về</button>
            </div>
          </div>
          <div className={styles.heroImgBox}>
            <div className={styles.circleBg}></div>
            <img src="/hinh/1.jpg" alt="Gấu Yêu Hero" className={styles.floating} />
          </div>
        </header>

        {/* --- DANH SÁCH SẢN PHẨM --- */}
        <section className={styles.productSection}>
          <div className={styles.sectionTitle}>
            <h2>Bộ Sưu Tập Yêu Thương</h2>
            <p>Sản phẩm chính hãng - Bông trắng 100%</p>
          </div>

          <div className={styles.productGrid}>
            {bears.map((bear) => (
              <div key={bear.id} className={styles.card}>
                <div className={styles.cardTag}>{bear.tag}</div>
                <div className={styles.imageWrapper}>
                   <img src={bear.img} alt={bear.name} />
                </div>
                <div className={styles.cardBody}>
                  <h3>{bear.name}</h3>
                  <div className={styles.stars}>★★★★★</div>
                  <div className={styles.price}>{bear.price}</div>
                  <button className={styles.addBtn}>Thêm Vào Giỏ</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- CHÂN TRANG --- */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h3>GẤU YÊU SHOP</h3>
          <p>Kết nối trái tim qua những món quà nhỏ xinh.</p>
          <div className={styles.footerSocials}>
            <span>Facebook</span> • <span>Instagram</span> • <span>TikTok</span>
          </div>
          <p className={styles.copy}>© 2024 Tiệm Gấu Yêu. All rights reserved 💙</p>
        </div>
      </footer>
    </div>
  );
}
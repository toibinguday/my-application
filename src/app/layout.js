// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <title>Trang Ẩm Thực VN</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

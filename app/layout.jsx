import "./globals.css";

export const metadata = {
  title: "泡泡爪宠物洗护店",
  description: "上海静安预约制宠物洗护、护理与美容造型门店。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

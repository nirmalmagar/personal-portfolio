import "./globals.css";
import { Lora, Nunito } from "next/font/google";

// const nunito = Nunito({
//   subsets: ["latin"],
//   weight: ["400"],
// });

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.className}`}
      >
      
        {children}
      </body>
    </html>
  );
}

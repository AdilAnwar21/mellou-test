import { Poppins, Heebo, Cedarville_Cursive } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const heebo = Heebo({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-heebo",
});

const cedarville = Cedarville_Cursive({
  weight: ['400'],
  subsets: ["latin"],
  variable: "--font-cedarville",
});

export const metadata = {
  title: "Mellou",
  description: "Mellou - A pudding for everyone. Vegetarian, egg-free, and gluten-free puddings.",
  icons: {
    icon: "/img/melllou logo.jpg",
    shortcut: "/img/melllou logo.jpg",
    apple: "/img/melllou logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body className={`${poppins.variable} ${heebo.variable} ${cedarville.variable}`}>
        {children}
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script
          src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

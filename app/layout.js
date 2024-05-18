import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "9ja-gist",
  description: "Forum site for Nigerians to discuss, share insights and have fun",
};

const Amita = localFont({
  src: '../public/fonts/Amita-Regular.ttf',
  variable: '--font-amita',
});

const Handlee = localFont({
  src: '../public/fonts/Handlee-Regular.ttf',
  variable: '--font-handlee',
})

const PtSans = localFont({
  src: '../public/fonts/PtSans.ttf',
  variable: '--font-ptsans',
});

const Gothic = localFont({
  src: '../public/fonts/Gothic.ttf',
  variable: '--font-gothic',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Amita.variable} ${Handlee.variable} ${PtSans.variable} ${Gothic.variable}`}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}

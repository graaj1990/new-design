import React from 'react'
import './../public/styles/globals.css'
import "./../public/css/bootstrap.min.css";
import "./../public/css/remixicon.css";
import "./../public/css/flaticon.css";
import "./../public/css/header.css";
import "./../public/css/footer.css";
import "./../public/css/dark-switch-btn.css";
import 'swiper/css/bundle';
import 'react-accessible-accordion/dist/fancy-example.css';


// Globals Style
import "./../public/css/globals.css";
import "./../public/css/responsive.css";
// Dark Mode Style
import './../public/css/dark-mode.css'

import  { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Sado - React Next.js Online Booking Template",
  description: "Online Booking Template",
};
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

 
import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer"

export default function Index({ children }) {
  return (
     <>
     <Navbar />
     { children }
     <Footer />
     </>
  )
}

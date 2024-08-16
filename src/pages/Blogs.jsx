import React from 'react'
import Layout from '../components/Layout'
import HeroBlog from '../components/Blogs/Hero'
import Blog from '../components/Blogs/Blog'
import Footer from '../components/Footer'

function Blogs() {
  return (
    <>
      <Layout>
        <HeroBlog />
        <Blog />
      </Layout>
      <Footer />
    </>
  )
}

export default Blogs

import Bloglist from "@component/components/blogs/BlogList";
import SingleBlog from "@component/components/blogs/SingleBlog";
import Footer from "@component/components/common/Footer";
import Header from "@component/components/common/Header";
import Heading from "@component/components/common/Heading";
import Head from "next/head";
import React from "react";

const Blogs = () => {
  return (
    <div>
      <Header />
      <Head>
        <title>Blogs</title>
      </Head>
      <div
        className=""
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Heading
          titletext="Blogs"
          title="Blogs "
          subtext="Nunc convallis semper justo quis tempor. Praesent molestie, lorem sed imperdiet tempor, libero urna semper urna, facilisis vulputate velit arcu vitae mi. Donec ac nisi ex."
        />
        <SingleBlog />
      </div>
<Bloglist/>
      <Footer />
    </div>
  );
};

export default Blogs;

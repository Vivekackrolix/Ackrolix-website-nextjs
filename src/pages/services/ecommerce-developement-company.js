import React from "react";
import Head from "next/head";
import Footer from "../../components/Common/Footer";
import Header from "../../components/Common/Header";
import ComponentHead from "../../components/Common/ComponentHead";
import Banner from "../../components/Services/DetailPage/Banner";
import Process from "../../components/Services/DetailPage/Process";
import ProcessHead from "../../components/Services/DetailPage/ProcessHead";
import Cards from "../../components/Services/DetailPage/Cards";
import Enquiry from "../../components/Services/DetailPage/Enquiry";
import Technology from "../../components/Services/DetailPage/Technology";
import Work from "../../components/Services/DetailPage/Work";
import Clients from "../../components/Home/Clients";

const EcommerceDevelopmentCompany = () => {
  const processes = [
    {
      id: "1",
      name: "Custom Website Design for Ecommerce",
      desc: "Add content to your online store with our e-commerce solutions. From impressive presentation to stunning design, we weave the fabric of integration, migration, app development, and more. As your trusted Shopify partner, we will be your compass for e-commerce success.",
    },
    {
      id: "2",
      name: "customized e-commerce store in Gurgaon",
      desc: "Our e-commerce Development Solutions shine as a foundation for security and creativity. We weave digital ideas that exceed all expectations to meet your needs. Your dreams, our goals—together, we will conquer the online world with unique solutions and set new standards in web development.",
    },
    {
      id: "3",
      name: "Shopping Cart Development in Gurgaon",
      desc: "With Ackrolix's caliber, we create powerful and beautiful trucks. Like skilled artisans, we craft feature-rich insights that transform businesses and ignite the flames of revenue growth. Step into the spotlight of success; every click is a dance of joy, and every exchange is a harmony of satisfaction.",
    },
    {
      id: "4",
      name: "Ecommerce Marketplace Services in Gurgaon",
      desc: "Gurgaon is the gateway to e-commerce quality, where we plan and develop services for the global market for multiplatform sales. From the best vision to the biggest dream, we develop digital ideas that cross borders and lead to success in the online world. Enter endless realms with our eCommerce skills and watch your business conquer the digital world.",
    },
    {
      id: "5",
      name: "Highly Responsive Ecommerce Development",
      desc: "We make responsive websites with a great user experience that dance beautifully on all devices. Whether on a large desktop or a beautiful mobile phone, our design is easy and engages users with every click. Be captivated by cross-device enchantment as it unlocks a world of limitless user friendliness.",
    },
    {
      id: "6",
      name: "Secure Payment Gateways",
      desc: "We use our expertise to smoothly integrate multiple payment gateways into your online store, ensuring every transaction is secure and easy. Trust our experts; we'll pave the way for a competitive, reliable, and engaging online shopping experience.",
    },
  ];
  const cards = [
    {
      id: 1,
      para: "Our comprehensive understanding of the top platforms enables us to develop specialized and reasonably priced solutions to address the specific problems faced by each firm in the complex world of e-commerce.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Solutions",
      subtitle: "Ecommerce Development Services",
    },
    {
      id: 2,
      icon: "01",
      title: "Magento",
      para: "An open-source marvel that attracts medium and large vendors with its high customization, out-of-the-box features, and seamless integration of integrations Attend eCommerce events and watch your business soar to new heights with its incredible capabilities.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 3,
      icon: "02",
      title: "Shopify",
      para: "Our e-commerce development solutions combine the captivating power of content to make your online store look stunning. From seamless showcase setups to beautiful design templates, we provide integration, migration, app development, and more! As your Shopify partner, we will guide you to eCommerce success.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 4,
      icon: "03",
      title: "WooCommerce",
      para: "Agile Architect of Dreams, which powers both startups and giants with its user-friendly capabilities, With the soundtrack of the plugins and endless customization, your website will fly into infinity.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 5,
      icon: "04",
      title: "Drupal Commerce",
      para: "The gateway to the e-commerce wonderland where start-ups and SMEs open their doors to a world of possibilities. Be enchanted by free and highly customizable tools that take you into the world of online success with no licensing fees.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 6,
      icon: "05",
      title: "SAP Commerce Cloud",
      para: "A powerful PaaS solution for medium and large digital retailers! Its attractive features drive omnichannel strategies and create success in the digital space by supporting business scalability. Enter a world of endless possibilities where dreams rise and business rises to new levels of excellence.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
    {
      id: 7,
      icon: "06",
      title: "Support & Maintenance",
      para: "We provide ongoing support & maintenance services to address any technical issues, perform updates, & implement enhancements as your business evolves.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];
  const techs = [
    {
      id: "1",
      img: "/assets/images/service/svg/react.svg",
      name: "React.js",

    },
    {
      id: "2",
      img: "/assets/images/service/svg/flutter.svg",
      name: "Angular",

    },
    {
      id: "3",
      img: "/assets/images/service/svg/next.png",
      name: "Next.js",

    },
    {
      id: "4",
      img: "/assets/images/service/svg/nodejs.svg",
      name: "Node.js",

    },
    {
      id: "5",
      img: "/assets/images/service/svg/express.png",
      name: "Express",

    },
    {
      id: "6",
      img: "/assets/images/service/svg/html.png",
      name: "HTML",

    },
    {
      id: "7",
      img: "/assets/images/service/svg/bootstrap.png",
      name: "Bootstrap",

    },
    {
      id: "8",
      img: "/assets/images/service/svg/php.png",
      name: "php",

    },
    {
      id: "9",
      img: "/assets/images/service/svg/laravel.png",
      name: "Laravel",

    },
    {
      id: "10",
      img: "/assets/images/service/svg/codeigniter.png",
      name: "Codeigniter",

    },
    {
      id: "11",
      img: "/assets/images/service/svg/net.png",
      name: "Asp.net",

    },
    {
      id: "12",
      img: "/assets/images/service/svg/phython.png",
      name: "phython",

    },
    {
      id: "13",
      img: "/assets/images/service/svg/java.svg",
      name: "JAVA",

    },
    {
      id: "14",
      img: "/assets/images/service/svg/andriod.png",
      name: "Android",

    },
    {
      id: "15",
      img: "/assets/images/service/svg/flutter.svg",
      name: "Flutter",

    },
    {
      id: "16",
      img: "/assets/images/service/svg/ios.svg",
      name: "iOS",

    },
    {
      id: "17",
      img: "/assets/images/service/svg/react.svg",
      name: "ReactNative",

    },
    {
      id: "18",
      img: "/assets/images/service/svg/sql.png",
      name: "MySQL",

    },
    {
      id: "19",
      img: "/assets/images/service/svg/mongodb.png",
      name: "MonogoDb",

    },
    {
      id: "20",
      img: "/assets/images/service/svg/postgresql.svg",
      name: "PostgreSQL",

    },
    {
      id: "21",
      img: "/assets/images/service/svg/amazon-web-services.svg",
      name: "AWS",

    },
    {
      id: "22",
      img: "/assets/images/service/svg/wordpress.png",
      name: "Wordpress",

    },
    {
      id: "23",
      img: "/assets/images/service/svg/shopify.svg",
      name: "Shopify",

    },
    {
      id: "24",
      img: "/assets/images/service/svg/joomla.svg",
      name: "Joomla",

    },
    {
      id: "25",
      img: "/assets/images/service/svg/magento.svg",
      name: "Magento",

    },
    {
      id: "26",
      img: "/assets/images/service/svg/webflow.svg",
      name: "Webflow",

    },
    {
      id: "27",
      img: "/assets/images/service/svg/firebase.svg",
      name: "Firebase",

    },
    {
      id: "28",
      img: "/assets/images/service/svg/jquery.svg",
      name: "JQuery",

    },
  ];
  return (
    <div>
      <Head>
        <title>User Research Company in Gurgaon - Ackrolix</title>  
        <meta name="description" content="Ackrolix is a professional User Research Company based in Gurgaon, providing expert insights and analysis to enhance user experience." />
        <meta property="og:title" content="User Research Company in Gurgaon - Ackrolix" />
        <meta
          property="og:description"
          content="Ackrolix is a professional User Research Company based in Gurgaon, providing expert insights and analysis to enhance user experience."
        />
        <meta
          property="og:image"
          content="https://www.ackrolix.com/assets/images/logoack.png"
        />      
      
      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner 
          bannertitle="Ecommerce Development company in Gurgaon"
          bannersubtext="In the thriving city of Gurgaon, Ackrolix brings the e-commerce development scene to life, starting an exciting adventure to push the limits of innovation, foster digital imagination, and reimagine the online experience."
          serviceimg="/assets/images/service/svg/ecom.png"
          servicehead="Creating Seamless Connections &amp; Conversion in E-commerce Experiences"
          servicedesc1="As a reputable e-commerce Development Company in Gurgaon, Ackrolix recognizes that the goal of e-commerce is to develop a digital strategy that enables companies and customers to interact on a deeper level, where imagination knows no limitations and every pixel emanates enthusiasm. From Gurgaon to the global stage, our team of digital lovers—visionaries, designers, and computer nerds—builds e-commerce systems that cross national boundaries and promote business growth."
          servicedesc2="With our excellent e-commerce Development Services in Gurgaon, we provide businesses looking to succeed in the online market with specialized e-commerce development solutions. Discover the potential of Ackrolix and partner with the top Custom e-commerce Development Company in Gurgaon to improve your online visibility and drive unlimited growth."
        />
      </div>
      <Cards card={cards}/>
      <div className="container-ack md:px-0 px-5">
       <ComponentHead
        title="Technology"
        sub="Unleashing The Potential Of Innovation"
        head="At Ackrolix Innovations, we are at the forefront of revolutionizing e-commerce technology. We understand that staying ahead in the competitive online marketplace requires harnessing the power of innovative technologies to enhance user experiences, drive conversions &amp; optimize business operations."
      />
      <Technology tech={techs} />
      </div>
      <div>
        <div
          style={{
            backgroundImage:
              'url("/assets/images/service/servicebackground.png")',
          }}
        >
          <div className="container-ack md:px-0 px-5">
            <ProcessHead
              processhead="Process"
              processsub="Why choose Ackrolix for your Ecommerce Solutions?"
              processdesc="Ackrolix, a premier Ecommerce Development Company in Gurgaon, is a hotbed of inventiveness and originality. To push the limits of Ecommerce, our team of innovative designers, programmers, and marketing specialists works diligently. Utilizing the top Ecommerce platforms like Shopify, WooCommerce, Magento, and more, we specialize in developing online experiences that leave a lasting impact on your customers."
              processimg="/assets/images/service/svg/ecom1.png"
            />
            <Process process={processes} />
          </div>
        </div>
        <div
          className="h-[7.5rem]"
          style={{
            backgroundImage: 'url("/assets/images/service/wave.png")',
          }}
        ></div>
      </div>
      <Work />
      {/* <Section /> */}
      <Enquiry />
      <Clients />
      <Footer />
    </div>
  );
};

export default EcommerceDevelopmentCompany;
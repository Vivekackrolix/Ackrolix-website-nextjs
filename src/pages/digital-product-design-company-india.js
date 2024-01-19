import React from "react";
import Head from "next/head";
import Header from "../components/Common/Header";
import Banner from "../components/Services/DetailPage/Banner";
import Cards from "../components/Services/DetailPage/Cards";
import ComponentHead from "../components/Common/ComponentHead";
import Technology from "../components/Services/DetailPage/Technology";
import ProccessHead from "../components/Services/DetailPage/ProcessHead";
import Process from "../components/Services/DetailPage/Process";
import Work from "../components/Services/DetailPage/Work";
import Enquiry from "../components/Services/DetailPage/Enquiry";
import Clients from "../components/Home/Clients";
import Footer from "../components/Common/Footer";

const ProductDdesignCompany = () => {
  const processes = [
    {
      id: "1",
      name: "UI/UX",
      desc: "Dive into Ackrolix's UI/UX expertise and discover the experience-captivating designs that bring your visions to life. Our UI/UX design team excels in cutting-edge design for mobile apps and web apps, offering seamless collaboration with developers or easy export to your in-house team. Your vision, our expertise—let's create miracles together!",
    },
    {
      id: "2",
      name: "Web Design",
      desc: "Explore endless possibilities with our dynamic services—design reviews, advanced UI/UX, mind-blowing prototyping, and seamless development. Whether it's a new website or a modern update, we ensure an integrated and innovative digital presence. Let's revamp your site and make a lasting impression on competitors!",
    },
    {
      id: "3",
      name: "Mobile App Development",
      desc: "Elevate your apps in an ocean of over 2 million daily contenders! Whether for iOS, Android, Web, or cross-platform, we transform your ideas into lightning-fast, user-friendly, and captivating mobile applications. Let your unique designs shine, delighting your target customers. Unleash the extraordinary with Ackrolix’s innovative ideas!",
    },
    {
      id: "4",
      name: "BRANDING",
      desc: "Top-tier branding is Ackrolix's thing! Foster trust and recognition through compelling visuals, persuasive text, and products tailored for your audience. From global titans to business giants, we craft a magnetic connection that ensures lasting engagement. Feel the magic of effective communication and witness your brand ascend to unprecedented heights.",
    },
    {
      id: "5",
      name: "ICON & ILLUSTRATION",
      desc: "Communicate swiftly and intelligently with these small wonders, saying more with less. Transform your vision into heartfelt creative expressions beyond words. Harness the power of impactful, user-centric design to impress your audience and elevate your brand to new heights.",
    },
    {
      id: "6",
      name: "Growing Beyond Limits",
      desc: "Accelerate your product development process with Ackrolix support! Our experienced product managers and developers seamlessly integrate with your team, bringing creativity to reinvent your ideas. Enhance your digital product development and witness innovation soar. Achieve desired success through a budding partnership with Ackrolix",
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
  const cards = [
    {
      id: 1,
      para: "Our modernization solutions revolutionize your applications' performance, scalability, agility, & maintainability. We enable seamless integration with emerging technologies, optimize infrastructure, & streamline workflows to ensure your applications are future-proof.",
      bgcolor: "bg-[#fff]",
      cols: "md:col-span-2",
      textcolor: "text-secondary",
      display: "hidden",
      maintitle: "Revitalize",
      subtitle: "Revolutionize Your Applications With Modernization Solutions",
    },
    {
      id: 2,
      icon: "01",
      title: "Improved Productivity",
      para: "We aim to enhance productivity by addressing the limitations, inefficiencies, & outdated aspects of existing applications.",
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
      title: "Cost Optimization",
      para: "The strategic efforts to reduce expenses associated with application development, maintenance, & operations while maximizing value & efficiency.",
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
      title: "Better Security",
      para: "Fewer vulnerabilities generated by old and disorderly legacy code (threat identified by OWASP).",
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
      title: "Improved CX",
      para: "Enhanced performance and easier 3rd party integrations lead to improved customer experience (CX).",
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
      title: "Better Business Performance",
      para: "Higher sales through improved CX (IBM reports that app modernization leads to a 14% revenue increase).",
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
      title: "New Growth Possibilities",
      para: "New business possibilities for a modernized app, including AI, machine learning, big data, and the public cloud.",
      bgcolor: "bg-[#F6F8F9]",
      cols: "md:col-span-1",
      display: "icon",
      textsize: "text-xl",
      fontbold: "font-bold",
      textcolor: "text-secondary",
      main: "hidden",
    },
  ];
  return (
    <div>
      <Head>
        <title>Ackrolix | Best Digital Product Design Agency in India. </title>
        <meta name="description" content="Ackrolix is the best Digital Product Design Agency in India.
 We provide the best Digital Product designing Services in India. " />
        <link rel="canonical" href="https://www.ackrolix.com/digital-product-design-company-in-India" />
        <meta property="og:title" content="Ackrolix | Best Digital Product Design Agency in India. " />
        <meta
          property="og:description"
          content="Ackrolix is the best Digital Product Design Agency in India.We provide the best Digital Product designing Services in India. "
        />
        <meta
          property="og:url"
          content="https://www.ackrolix.com/digital-product-design-company-in-India"
        />
        <meta name="robots"
          content="index,follow" />
        <meta
          property="og:image"
          content="https://www.ackrolix.com/assets/images/service/svg/pro.png"
        />

        <script type="application/ld+json">
          {`{
  "@context": "http://schema.org",
  "@type": "WebPage",
  "@id": "https://www.ackrolix.com/digital-product-design-company-gurgaon#webpage",
  "url": "https://www.ackrolix.com/digital-product-design-company-gurgaon",
  "inLanguage": "en - US",
  "name": "Digital Product Design",
  "description": ""Ackrolix is the best Digital Product Design Agency in India.
 We provide the best Digital Product designing Services in India. "",
  "isPartOf": {
    "@id": "#website"
  },
  "about": [
    {
      "@type": "Thing",
      "name": "Ackrolix",
      "sameAs": "https://www.ackrolix.com/"
    }
  ],
  "mentions": [
    {
      "@type": "Thing",
      "name": "Ackrolix",
      "sameAs": "https://www.ackrolix.com/"
    }
  ]}`
          }
        </script>


      </Head>
      <Header />
      <div
        className=" bg-right"
        style={{
          backgroundImage: 'url("/assets/images/mainbackground.png ")',
        }}
      >
        <Banner
          bannertitle="Envision Your Mobile App Ideas or Enterprise Grade Software Dream with Ackrolix's Design & Development Mastery"
          bannersubtext="     
          Welcome to Ackrolix – India's leading Digital Product Design Company. Our dedicated team of experts is here to guide you through an exhilarating journey of creation. Immerse yourself in innovative design, delivering captivating user interfaces and extraordinary experiences. Unleash your boldest ideas with India's premier Digital Product Development Agency. We're not just an agency; we're your partners in digital product excellence. Let our seamless designs speak to your customers and pave the way for success. Your digital product design journey begins with Ackrolix – where creativity knows no limits."
          serviceimg="/assets/images/service/svg/pro.png"
          serviceimgAlt="Digital Product Design Company"
          servicehead="Best Digital Product Design Agency Redefining Technological Excellence"
          servicedesc1="Welcome to the Ackrolix Innovation hub, where the gateway to cutting-edge digital product design in India swings wide open exclusively for you. As your premier destination among Digital Product Design Agencies, we extend a warm invitation for you to immerse yourself in an unparalleled experience—a blend of artistic brilliance intricately woven with a deep understanding of human behavior and experiences, setting a new standard of excellence."
          servicedesc2="At Ackrolix, our dynamic design team wields innovative tools to transcend creative boundaries and adapt to evolving business trends. Connect with us for standout products that shine as beacons in the digital space. With active client involvement, attentive listening, and continuous learning, Ackrolix Innovation ensures your digital products exceed user expectations, setting new standards of technological excellence."
        />
      </div>
      {/* <Cards card={cards} /> */}
      <div className="container-ack md:px-0 px-5">
        <ComponentHead
          title="Technology"
          sub="Product Design Company "
          head="Ackrolix leads the way in digital product design and development across India. Entrust us as your committed partner on the journey to total digital excellence, and let our services elevate your products to new heights. Experience the transformative impact of Ackrolix Innovation, a renowned digital product agency in India. Join us in crafting a digital canvas that not only meets but redefines the status quo of greatness."
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
            <ProccessHead
              processhead="Stages"
              processsub="Unlock Your Success with Our Key Services"
              processdesc="At Ackrolix, India's premier digital product design firm, we excel in crafting stunning digital solutions that not only solve problems but also drive increased revenue across sectors. Positioned at the start of today’s digital magic, our exceptional product design team ensures an unparalleled user experience by deeply understanding your requirements."
              processimg="/assets/images/service/svg/pro1.png"
              proocessalt="Digital Product Design Services"
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

export default ProductDdesignCompany;

"use client";
import styles from "@/app/styles/navbar.module.css";
import Saarthi1 from "./components/Saarthi1";
import Saarthi from "./components/Saarthi";
import BannerComponent from "./components/BannerComponent";
import Footer from "./components/Footer";
import FooterLine from "./components/FooterLine";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import { useRef } from "react";
import { BsArrowDownShort } from "react-icons/bs";

export default function Home() {
  const Home = useRef(null);
  const About = useRef(null);
  const Product = useRef(null);
  const Contact = useRef(null);

  const Nav = () => {
    function Realpay(e) {
      window.scrollTo({
        top: e.current.offsetTop,
        // top: 500,
        behavior: "smooth",
      });
    }
    return (
      <>
        <nav className={styles.navbar}>
          <div>
            <ul className={styles.navbarList}>
              <li onClick={() => Realpay(Home)} className={styles.navbarItem}>
                Home
                <BsArrowDownShort className={styles.icon} size={20} />
              </li>
              <li onClick={() => Realpay(About)} className={styles.navbarItem}>
                About
                <BsArrowDownShort size={20} />
              </li>
              <li
                onClick={() => Realpay(Product)}
                className={styles.navbarItem}
              >
                Product
                <BsArrowDownShort size={20} />
              </li>
              <li
                onClick={() => Realpay(Contact)}
                className={styles.navbarItem}
              >
                Contact
                <BsArrowDownShort size={20} />
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  };

  const Header = () => {
    return (
      <header className={styles.main_header}>
        <div className={styles.navbar_brand}>
          <Image src="/logo1.png" alt="my logo image" width={150} height={70} />
          <Nav />
        </div>
        <div className={styles.loginsection}>
          <div className={styles.getstarted}>
            Register
            <BsArrowRight size={15} m={5} />
          </div>
        </div>
      </header>
    );
  };

  const Aboutt = () => {
    return (
      <>
        <div
          style={{
            width: "85%",
            marginBottom: "2%",
            textAlign: "justify",
          }}
        >
          Spice Money is India premier Rural Fintech company that is dedicated
          to empowering more than a million merchants and nano-preneurs through
          cutting-edge technology. Our services extend across every corner of
          India, bringing digital solutions to those who need them the most. We
          believe that it is the right time for MSMEs to embrace digital
          technologies and make the most of their numerous advantages. To this
          end, Spice Money has developed tailor-made Digital Solutions for MSMEs
          that cater to their specific needs. These digital solutions are
          designed to bridge the gaps in access to financial services and
          provide MSMEs with the tools they need to achieve inclusive growth and
          success in the highly competitive world of business. Our team of
          experts has met and consulted with hundreds of MSMEs, MSME
          Associations, NSIC, and MSME DFOs to understand their needs and
          formulate a suite of digital offerings that can save their time and
          costs. With our digital solutions at their doorstep, MSMEs can now
          focus on growing their business and leave the financial management to
          us. At Spice Money, we are committed to delivering the best possible
          digital solutions to MSMEs and helping them achieve their goals.
          Whether it is working capital, payroll management, compliance, or
          employee welfare schemes, we have got MSMEs covered with our
          comprehensive suite of digital solutions.
        </div>
      </>
    );
  };

  return (
    <>
      <Header />
      <div
        style={{
          width: "40%",
          height: 50,
          marginTop: "8%",
          display: "flex",
          justifyContent: "center",
          marginLeft: "30%",
          fontSize: 30,
          // alignItems: "center",
        }}
      >
        <marquee>MSME Digital ​Solutions</marquee>
      </div>
      <div ref={Home} style={{ fontSize: 20, margin: "2%" }}>
        <BannerComponent />
        <marquee>
          A blend of futuristic technology providing one-stop solutions to all
          your requirements.
        </marquee>
      </div>
      <div
        ref={Product}
        style={{
          width: "40%",
          height: 30,
          marginTop: "2%",
          marginBottom: "4%",
          display: "flex",
          justifyContent: "center",
          marginLeft: "30%",
          fontSize: 40,
          fontWeight: 500,
          // alignItems: "center",
        }}
      >
        Our Products
      </div>
      <div>
        <Saarthi1 />
      </div>
      <div>
        <Saarthi />
      </div>
      <div
        ref={About}
        style={{
          width: "40%",
          height: 30,
          marginTop: "2%",
          marginBottom: "4%",
          display: "flex",
          justifyContent: "center",
          marginLeft: "30%",
          fontSize: 40,
          fontWeight: 500,
          // alignItems: "center",
        }}
      >
        About
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Aboutt />
      </div>
      <div ref={Contact}>
        <Footer />
        <FooterLine />
      </div>
    </>
  );
}

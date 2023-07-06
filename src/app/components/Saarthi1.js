import React from "react";
import Image from "next/image";
import style from "@/app/styles/saarthi1.module.css";

export default function Saarthi1() {
  const card = () => {
    return (
      <>
        <div data-aos="fade-right" className={style.main}>
          <div className={style.logo}>
            <Image
              src="/Saarthi.svg"
              alt="Next.js Logo"
              width={200}
              height={45}
              priority
            />
          </div>
          <div className={style.head}>All about Government Schemes</div>
          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}> Know your Govt Schemes</div>
          </div>

          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}> MSME Classification</div>
          </div>

          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}> Compliance Health Check</div>
          </div>

          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}> Scheme Discovery Report</div>
          </div>

          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Scheme Library</div>
          </div>
          <a className={style.btngrad} href="https://saarthi.emsme.com/">
            VISIT SAARTHI
          </a>
        </div>
      </>
    );
  };

  const card1 = () => {
    return (
      <>
        <div data-aos="fade-right" className={style.main}>
          <div className={style.logo}>
            <Image
              src="/cart.svg"
              alt="Next.js Logo"
              width={200}
              height={45}
              priority
            />
          </div>
          <div className={style.head}>Bouquet of Financial Services</div>
          <div className={style.line1} style={{ marginLeft: "25%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Income Tax</div>
          </div>

          <div className={style.line1} style={{ marginLeft: "25%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}> E-Invoice</div>
          </div>

          <div className={style.line1} style={{ marginLeft: "25%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>GST</div>
          </div>

          <div className={style.line1} style={{ marginLeft: "25%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}> URC</div>
          </div>

          <div className={style.line1} style={{ marginLeft: "25%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>MCA</div>
          </div>
          <a
            href="https://cart.emsme.com/?token=&id=&email=&name="
            className={style.btngrad1}
            style={{ marginTop: "14%" }}
          >
            View cart
          </a>
        </div>
      </>
    );
  };

  const card2 = () => {
    return (
      <>
        <div data-aos="fade-left" className={style.main}>
          <div className={style.logo}>
            <Image
              src="/expert.svg"
              alt="Next.js Logo"
              width={200}
              height={45}
              priority
            />
          </div>
          <div className={style.head}>Virtual Enterprise Expert Solution</div>
          <div className={style.line1} style={{ marginLeft: "20%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Accounting</div>
          </div>

          <div className={style.line1} style={{ marginLeft: "20%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Taxation</div>
          </div>

          <div className={style.line1} style={{ marginLeft: "20%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Technology</div>
          </div>

          <div className={style.line1} style={{ marginLeft: "20%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>HR Systems</div>
          </div>

          <div className={style.line1} style={{ marginLeft: "20%" }}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Compliance Tools</div>
          </div>
          <a className={style.btngrad2} href="https://emsme.com/">
            contact us
          </a>
        </div>
      </>
    );
  };

  const card3 = () => {
    return (
      <>
        <div data-aos="fade-left" className={style.main}>
          <div className={style.logo}>
            <Image
              src="/realpay.png"
              alt="Next.js Logo"
              width={150}
              height={45}
              priority
            />
          </div>
          <div className={style.head}>Real Pay provides digital payments</div>
          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}> Manage payroll</div>
          </div>

          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Cloud based solution</div>
          </div>

          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Integrated with RealBooks</div>
          </div>

          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Payments securely</div>
          </div>

          <div className={style.line1}>
            <div className={style.point}>
              <div className={style.check}></div>
            </div>
            <div className={style.line2}>Accounting software</div>
          </div>
          <a href="https://payroll.realbooks.in" className={style.btngrad2}>
            VISIT REALPAY
          </a>
        </div>
      </>
    );
  };

  return (
    <div className={style.main2}>
      {card()}
      {card2()}
      {card1()}
      {card3()}
    </div>
  );
}

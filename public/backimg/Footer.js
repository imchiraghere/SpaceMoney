import Image from "next/image"
import styles from '@/app/Styles/footer.module.css'
import FooterLine from "./FooterLine"

export default function Footer() {


    return (


        <div className={styles.footerCss} style={{ color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '90vh', }} >

            <div className={styles.div2} >

                <div className={styles.div3}>

                    <div className={styles.div4} > 
                        <div style={{ background: '#fff' }} >
                          <a href="https://spicemoney.com" >

                            <Image src={'/spicemoneylogo2.webp'} width={190} height={80} />
                          </a>
                          
                        </div>
                        Connect With Us...
                        <a href="https://play.google.com/store/apps/details?id=in.spicemudra&hl=en_IN" >

                        <Image className={styles.hoverbtn} src={'/playstoreimg.png'} width={190} height={80} />
                        </a>

                    </div>
                    <div className={styles.div5} >
                        MAIN OFFICE :-
                    </div>
                    <div className={styles.div6}>
                        Spice Money Limited, Spice Global knowledge Park, 19A & 19B, Sector -125, Noida-201301, UP
                    </div>

                    <div className={styles.colorchange4x} >
                        <div className={styles.hoverbtn}  >
                            <a href="https://spicemoney.com" style={{textDecoration:'none',color:'#fff'}} >
                            spicemoney.com
                            </a>
                        </div>
                    </div>

                    <div className={styles.div8} >
                        <div className={styles.hoverlink} style={{ marginTop: 7, fontSize: 17, fontWeight: 'bold', display: 'flex', justifyContent: 'center', margin: 10, padding: 10 }} >
                            <a href="https://www.facebook.com/SpiceMoneyOfficial" >
                                <Image src={'/fb.png'} width={50} height={50} />
                            </a>
                        </div>
                        <div className={styles.hoverlink} style={{ marginTop: 7, fontSize: 17, fontWeight: 'bold', display: 'flex', justifyContent: 'center', margin: 10, padding: 10 }} >
                            <a href="https://www.youtube.com/SpiceMoneyOfficial" >
                                <Image src={'/youtube.png'} width={50} height={50} />
                            </a>
                        </div>
                        <div className={styles.hoverlink} style={{ marginTop: 7, fontSize: 17, fontWeight: 'bold', display: 'flex', justifyContent: 'center', margin: 10, padding: 10 }} >
                            <a href="https://www.linkedin.com/SpiceMoneyOfficial" >
                                <Image src={'/linkedin.png'} width={50} height={50} />
                            </a>
                        </div>
                        <div className={styles.hoverlink} style={{ marginTop: 7, fontSize: 17, fontWeight: 'bold', display: 'flex', justifyContent: 'center', margin: 10, padding: 10, marginTop: 7 }} >
                            <a href="https://twitter.com/SpiceMoneyOfficial" >
                                <Image src={'/twiter.png'} width={60} height={40} />
                            </a>
                        </div>

                    </div>

                </div>
               
            </div>

           

        </div>
    )
}
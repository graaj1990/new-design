import Link from "next/link";
import Image from "next/image";
import  { getFooterListings } from "./../../api/APIConnector"
import FooterSlider from "./FooterSlider";
import blackLogo from "/public/images/moneytree-footer-logo.png";
import whiteLogo from "/public/images/moneytree-footer-logo.png";
import { useEffect, useState } from "react";

// socialsLinkData
const socialsLinkData = [
  {
    iconName: "ri-facebook-fill",
    url: "https://www.facebook.com/pg/Money-Tree-Robo-866994610159140/posts/",
  },
  {
    iconName: "ri-twitter-fill",
    url: "https://twitter.com/Money_tree_robo?s=03 India's",
  },
  {
    iconName: "ri-pinterest-line",
    url: "https://in.pinterest.com/money4608/money-tree-robo-pro",
  },
  {
    iconName: "ri-linkedin-fill",
    url: "https://www.linkedin.com/in/money-tree-robo-3b65b028b/",
  },
];

const Footer =   ( ) => {
   
  const [footerMenuList, setfooterMenuList] = useState();  
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  const currentDate = mm + '-' + dd + '-' + yyyy;

  useEffect(()=>{
    const footerMenuData =  localStorage.getItem("footerMenuList")
    ? JSON.parse(localStorage.getItem("footerMenuList"))
    : [];
    const storeDate = localStorage.getItem("storeDate")
    if((footerMenuData.length == 0) || (storeDate != currentDate)) { 
     getFooterData()
    } else {
      setfooterMenuList(footerMenuData)
    }

  },[])

   

  const getFooterData = async ()=>{
    const res = await getFooterListings();
    if (res?.data?.status == 1) { 
          localStorage.setItem('storeDate',currentDate); 
          setfooterMenuList(res.data.footerLink);
    }
    
  } 
  return (
    <> 
      <div className="footer-area pt-175 pb-150">
        <div className="container-fluid mw-1640">
          <FooterSlider footerMenuList={footerMenuList} />
          <hr/>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-4">
              <div className="footer-single-widget mw-310">
                <Link href="/" className="logo d-inline-block">
                  <Image
                    src={blackLogo}
                    className="d-block dark-none"
                    alt="logo"
                  /> 
                  <Image
                    src={whiteLogo}
                    className="d-none dark-block"
                    alt="logo"
                  />
                </Link>

                <p onClick={getFooterData}>
                Stock screener is basically a tool to find the best probable stocks on given certain criteria out of complete list of all NSE stocks & BSE stocks.
                </p>

                {socialsLinkData && (
                  <ul className="d-flex align-items-center ps-0 mb-0 list-unstyled follow-us">
                    {socialsLinkData &&
                      socialsLinkData.map((value, i) => (
                        <li key={i}>
                          <a href={value.url} target="_blank">
                            <i className={value.iconName}></i>
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="footer-single-widget">
                    <h3>MoneyTree Robo PRO+</h3>

                    <ul className="ps-0 m-0 list-unstyled import-link">
                    <li><Link href="/screener">Screener</Link></li>
                    <li><Link href="/portfolio-analysis">Portfolio Analysis</Link></li>
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/watchlist">Watchlist</Link></li>
                    <li><Link href="/sector">Sectors</Link></li>
                    <li><Link href="/premium-services/futures-and-options">F&amp;O</Link></li>
                    <li><Link href="/support-and-target">Support And Target</Link></li>
                    <li><Link href="/trading-tools">Trading Tools</Link></li>
                    <li><Link href="/hourly-gainer-looser">Hourly Gainers</Link></li>
                    <li><Link href="/market-signal">Nifty Signal</Link></li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-lg-4 col-sm-6">
                  <div className="footer-single-widget">
                    <h3>Todays`s Market</h3>

                    <ul className="ps-0 m-0 list-unstyled import-link">
                    <li><Link href="/nse-pre-market">Pre Market</Link></li>
                    <li><Link href="/top-gainers-nse">Top Gainers</Link></li>
                    <li><Link href="/top-losers-nse">Top Losers</Link></li>
                    <li><Link href="/52-week-high-stocks">52 Week High</Link></li>
                    <li><Link href="/52-week-low-stocks">52 Week Low</Link></li>
                    <li><Link href="/breakout-stocks">Delivery Breakout</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="footer-single-widget">
                    <h3>Features</h3>

                    <ul className="ps-0 m-0 list-unstyled info-official">
                    <li><Link href="/faq">FAQs</Link></li>
                    <li><Link href="/how-to-use">Tutorials</Link></li>
                    <li><a target="_blank" href="https://investtrad.com/">Blog</a></li>
                    <li><Link href="/fundamental-screener">Fundamental Analysis</Link></li>
                    <li><Link href="/indicators-screener">Technical Analysis</Link></li>
                    <li><Link href="/video-course">Video Courses</Link></li>
                    <li><Link href="/basics-of-stock-market">Basics of Stock Market</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-area">
        <div className="container">
          <p>
            © <span>2021</span> Stock Market. All rights reserved | Powered by
            <Link href="/" >
            Moneytree
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}; 

export default Footer;

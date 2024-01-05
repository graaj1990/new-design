import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";  
import { usePathname } from "next/navigation"; 
import BackToTop from "./BackToTop";
import AosAnimation from "./AosAnimation";
import Searchbar from "./Searchbar";
import Image from "next/image";
 

//import  from "./../../../public/styles/globals.scss";
import blackLogo from "/public/images/moneytree-footer-logo.png";
import whiteLogo from "/public/images/moneytree-footer-logo.png";
import menuImg1 from "/public/images/menu/menu-1.jpg";
import menuImg2 from "/public/images/menu/menu-2.jpg";
import menuImg3 from "/public/images/menu/menu-3.jpg";
import menuImg4 from "/public/images/menu/menu-4.jpg";
import menuImg5 from "/public/images/menu/menu-5.jpg";

const Navbar = () => {
  // Toggle active class
  const [isActive, setActive] = useState(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

   
  const currentRoute = usePathname();

  const [menu, setMenu] = useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };
  
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.add("dark");
    }
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        elementId?.classList.add("sticky");
      } else {
        elementId?.classList.remove("sticky");
      }
    });
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  

    const [state,setState] = useState();
    let cancel = "";
  
    
    /**
     * Fetch the search results and update the state with the result.
     * Also cancels the previous query before making the new one.
     * 
     * @param {String} query Search Query.
     *
     */
    const fetchSearchResults = (query) => { 
      const Baseurl = process.env.NEXT_PUBLIC_API_URL;
      const searchUrl = `${Baseurl}/search/searchdata?q=${query}`; 
  
      if (cancel) {
        cancel.cancel();
      }
      cancel = axios.CancelToken.source();
  
      axios
        .get(searchUrl, {
          cancelToken: cancel.token,
        })
        .then((res) => {
          const total = res.data.total; 
          const resultNotFoundMsg = !res.data.response.length
            ? "There are no more search results. Please try a new search"
            : "";
          setState({
            results: res.data.response,
            message: resultNotFoundMsg,
            totalResults: total,  
            loading: false,
          });
        })
        .catch((error) => {
          if (axios.isCancel(error) || error) {
            setState({
              loading: false,
              message: "Failed to fetch the data. Please check network",
            });
          }
        });
    };
  
    const handleOnInputChange = (event) =>{
      const query = event.target.value;
      fetchSearchResults(query)
    }

  return (
    <>
      <BackToTop />
      <AosAnimation/>
      <nav className="navbar navbar-expand-lg bg-color-f3f4f6" id="navbar">
        <div className="container-fluid mw-1640">
          <Link className="navbar-brand customize-navbar" href="/">
            <Image src={blackLogo} className="main-logo" alt="Black logo" />
            <Image
              src={whiteLogo}
              className="white-logo d-none"
              alt="White logo"
              width="50"
              height="50"
            />
            <div className="logo-text">
            <span> Money Tree  </span> Robo
            <span className="screener">RoboStock Screener</span>
            </div>
            
          </Link>

          {/* Toggle navigation */}
          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-70">
              
              <li className="nav-item">
                <Link
                  className="nav-link  font-white"
                  href="/"  
                >
                  Home
                </Link>
                 
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Listing Pages
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item sub-dropdown dropdown-toggle"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Stay Pages
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link  
                          href="/stay/"
                          className={`dropdown-item ${
                            currentRoute === "/stay/" ? "active" : ""
                          }`}
                        >
                          Stay
                        </Link>
                      </li>
                      <li>
                        <Link  
                          href="/stay-map/"
                          className={`dropdown-item ${
                            currentRoute === "/stay-map/" ? "active" : ""
                          }`}
                        >
                          Stay Map
                        </Link>
                      </li>
                      <li>
                        <Link  
                          href="/stay-details/"
                          className={`dropdown-item ${
                            currentRoute === "/stay-details/" ? "active" : ""
                          }`}
                        >
                          Stay Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item sub-dropdown dropdown-toggle"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Experiences Pages
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link  
                          href="/experiences/"
                          className={`dropdown-item ${
                            currentRoute === "/experiences/" ? "active" : ""
                          }`}
                        >
                          Experiences
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/experiences-map/"
                          className={`dropdown-item ${
                            currentRoute === "/experiences-map/" ? "active" : ""
                          }`}
                        >
                          Experiences Map
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="/experiences-details/"
                          className={`dropdown-item ${
                            currentRoute === "/experiences-details/" ? "active" : ""
                          }`}
                        >
                          Experiences Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      className="dropdown-item sub-dropdown dropdown-toggle"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Cars Pages
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link  
                          href="/cars/"
                          className={`dropdown-item ${
                            currentRoute === "/cars/" ? "active" : ""
                          }`}
                        >
                          Cars
                        </Link>
                      </li>
                      <li>
                        <Link  
                          href="/cars-map/"
                          className={`dropdown-item ${
                            currentRoute === "/cars-map/" ? "active" : ""
                          }`}
                        >
                          Cars Map
                        </Link>
                      </li>
                      <li>
                        <Link  
                          href="/cars-details/"
                          className={`dropdown-item ${
                            currentRoute === "/cars-details/" ? "active" : ""
                          }`}
                        >
                          Cars Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link  
                      href="/flight/"
                      className={`dropdown-item ${
                        currentRoute === "/flight/" ? "active" : ""
                      }`}
                    >
                      Flight
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown mega-menu">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Five Colums
                </Link>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <div className="row">
                      <div className="col">
                        <Link href="#" className="menu-img d-block">
                          <Image
                            src={menuImg1}
                            alt="menu1"
                          />
                        </Link>
                        <h6 className="sub-menu-title">Company</h6>

                        <ul className="sub-menu">
                          <li>
                            <Link href="#">Katz</Link>
                          </li>
                          <li>
                            <Link href="#">Innojam</Link>
                          </li>
                          <li>
                            <Link href="#">Rhyloo</Link>
                          </li>
                          <li>
                            <Link href="#">Midel</Link>
                          </li>
                          <li>
                            <Link href="#">Digitube</Link>
                          </li>
                          <li>
                            <Link href="#">Livefish</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <Link href="#" className="menu-img d-block">
                          <Image
                            src={menuImg2}
                            alt="menu2"
                          />
                        </Link>
                        <h6 className="sub-menu-title">App Name</h6>

                        <ul className="sub-menu">
                          <li>
                            <Link href="#">Mat Lam Tam</Link>
                          </li>
                          <li>
                            <Link href="#">Duobam</Link>
                          </li>
                          <li>
                            <Link href="#">Daltfresh</Link>
                          </li>
                          <li>
                            <Link href="#">Otcom</Link>
                          </li>
                          <li>
                            <Link href="#">Hatity</Link>
                          </li>
                          <li>
                            <Link href="#">Tresom</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <Link href="#" className="menu-img d-block">
                          <Image
                            src={menuImg3}
                            alt="menu"
                          />
                        </Link>
                        <h6 className="sub-menu-title">City</h6>

                        <ul className="sub-menu">
                          <li>
                            <Link href="#">Mandalay</Link>
                          </li>
                          <li>
                            <Link href="#">Yahil’nytsya</Link>
                          </li>
                          <li>
                            <Link href="#">Kamakura</Link>
                          </li>
                          <li>
                            <Link href="#">Hongqi</Link>
                          </li>
                          <li>
                            <Link href="#">Herzliyya</Link>
                          </li>
                          <li>
                            <Link href="#">Nezamyslice</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <Link href="#" className="menu-img d-block">
                          <Image
                            src={menuImg4}
                            alt="menu"
                          />
                        </Link>
                        <h6 className="sub-menu-title">Construction</h6>

                        <ul className="sub-menu">
                          <li>
                            <Link href="#">Glass</Link>
                          </li>
                          <li>
                            <Link href="#">Stone</Link>
                          </li>
                          <li>
                            <Link href="#">Granite</Link>
                          </li>
                          <li>
                            <Link href="#">Plexiglass</Link>
                          </li>
                          <li>
                            <Link href="#">Stone</Link>
                          </li>
                          <li>
                            <Link href="#">Glass</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <Link href="#" className="menu-img d-block">
                          <Image
                            src={menuImg5}
                            alt="menu"
                          />
                        </Link>
                        <h6 className="sub-menu-title">Country</h6>

                        <ul className="sub-menu">
                          <li>
                            <Link href="#">Myanmar</Link>
                          </li>
                          <li>
                            <Link href="#">Ukraine</Link>
                          </li>
                          <li>
                            <Link href="#">Japan</Link>
                          </li>
                          <li>
                            <Link href="#">China</Link>
                          </li>
                          <li>
                            <Link href="#">France</Link>
                          </li>
                          <li>
                            <Link href="#">Canada</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Templates
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item sub-dropdown dropdown-toggle"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      Add Listing
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link   
                          href="/add-listing/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/" ? "active" : ""
                          }`}
                        >
                          Add Listing
                        </Link>
                      </li>
                      <li>
                        <Link  
                          href="/add-listing/two/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/two/" ? "active" : ""
                          }`}
                        >
                          Add Listing 2
                        </Link>
                      </li>
                      <li>
                      <Link  
                          href="/add-listing/three/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/three/" ? "active" : ""
                          }`}
                        >
                          Add Listing 3
                        </Link>
                      </li>
                      <li>
                      <Link  
                          href="/add-listing/four/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/four/" ? "active" : ""
                          }`}
                        >
                          Add Listing 4
                        </Link>
                      </li>
                      <li>
                      <Link  
                          href="/add-listing/five/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/five/" ? "active" : ""
                          }`}
                        >
                          Add Listing 5
                        </Link>
                      </li>
                      <li>
                      <Link  
                          href="/add-listing/six/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/six/" ? "active" : ""
                          }`}
                        >
                          Add Listing 6
                        </Link>
                      </li>
                      <li>
                      <Link  
                          href="/add-listing/seven/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/seven/" ? "active" : ""
                          }`}
                        >
                          Add Listing 7
                        </Link>
                      </li>
                      <li>
                      <Link  
                          href="/add-listing/eight/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/eight/" ? "active" : ""
                          }`}
                        >
                          Add Listing 8
                        </Link>
                      </li>
                      <li>
                      <Link  
                          href="/add-listing/nine/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/nine/" ? "active" : ""
                          }`}
                        >
                          Add Listing 9
                        </Link>
                      </li>
                      <li>
                      <Link  
                          href="/add-listing/ten/"
                          className={`dropdown-item ${
                            currentRoute === "/add-listing/ten/" ? "active" : ""
                          }`}
                        >
                          Add Listing 10
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link  
                      href="/checkout/"
                      className={`dropdown-item ${
                        currentRoute === "/checkout/" ? "active" : ""
                      }`}
                    >
                      Checkout
                    </Link>
                  </li>
                  <li>
                    <Link  
                      href="/pay-done/"
                      className={`dropdown-item ${
                        currentRoute === "/pay-done/" ? "active" : ""
                      }`}
                    >
                      Pay Done
                    </Link>
                  </li>
                  <li>
                    <Link  
                      href="/author/"
                      className={`dropdown-item ${
                        currentRoute === "/author/" ? "active" : ""
                      }`}
                    >
                      Author
                    </Link>
                  </li>
                  <li>
                    <Link  
                      href="/account/"
                      className={`dropdown-item ${
                        currentRoute === "/account/" ? "active" : ""
                      }`}
                    >
                      Account
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Other Pages
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link  
                      href="/about-us/"
                      className={`dropdown-item ${
                        currentRoute === "/about-us/" ? "active" : ""
                      }`}
                    >
                      About Us
                    </Link>
                  </li>                   
                  <li>
                    <Link 
                      href="/privacy-policy/"
                      className={`dropdown-item ${
                        currentRoute === "/privacy-policy/" ? "active" : ""
                      }`}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link  
                      href="/terms-and-condition/"
                      className={`dropdown-item ${
                        currentRoute === "/terms-and-condition/" ? "active" : ""
                      }`}
                    >
                      Terms & Conditions
                    </Link>
                  </li> 

                  <li>
                    <Link  
                      href="/refund-policy/"
                      className={`dropdown-item ${
                        currentRoute === "/refund-policy/" ? "active" : ""
                      }`}
                    >
                      Refund Policy
                    </Link>
                  </li> 

                </ul>
              </li>
            </ul>
          </div>

          {/* others-options */}
          <div className="others-options">
            <ul className="d-flex align-items-center">
              <li>
                <button
                  className="search-icon border-0 bg-transparent p-0"
                  onClick={handleToggleSearchModal}
                >
                  <i className="flaticon-loupe"></i>
                </button>
              </li>
              <li>
                <Link
                  href="/login/"
                  className="default-btn active d-none d-lg-block"
                >
                  Login Now
                </Link>
                <Link href="/login/" className="d-lg-none account">
                  <i className="flaticon-account"></i>
                </Link>
              </li> 
            </ul>
          </div>
        </div>
      </nav>

      {/* Search Form */}
      <Searchbar state={state} handleOnInputChange={handleOnInputChange} isActive={isActive} handleToggleSearchModal={handleToggleSearchModal} /> 
      <style jsx global>{`  
          a.navbar-brand:hover{color:#fff}    
          .customize-navbar { display:inline-flex;position:relative;}
          .logo-text {margin-left:15px;font-size:24px;}
          .logo-text span{color:#FF621F}
          .screener { position: absolute;font-size: .8rem;bottom: 10px; left: 23%;}
          `
        }

      </style>
    </>
  );
};

export default Navbar;

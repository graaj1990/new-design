import React, { useState } from "react"; 
import axios from "axios"; 
import Link from "next/link";
import StockSearchForm from "./StockSearchForm";   

const HeroBanner = ({handleClickEvent}) => { 
   
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
      <div className="banner-area banner-bg-2 bg-color-fff7ed overflow-hidden  ">
        <div className="container-fluid mw-1640">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="banner-content banner-content-space text-center">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="500"
                  data-aos-once="true"
                > 
                   Money Tree Robo Stock<span className="text-shape"> Screener</span>  
                </h1>
                <h2 
                   data-aos-delay="100"
                   data-aos-duration="500"
                   data-aos-once="true"
                >Equity Assistant
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="500"
                  data-aos-once="true"
                >Stock Screener that helps to choose right stocks at right time.
                </p> 
                
              </div>
            </div> 
            <div className="col-lg-12">
                <div className="banner-content-bck"> 
                <StockSearchForm state={state} handleOnInputChange={handleOnInputChange}  handleClickEvent={handleClickEvent}  />
                
                </div>             
          </div>
          <div className="col-lg-12 text-center">
          <label className="whats-trending"> What's Trending: </label>
            <Link href="" className="btn btn-sm btn-customize"> Reliance  </Link>
            <Link title="ITC" class="btn btn-sm btn-customize" href="/stocks/itc-share-price">ITC</Link>
            <Link title="Yes Bank" class="btn btn-sm btn-customize" href="/stocks/yesbank-share-price">YESBANK</Link>
            <Link title="IRCTC" class="btn btn-sm btn-customize" href="/stocks/irctc-share-price">IRCTC</Link>
            <Link title="Bajaj Finance" class="btn btn-sm btn-customize" href="/stocks/bajfinance-share-price">BAJFINANCE</Link>
            
          </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .banner-content-bck {position:relative;}
        .banner-bg-2 {padding-top: 50px;}
        .banner-content-space {margin:auto }
        .banner-content h1 {font-size: 30px;line-height: 35px;margin-bottom:0} 
        .banner-content p {font-size:20px;font-weight:500}
        .whats-trending { margin-right:20px;font-size:22px;margin-top:20px;}
        .btn-customize,.btn-customize:hover {background-color:#FF621F ;margin-right:5px;margin-bottom:5px;  }
      `}</style>
    </>
  );
};
 
export default HeroBanner;

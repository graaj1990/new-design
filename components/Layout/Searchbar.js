import React from 'react'   
import StockSearchResult from '../Home/HeroBanner/StockSearchResult';

export default function Searchbar({state, handleOnInputChange, isActive, handleToggleSearchModal}) {

     

  

  return (
    <div 
    className={`offcanvas offcanvas-top src-form-wrapper ${
      isActive ? "show" : ""
    }`} 
  >
    <div className="container">
      <div className="offcanvas-body small">
        <form className="src-form">
          <input 
                type="text" 
                className="form-control" 
                onChange={handleOnInputChange}
                placeholder="Type a Company Name to Search"  />
          <button className="src-btn">
            <i className="ri-search-line"></i>
          </button>
          {state?.results &&  <StockSearchResult state={state}/> }
        </form>
      </div>
    </div>
    <style jsx>{`
        .banner-content-bck {position:relative;}
        .banner-bg-2 {padding-top: 50px;}
        .banner-content-space {margin:auto }
        .banner-content h1 {font-size: 30px;line-height: 35px;margin-bottom:0} 
        .banner-content p {font-size:20px;font-weight:500}
      `}</style>
    <style jsx global>{`
        .autocomplete {background-color:#000;color:#fff;border: 1px solid #fff;}
        
      `}</style>
    <button type="button" className="btn-close" onClick={handleToggleSearchModal}>
      <i className="ri-close-line"></i>
    </button>
  </div>
  )
}

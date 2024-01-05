import React from 'react'
import Link from "next/link";

const StockSearchResult= ({state}) =>{
    const { results } = state;
    console.log('results',results)
  return (
    
    <div className='autocomplete'>
    <div className="autocomplete-items">
    {results.map((result,key) => (<div key={`search-key-${key}`}>
         <Link href={"stocks/" + result.symbol}>
            <strong>{result.name}</strong>
        </Link>
        <span className="badge badge-dark custom-batch ">
                  {result.c}{" "}
                  <span className={result.classname}> ({result.cp}%) </span>
                </span>
                <p className="customrec">
                  <span>LTP : {result.l}</span> <span>O : {result.op}</span>{" "}
                  <span>H : {result.hi}</span> <span>L : {result.lo}</span>{" "}
                </p>
   
              </div>) 
            
            
           
        )}
    <style>{`
    .autocomplete {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      .autocomplete-items {
        
        border: 1px solid #d4d4d4;
        border-bottom: none;
        border-top: none;
        z-index: 99;
        top: 100%;
        left: 0;
        right: 0;
        height:auto;
        max-height: 300px;
        min-height:200px;
        overflow: auto;
      }
      
      .autocomplete-items div {
        padding: 10px;
        cursor: pointer;
        background-color: #000;
      }
      .autocomplete-items div:hover {
        background-color: #000;
      }
      span.badge.badge-dark.custom-batch {
        padding: 10px;
        float: right;
      }
      .autocomplete-items {
        max-height: 300px;
        overflow: auto;
      }
      .redbatch {
        color: rgb(244, 67, 54);
      }
      .greenbatch {
        color: rgb(76, 175, 80);
      }
      .customrec {
        border-bottom: 1px solid #d4d4d4;
        padding: 5px !important;
      }
      .customrec span {
        padding: 0 10px;
        font-size: 12px;
      }
      .searchbox {
        height: calc(2.5em + 0.75rem + 2px);
      }
      .frequents a {
        margin: 0 5px;
        font-size: 11px;
      }
    `}</style>
    </div>
    </div>
  )
}



export default StockSearchResult;

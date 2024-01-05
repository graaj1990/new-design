import React from "react";
import Link from "next/link";

 

const PageBannerTitle  = ({
  title,
  homeText,
  homeUrl, 
}) => {
  return ( 
      <div className="container-fluid mw-1640 mt-4">
        <div className="row ">
          <div className="col-lg-12">
            <div className="page-banner-content"> 
              <ul className="ps-0 mb-0 list-unstyled d-flex justify-content-center justify-content-md-start">
                <li>
                  <Link href={homeUrl}>{homeText}</Link>
                </li>
                <li>{title}</li>
              </ul>
            </div>
          </div> 
        </div>
      </div> 
  );
};

export default PageBannerTitle;

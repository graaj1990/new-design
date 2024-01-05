"use client";

const AboutUsContent = ({textData}) => {
  return (
    <>
      <div className="destination-area mt-5">
        <div className="container-fluid mw-1640">
          <div className="row align-items-center"> 
            <div className="col-lg-12">
              <div className="destination-content" dangerouslySetInnerHTML={{ __html: textData }}> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;

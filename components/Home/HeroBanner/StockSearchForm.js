
import StockSearchResult from "./StockSearchResult";
const StockSearchForm = ({state,handleOnInputChange,handleClickEvent}) => { 
   
  return (
    <>
      <form 
        className="location-track" 
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-once="true"
        onClick={handleClickEvent}
      >
        <div className="row align-items-center"> 
          <div className="col-lg-12">
            <div className="form-group">
              <div className=" align-items-center justify-content-between"> 
                  <div className="flex-grow-1  ">                     
                     <input 
                        className="form-control"
                        onChange={handleOnInputChange}
                        autoFocus=""
                        type="search"
                        placeholder="Type a Company Name to Search" />
                  </div> 
                <button type="button" className="src-btn">
                  <i className="flaticon-loupe"></i>
                </button>
              </div>
               
            </div>
          </div>
        </div>
        {state?.results &&  <StockSearchResult state={state}/> } 
      </form> 
           
      <style jsx>{`
        .location-track { margin-right:0;}
        .location-track button.src-btn  {right: 5px; position: absolute;top:3px;width:40px;height:40px;line-height:45px;}
      `}</style>
      
    </>
  );
};


export default StockSearchForm;

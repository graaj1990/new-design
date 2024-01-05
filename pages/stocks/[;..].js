import Navbar from "../../components/Layout/Index"; 
import PageBannerTitle from "../../components/Common/PageBannerTitle"
import MetaHead from "../../components/MetaHead";
import MetaData from "../../json/MetaData.json"

export default function  stocks() {
  return (
    <Navbar>  
     <MetaHead {...MetaData?.about}  />
     <PageBannerTitle 
        title="Stock Page" 
        homeText="Home" 
        homeUrl="/"  
      />
        
    </Navbar> 
  )
}

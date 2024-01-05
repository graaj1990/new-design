import Navbar from "../components/Layout/Index"; 
import PageBannerTitle from "../components/Common/PageBannerTitle"
import AboutUsContent from "../components/AboutUs/AboutUsContent"
import  {getABoutPageData} from "../api/APIConnector"
import MetaHead from "../components/MetaHead";
import MetaData from "../json/MetaData.json"

const AboutUs =({textData})=> { 
  return ( <>
    <Navbar>  
     <MetaHead {...MetaData?.about}  />
     <PageBannerTitle 
        title="Know About Us" 
        homeText="Home" 
        homeUrl="/"  
      />
       <AboutUsContent textData={textData} />
    </Navbar> 
      </>
  );
}

export const getServerSideProps = (async () => { 
  const res = await  getABoutPageData();
  const textData = res?.data?.textData
  return { props: { textData } }
}) 

export default AboutUs;
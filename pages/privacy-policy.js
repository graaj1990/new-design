import Navbar from "../components/Layout/Index"; 
import PageBannerTitle from "../components/Common/PageBannerTitle"
import PrivacyPolicyContent from "../components/PrivacyPolicy/PrivacyPolicyContent"
import  {getPrivacyPolicyData} from "../api/APIConnector"
import MetaHead from "../components/MetaHead";
import MetaData from "../json/MetaData.json"

const PrivacyPolicy =({textData})=> { 
  return ( <>
     <Navbar>  
     <MetaHead {...MetaData?.privacypolicy}  />
     <PageBannerTitle 
        title="Privacy Policy" 
        homeText="Home" 
        homeUrl="/"  
      />
       <PrivacyPolicyContent textData={textData} />
      </Navbar> 
      </>
  );
}

export const getServerSideProps = (async () => { 
  const res = await  getPrivacyPolicyData();
  const textData = res?.data?.textData
  return { props: { textData } }
}) 

export default PrivacyPolicy;
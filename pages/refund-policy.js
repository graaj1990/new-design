import Navbar from "../components/Layout/Index"; 
import PageBannerTitle from "../components/Common/PageBannerTitle"
import RefundPolicyContent from "../components/RefundPolicy/RefundPolicyContent"
import  {getRefundPolicyData} from "../api/APIConnector"
import MetaHead from "../components/MetaHead";
import MetaData from "../json/MetaData.json"

const RefundPolicy =({textData})=> { 
  return ( <>
     <Navbar>
     <MetaHead {...MetaData?.refundpolicy}  /> 
     <PageBannerTitle 
        title="Refund Policy" 
        homeText="Home" 
        homeUrl="/"  
      />
       <RefundPolicyContent textData={textData} />
      </Navbar> 
      </>
  );
}

export const getServerSideProps = (async () => { 
  const res = await  getRefundPolicyData();
  const textData = res?.data?.textData
  return { props: { textData } }
}) 

export default RefundPolicy;
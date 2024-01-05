import Navbar from "../components/Layout/Index"; 
import PageBannerTitle from "../components/Common/PageBannerTitle"
import TermsAndConditionContent from "../components/TermsAndCondition/TermsAndConditionContent"
import  {getTermandconData} from "../api/APIConnector"
import MetaHead from "../components/MetaHead";
import MetaData from "../json/MetaData.json"

const TermsAndCondition =({textData})=> { 
  return ( <>
     <Navbar>  
     <MetaHead {...MetaData?.termsandcondition}  />
     <PageBannerTitle 
        title="Terms And Condition" 
        homeText="Home" 
        homeUrl="/"  
      />
       <TermsAndConditionContent textData={textData} />
      </Navbar> 
      </>
  );
}

export const getServerSideProps = (async () => { 
  const res = await  getTermandconData();
  const textData = res?.data?.textData
  return { props: { textData } }
}) 

export default TermsAndCondition;
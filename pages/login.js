import Navbar from "../components/Layout/Index";  
import MetaHead from "../components/MetaHead";
import MetaData from "../json/MetaData.json"
 

const Home=()=> { 

  return ( <>
    <Navbar >  
      <MetaHead   {...MetaData?.home}  />   
    </Navbar> 
      </>
  );
}

 

export default Home;
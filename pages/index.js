import Navbar from "../components/Layout/Index"; 
import HomePage from "../components/Home/index"
import  {getHomePageData} from "../api/APIConnector"
import MetaHead from "../components/MetaHead";
import MetaData from "../json/MetaData.json"
import { useState } from "react";

const Home=({response})=> { 

  return ( <>
    <Navbar >  
      <MetaHead   {...MetaData?.home}  />  
      <HomePage />
    </Navbar> 
      </>
  );
}

export const getServerSideProps = (async () => { 
  const res = await  getHomePageData();
  const result = res?.data;
  return { props: { response:result?.response } }
}) 

export default Home;
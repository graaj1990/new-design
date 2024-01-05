import React from 'react'
import Link from "next/link"; 
import {Tabs, Tab,  Card, CardBody} from "@nextui-org/react";

export default function FooterSlider({footerMenuList}) {
  const [selected, setSelected] = React.useState("All");
  
  const handleChange = ( newValue) => {    
    setSelected(newValue);
  };  
  return (
    <div className="flex w-full flex-col ">
      <Tabs 
        aria-label="Options"         
        selectedKey={selected}
        onSelectionChange={handleChange}
        className="footer-tab"
      >
        <Tab title={'All'}  >
        {footerMenuList && footerMenuList.map((item,key)=>(
                 <div key={`panelAllKey${key}`}  index={0}>
                    <h3 className="head-title">{item.label}</h3>
                    <div className='stock-list-grid'>
                    {item.child && item.child.map((items,keys)=>(
                        <Link key={`panelAllDetailKey${keys}`} href={`/stocks/${items.symbol}`}>{items.name} </Link>
                    ))}
                    </div>
                </div>
        ))} 
        </Tab>
        {footerMenuList && footerMenuList.map((item,key)=>(
            <Tab key={key}  title={item.label}>
                <Card>
                    <CardBody>
                    <div className="stock-list-grid"> 
                    {item.child && item.child.map((items,keys)=>(
                        <Link key={`panelKey${keys}`} href={`/stocks/${items.symbol}`}>{items.name} </Link>
                    ))} 
                    </div>
                    </CardBody>
                </Card>
            </Tab>
        ))} 
         
      </Tabs>

      <style jsx global>{`
        .stock-list-grid {
            display: grid;
            grid-template-columns: repeat(4,1fr);
          }
          .stock-list-grid a {
            color: #fff;
            font-size: 15px;
        }
        .footer-tab>div {  white-space: nowrap;}
        .footer-tab>div ::-webkit-scrollbar {
            width: 1em;
            height:5px;
        }
        .footer-tab>div button[aria-selected="true"]{
            background-color: #FF621F;
            color:#fff;
          }

        .footer-tab>div::-webkit-scrollbar {
            width: 12px;               /* width of the entire scrollbar */
          }
          
          .footer-tab>div::-webkit-scrollbar-track {
            background: #FF621F;        /* color of the tracking area */
          }
          
          .footer-tab>div::-webkit-scrollbar-thumb {
            background-color: #000000;    /* color of the scroll thumb */
            border-radius: 20px;       /* roundness of the scroll thumb */
            border: 3px solid #FF621F;  /* creates padding around scroll thumb */
          }

          .footer-tab button{background-color: var(--whiteColor);
            padding: 5px 17px;
            font-weight: 600;
            color: var(--headingColor);
            border-radius: 10px 10px 0 0;
            border: 1px solid rgba(17,24,39,.12);
            border-bottom: 0;
            box-shadow: 0 4px 2px 0 rgba(79,139,173,.01);
            margin-right:2px;
          }

        @media (max-width: 768px){
            .stock-list-grid {
              grid-template-columns: repeat(1,1fr)
            }
          }
          @media (max-width: 900px){
            .stock-list-grid {
              grid-template-columns: repeat(2,1fr)
            }
          }
      `}</style>
    </div>  
  )
}

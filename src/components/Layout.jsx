import React, { useState } from "react";
import grp from "./../visuals/Frame.png";
import AddMode from "./AddMode";
import plusIcon from "./../visuals/add-icon.svg";
import UpdateMode from "./UpdateMode";
import TestMode from "./TestMode";

const Layout = () => {
  const [storedData, setStoredData] = useState([]);
  const [renderAddMode, setRenderAddMode] = useState(false)
  const [testModeTrue, setTestModeTrue] = useState(false);


  //toggling the add mode state
  const toggleAddMode = () => {
    setRenderAddMode(!renderAddMode)
  }

  //toggling the testing mode state
  const toggleTestMode = () => {
    setTestModeTrue(false)
  }




  return (
    <div className="flex  w-screen h-screen flex-col">
      <div className="flex  w-screen h-screen flex-col">
        <div className="header flex w-full h-[76px] bg-[#6801CB] items-center ">
          <div className="logo flex p-7">
            <div>
              <img src={grp} alt="BDP" height={41.84} width={158.47} />
            </div>
          </div>
          <div className="text-white flex w-full items-center justify-center">
            USSD TEST SIMULATOR
          </div>
        </div>
        <div className="belowsidebar flex w-full h-full items-center">
          <div className="sidebar flex w-[260px] h-full rounded-tr-[8px] rounded-br-[8px] border-[0.1px] border-solid justify-center">
            <div className="sidebar-container flex flex-col w-[222px] h-auto pt-[32px] pb-[14px] ">
              <div className="pt-[8px] flex justify-center">
                <button onClick={toggleAddMode} className="bg-[#6801CB] text-white hover:bg-[#470192] h-[40px] w-[200px] rounded-[20px] flex  items-center justify-center ">
                  <span className="mr-3">Create USSD Code</span>
                  <img src={plusIcon} />
                </button>
              </div>
            </div>
          </div>
          { //conditional rendering of components
            storedData && storedData.length > 0 || renderAddMode || testModeTrue ? (
                <div className="content flex w-full h-full items-center justify-center">
                    { renderAddMode &&( <div><AddMode  storedData={storedData} setStoredData={setStoredData}/></div> )}
                    {/* <div><UpdateMode /></div> */}
                    {storedData.length===0 && !renderAddMode &&
                    (<div className="text-[#333333]">You have no saved codes</div>
                    )}
                </div>) :(

                 <div className="content flex w-full h-full items-center justify-center"> 
                     <div className="text-[#333333]">You have no saved codes</div> 
                 </div> 
            )
          }

        </div>
      </div>
      {testModeTrue && (
        <div className="flex  w-screen h-screen flex-col absolute top-0 left-0 z-50 bg-black/70 items-center justify-center">
                <div><TestMode toggleTestMode={toggleTestMode} /></div>
        </div>
      )}
    </div>
  );
};

export default Layout;

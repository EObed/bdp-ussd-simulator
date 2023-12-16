import React from 'react'
import saveIcon from './../visuals/Group102.svg'
import codeIcon from './../visuals/CodeSVG.svg'
import codeNameIcon from './../visuals/user.svg'
import urlIcon from './../visuals/URL.svg'
import phoneIcon from './../visuals/solar-phone-outline.svg'
import networkIcon from './../visuals/Cellular-Connection.svg'





const UpdateMode = () => {
  return (
    <div className='w-[370px]  h-[500px] border-solid border-[0.1px] items-center flex flex-col'>
      <div className='flex w-full p-1 justify-center text-[#6801CB] font-[900]'>Edit USSD Code</div>
      <form className='flex w-[90%] flex-col pt-[20px] pr-[10px]'>

          <label className=''>USSD Code</label>
          <input placeholder="Enter USSD Code" className='w-[330px] h-[40px] rounded-[20px] bg-white border-solid border-[0.1px]  p-4 placeholder-gray-500'/>
          <div className="absolute inset-y-0 right-[410px] bottom-[230px] flex items-center pr-3 pointer-events-none">
          <img src={codeIcon}/>
          </div>

          <label className='pt-3'>Code Name</label>
          <input placeholder="Enter code name" className='w-[330px] h-[40px] rounded-[20px] bg-white border-solid border-[0.1px]  p-4 placeholder-gray-500'/>
          <div className="absolute inset-y-0 right-[410px] bottom-[80px] flex items-center pr-3 pointer-events-none">
          <img src={codeNameIcon}/>
          </div>

          <label className='pt-3'>URL</label>
          <input placeholder="Enter URL" className='w-[330px] h-[40px] rounded-[20px] bg-white border-solid border-[0.1px]  p-4 placeholder-gray-500'/>
          <div className="absolute inset-y-0 right-[410px] top-[75px] flex items-center pr-3 pointer-events-none">
          <img src={urlIcon}/>
          </div>
          
          <label className='pt-3'>Network</label>
          <input placeholder="Enter network" className='w-[330px] h-[40px] rounded-[20px] bg-white border-solid border-[0.1px]  p-4 placeholder-gray-500'/>
          <div className="absolute inset-y-0 right-[410px] top-[230px] flex items-center pr-3 pointer-events-none">
          <img src={networkIcon}/>
          </div>
          
          <label className='pt-3'>Phone Number</label>
          <input placeholder="Enter phone number" className='w-[330px] h-[40px] rounded-[20px] bg-white border-solid border-[0.1px]  p-4 placeholder-gray-500'/>
          <div className="absolute inset-y-0 right-[410px] top-[380px] flex items-center pr-3 pointer-events-none">
          <img src={phoneIcon}/>
          </div>
      </form>
      <div className='pt-6 '><button className='bg-[#6801CB] text-white hover:bg-[#470192] h-[40px] w-[202px] rounded-[20px] flex  items-center justify-center '><span className="mr-8">Save USSD</span> <img src={saveIcon}/></button></div>
    </div>
  )
}

export default UpdateMode
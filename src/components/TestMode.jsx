import React from 'react'
import networkSignal from './../visuals/White-Cellular-Connection.svg'
import phoneVector from './../visuals/Battery.svg'
import WiFiSignal from './../visuals/Wifi.svg'

const TestMode = ({toggleTestMode}) => {
  return (
    <div className='flex flex-col w-[350px] h-[600px] bg-[#FFF] items-center rounded-[30px] mt-16 '>
      <div className='flex w-full justify-between p-3 bg-[#6801CB] rounded-t-[30px]'>
          <div className='text-white'>
            9:41
          </div>
          <div className='flex'>
          <img className='mr-1' src={networkSignal}/>
          <img className='mr-1' src={WiFiSignal}/>
          <img className='mr-1' src={phoneVector}/>
          </div>
      </div>
      <div className='flex w-full text-white items-center justify-center pb-3  bg-[#6801CB]'>
          USSD Test Simulation
      </div>
      <div className='flex w-full h-full flex-col items-center justify-center'>
          <div className=' '>
            <input className='w-[270px] h-[40px] rounded-[18px] bg-white border-solid border-[1px] border-black p-4 '  />    
          </div>
          <div className='pt-7 flex w-[270px] justify-between'>
          <button onClick={toggleTestMode} className='bg-[#6801CB] text-white hover:bg-[#470192] h-[37px] w-[110px] rounded-[20px] flex  items-center justify-center '> Cancel </button>
          <button className='bg-[#6801CB] text-white hover:bg-[#470192] h-[37px] w-[110px] rounded-[20px] flex  items-center justify-center '> Send </button>
          </div>
      </div>
    </div>
  )
}

export default TestMode
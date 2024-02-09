import React from 'react'
import "./CarShowingPageAds.css"
import { FaAngleDown } from "react-icons/fa6";


const CarShowingPageAds = () => {
  return (
    <>
    <div className='py-3 bg-info bg-opacity-25 text-center'>
        <span>
            Sorted By, <span className='text-primary cursor'>Price (Lowest to Highest) <span className=''><FaAngleDown /></span> </span>
        </span>
         &nbsp;
        <span style={{fontSize:"14px"}}>
        Showing 7 out of 7 cabs from Bangalore to Puducherry ( Distance for selected route is 637kms | Approx 22 hr(s) )
        </span>
    </div>
    </>
  )
}

export default CarShowingPageAds
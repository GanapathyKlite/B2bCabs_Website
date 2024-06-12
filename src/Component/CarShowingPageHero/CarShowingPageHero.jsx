import React, { useState } from "react";
import "./CarShowingPageHero.css";
import SideBar from "./SideBar";
import { FaCircleCheck } from "react-icons/fa6";
import CarCard from "./CarCard";

const CarShowingPageHero = () => {
  // const [first, setfirst] = useState(second)
  return (
    <>
      <div className="containers">
        <div className="row hg">
          <div className="col-lg-3">
            <div className="pt-3 position-sticky top-95">
              <div className="sideBar">
                <SideBar />
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="pt-3 pb-4 z-n1">
              <div className="d-flex w-100 bg-success-subtle py-3 px-3 rounded align-items-center gap-3 text-success-emphasis">
                <FaCircleCheck className="opacity-50" />
                Free Cancellation before 09 Feb 2024, 12:15 PM IST
              </div>
            </div>
            <CarCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarShowingPageHero;

// {/* <div className="bg-warning-subtle rounded py-3 px-3">
// <div
//   className="bg-dark-subtle mb-2"
//   style={{ width: "100px", height: "50px" }}
// ></div>
// <p className="mb-2"> Best-ever cab journeys, right here</p>
// <div className="d-flex">
//   <div className="col-lg-4 p-1">
//     <div
//       className="bg-white d-flex px-3 py-1 boxShadow"
//       style={{ height: "60px" }}
//     >
//       {/* <div className="bg-dark-subtle" style={{width:"50px", height:"50px"}}></div> */}
//     </div>
//   </div>
//   <div className="col-lg-4 p-1">
//     <div
//       className="bg-white d-flex px-3 py-1 boxShadow"
//       style={{ height: "60px" }}
//     >
//       {/* <div className="bg-dark-subtle" style={{width:"50px", height:"50px"}}></div> */}
//     </div>
//   </div>
//   <div className="col-lg-4 p-1">
//     <div
//       className="bg-white d-flex px-3 py-1 boxShadow"
//       style={{ height: "60px" }}
//     >
//       {/* <div className="bg-dark-subtle" style={{width:"50px", height:"50px"}}></div> */}
//     </div>
//   </div>
// </div>
// </div> */}

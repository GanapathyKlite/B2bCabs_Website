import React, { useState } from "react";
import "./CarShowingPageHero.css";
import SideBar from "./SideBar";
import { FaCircleCheck } from "react-icons/fa6";
import { GrMapLocation } from "react-icons/gr";
import { FaGasPump } from "react-icons/fa";
import { TbClockX } from "react-icons/tb";
import carIcon from "../../Asset/Car_icon.svg";

const CarShowingPageHero = () => {
  // const [first, setfirst] = useState(second)
  return (
    <>
      <div className="containers">
        <div className="row hg">
          <div className="col-lg-3">
            <div className="pt-3 position-sticky">
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
           
            <div className="">
              <div className="border carlist d-flex">
                <div className="carIcon d-flex align-items-center justify-content-center">
                  <img src={carIcon} alt="caricon" />
                </div>
                <div className="carData d-flex">
                  {/* <div className="py-2">
              <div className="d-flex">
                <div>
                  <span className="carName"><b>Dzire, Etios </b></span>
                  <span>or similar</span>
                </div>
              </div>
              <div></div>
            </div> */}
                  <div className="py-2 d-flex gap-2 flex-column w-100">
                    <div className="d-inline-flex align-items-center gap-1">
                      <span className="carName">
                        <b>Dzire, Etios</b>
                      </span>
                      <span className="similarCarName">or similar</span>
                      <div className="d-flex gap-1">
                        <span
                          className="badge bg-success bg-gradient"
                          style={{ borderRadius: "2.5px" }}
                        >
                          New
                        </span>
                        <span className="similarCarName ">No ratings</span>
                      </div>
                    </div>
                    <div className="d-inline-flex">
                      <span
                        className="d-flex gap-2"
                        style={{ fontSize: "14px" }}
                      >
                        <li>Sedan</li>
                        <li>AC</li>
                        <li>4 Seats</li>
                      </span>
                    </div>
                    <div className="w-100">
                      <p className="m-0">
                        <b>Spacious Car</b>
                      </p>
                      <div className="d-flex">
                        <div className="text-primary px-3">
                          <GrMapLocation />
                        </div>
                        <div className="d-flex w-75 font-size14">
                          <div className="d-flex w-50">Extra km fare </div>
                          <div className="d-flex w-50 fontInter">₹10.8/km after 755 kms</div>
                        </div>
                      </div>

                      <div className="d-flex font-size14">
                        <div className="text-primary px-3">
                        <FaGasPump />
                        </div>
                        <div className="d-flex w-75">
                          <div className="d-flex w-50">Fuel Type</div>
                          <div className="d-flex w-50">CNG/Diesel</div>
                        </div>
                      </div>

                      <div className="d-flex font-size14">
                        <div className="text-primary px-3">
                        <TbClockX />
                        </div>
                        <div className="d-flex w-75">
                          <div className="d-flex w-50">Cancellation </div>
                          <div className="d-flex w-50 text-nowrap  gap-1"><span className="text-success">Free</span>till 1 hour of departure</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carRate d-flex flex-column">
                  <div><p className="text-danger m-0 px-4 pt-3 text-end">13% off</p></div>
                  <div className="d-flex align-items-center justify-content-evenly"><span className="strikeDiagonal text-secondary d-flex justify-content-center align-items-center fontInter">₹10,054</span><span className="font-size30 fontWeight500 fontInter">₹ 1,150</span></div>
                </div>
              </div>
            </div>
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
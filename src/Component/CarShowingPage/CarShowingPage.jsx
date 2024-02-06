import React, { useState } from "react";
import "./CarShowingPage.css";
import Dashboard_Navbar from "../Nav_Bar/Dashboard_NavBar";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { LuArrowLeftRight } from "react-icons/lu";
import SingleInputDateRangePicker from "../DatePicker/CarShowing_DatePicker";

const CarShowingPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select your option");

  const options = [
    // Outstation One-way Outstation Round-trip
    { icon: <FaRupeeSign />, color: "#171515", text: "Cab From Airport" },
    { icon: "bxl-instagram-alt", color: "#E1306C", text: "Cab To Airport" },
    { icon: "bxl-linkedin-square", color: "#0E76A8", text: "Daily Rental" },
    { icon: "bxl-facebook-circle", color: "#4267B2", text: "Hourly Rental" },
    { icon: "bxl-twitter", color: "#1DA1F2", text: "Holidays Package" },
  ];

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleOptionClick = (text) => {
    setSelectedOption(text);
    setIsActive(false);
  };

  return (
    <>
      <Dashboard_Navbar />
      <div className="edit_search position-sticky top-0 ">
        <div className="container">
          <div className="row justify-content-between">
            <div className={`p-0 select-menu ${isActive ? "active" : ""}`}>
              <div className="select-btn" onClick={toggleDropdown}>
                <div className="d-flex label">Trip Travel</div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="sBtn-text">{selectedOption}</span>
                  {isActive ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {/* <i className={`bx bx-chevron-down ${isActive ? 'active' : ''}`}></i> */}
              </div>

              <ul className="options gap-3">
                {options.map((option, index) => (
                  <li
                    className="option"
                    key={index}
                    onClick={() => handleOptionClick(option.text)}
                  >
                    <i
                      className={`bx ${option.icon}`}
                      style={{ color: option.color }}
                    ></i>
                    <span className="option-text">{option.text}</span>
                    {/* <span className="subText">{option.subText}</span> */}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pe-0 ps-1 col-lg-2">
              <div className="d-flex justify-content-between align-items-start fromPlace">
                <div className="d-flex label">FROM</div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="sBtn-text">
                    Muthialpet Police Station, Mahatma Gandhi Road, Ramakrishna
                    Nagar, Puducherry, India
                  </span>
                  {/* {isActive ? <FaAngleUp />  : <FaAngleDown /> } */}
                </div>
              </div>
            </div>
            <div className="arrows">
              <LuArrowLeftRight />
            </div>
            <div className="p-0 col-lg-2">
              <div className="d-flex justify-content-between align-items-start fromPlace">
                <div className="d-flex label">TO</div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="sBtn-text">
                    Yeswanthpur South Western Railway Parcel Office, Railway
                    Colony Road, Muniswara Nagar, Yeswanthpur, Bengaluru,
                    Karnataka, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pe-0 ps-1 col-lg-3">
              <div className="d-flex justify-content-between align-items-start fromPlace">
                <div className="d-flex label">PICK-UP DATE</div>
                <div className="d-flex justify-content-between align-items-center w-100">
             <SingleInputDateRangePicker />
                </div>
              </div>
            </div>

            {/* <div className="pe-0 ps-1 ">
              <div className="d-flex justify-content-between align-items-start fromPlace">
                <div className="d-flex label">DROP DATE</div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="sBtn-text">
                    Wed, <b>14 Feb</b> 2024
                  </span>
                </div>
              </div>
            </div> */}

            {/* <div className="pe-0 ps-1 pickUpTimeDiv">
              <div className="d-flex justify-content-between align-items-start fromPlace">
                <div className="d-flex label">DROP DATE</div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="sBtn-text">
                    <b>11:30</b> AM
                  </span>
                </div>
              </div>
            </div>

            <div className="pe-0 ps-1 dropTimeDiv">
              <div className="d-flex justify-content-between align-items-start fromPlace">
                <div className="d-flex label">DROP DATE</div>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <span className="sBtn-text">
                    <b>10:00</b> PM
                  </span>
                </div>
              </div>
            </div> */}
            <div className="col-lg-1">
              <button className="searchBtn">
                <span>SEARCH</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hg"></div>
    </>
  );
};

export default CarShowingPage;

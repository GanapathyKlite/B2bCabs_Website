import React from "react";
import carIcon from "../../Asset/Car_icon.svg";
import CarIconSUV from "../../Asset/Car_icon_SUV.svg";
import { GrMapLocation } from "react-icons/gr";
import { TbClockX } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { GiCharging } from "react-icons/gi";

const CarCard = () => {
  return (
    <div>
      <div className="d-flex flex-column gap-4">
        <div className="sideBars d-flex">
          <div className="carIcon d-flex align-items-center justify-content-center">
            <img src={carIcon} alt="caricon" />
          </div>
          <div className="carData d-flex">
            <div className="d-flex gap-2 flex-column w-100">
              <div className="d-inline-flex align-items-center gap-1">
                <span className="carName">
                  <b>Dzire, Etios</b>
                </span>
                <span className="similarCarName">or similar</span>
                {/* <div className="d-flex gap-1">
                        <span
                          className="badge bg-success bg-gradient"
                          style={{ borderRadius: "2.5px" }}
                        >
                          New
                        </span>
                        <span className="similarCarName ">No ratings</span>
                      </div> */}
              </div>
              <div className="d-inline-flex">
                <span className="d-flex gap-2" style={{ fontSize: "14px" }}>
                  <li>Sedan</li>
                  <li>AC</li>
                  <li>4 Seats</li>
                </span>
              </div>
              <div className="d-flex gap-2 flex-column w-100">
                <p className="m-0">
                  <b>Spacious Car</b>
                </p>
                <div className="d-flex">
                  <div className="text-primary px-3">
                    <GrMapLocation />
                  </div>
                  <div className="d-flex w-75 font-size14">
                    <div className="d-flex w-50">Extra km fare </div>
                    <div className="d-flex w-50 fontInter">
                      ₹10.8/km after 755 kms
                    </div>
                  </div>
                </div>

                <div className="d-flex font-size14">
                  <div className="text-primary px-3">
                    <TbClockX />
                  </div>
                  <div className="d-flex w-75">
                    <div className="d-flex w-50">Cancellation </div>
                    <div className="d-flex w-50 text-nowrap  gap-1">
                      <span className="text-success">Free</span>till 1 hour of
                      departure
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="text-primary px-3">
                    <FaGasPump />
                  </div>
                  <div className="d-flex w-75">
                    <div className="d-flex w-50 font-size14">Amenities</div>
                    <div className="d-flex w-50 gap-3 align-items-center text-primary">
                      {/* <TbBatteryCharging2 /> */}
                      <FaRegSnowflake />
                      <GiCharging />
                      <FaTv />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carRate d-flex gap-2 flex-column">
            <div>
              <p className="text-danger m-0 px-4 pt-3 text-end">13% off</p>
            </div>
            <div className="d-flex align-items-center justify-content-evenly">
              <span className="strikeDiagonal text-secondary d-flex justify-content-center align-items-center fontInter">
                ₹10,054
              </span>
              <span className="font-size30 fontWeight500 fontInter">
                ₹ 1,150
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="sideBars d-flex">
          <div className="carIcon d-flex align-items-center justify-content-center">
            <img src={CarIconSUV} alt="caricon" />
          </div>
          <div className="carData d-flex">
            <div className="d-flex gap-2 flex-column w-100">
              <div className="d-inline-flex align-items-center gap-1">
                <span className="carName">
                  <b>Toyota Innova</b>
                </span>
                <span className="similarCarName">or similar</span>
                {/* <div className="d-flex gap-1">
                        <span
                          className="badge bg-success bg-gradient"
                          style={{ borderRadius: "2.5px" }}
                        >
                          New
                        </span>
                        <span className="similarCarName ">No ratings</span>
                      </div> */}
              </div>
              <div className="d-inline-flex">
                <span className="d-flex gap-2" style={{ fontSize: "14px" }}>
                  <li>SUV</li>
                  <li>AC</li>
                  <li>6 Seats</li>
                </span>
              </div>
              <div className="d-flex gap-2 flex-column w-100">
                <p className="m-0">
                  <b>Large Car</b>
                </p>
                <div className="d-flex">
                  <div className="text-primary px-3">
                    <GrMapLocation />
                  </div>
                  <div className="d-flex w-75 font-size14">
                    <div className="d-flex w-50">Extra km fare </div>
                    <div className="d-flex w-50 fontInter">
                      ₹10.8/km after 755 kms
                    </div>
                  </div>
                </div>

                <div className="d-flex font-size14">
                  <div className="text-primary px-3">
                    <TbClockX />
                  </div>
                  <div className="d-flex w-75">
                    <div className="d-flex w-50">Cancellation </div>
                    <div className="d-flex w-50 text-nowrap  gap-1">
                      <span className="text-success">Free</span>till 1 hour of
                      departure
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="text-primary px-3">
                    <FaGasPump />
                  </div>
                  <div className="d-flex w-75">
                    <div className="d-flex w-50 font-size14">Amenities</div>
                    <div className="d-flex w-50 gap-3 align-items-center text-primary">
                      {/* <TbBatteryCharging2 /> */}
                      <FaRegSnowflake />
                      <GiCharging />
                      <FaTv />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carRate d-flex gap-2 flex-column">
            <div>
              <p className="text-danger m-0 px-4 pt-3 text-end">13% off</p>
            </div>
            <div className="d-flex align-items-center justify-content-evenly">
              <span className="strikeDiagonal text-secondary d-flex justify-content-center align-items-center fontInter">
                ₹10,054
              </span>
              <span className="font-size30 fontWeight500 fontInter">
                ₹ 1,150
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn">BOOK NOW</button>
            </div>
          </div>
        </div>
        <div className="sideBars d-flex">
          <div className="carIcon d-flex align-items-center justify-content-center">
            <img src={carIcon} alt="caricon" />
          </div>
          <div className="carData d-flex">
            <div className="d-flex gap-2 flex-column w-100">
              <div className="d-inline-flex align-items-center gap-1">
                <span className="carName">
                  <b>Dzire, Etios</b>
                </span>
                <span className="similarCarName">or similar</span>
                {/* <div className="d-flex gap-1">
                        <span
                          className="badge bg-success bg-gradient"
                          style={{ borderRadius: "2.5px" }}
                        >
                          New
                        </span>
                        <span className="similarCarName ">No ratings</span>
                      </div> */}
              </div>
              <div className="d-inline-flex">
                <span className="d-flex gap-2" style={{ fontSize: "14px" }}>
                  <li>Sedan</li>
                  <li>AC</li>
                  <li>4 Seats</li>
                </span>
              </div>
              <div className="d-flex gap-2 flex-column w-100">
                <p className="m-0">
                  <b>Spacious Car</b>
                </p>
                <div className="d-flex">
                  <div className="text-primary px-3">
                    <GrMapLocation />
                  </div>
                  <div className="d-flex w-75 font-size13">
                    <div className="d-flex w-50">Extra km fare </div>
                    <div className="d-flex w-50 fontInter">
                      ₹10.8/km after 755 kms
                    </div>
                  </div>
                </div>

                <div className="d-flex font-size13">
                  <div className="text-primary px-3">
                    <TbClockX />
                  </div>
                  <div className="d-flex w-75">
                    <div className="d-flex w-50">Cancellation </div>
                    <div className="d-flex w-50 text-nowrap  gap-1">
                      <span className="text-success">Free</span>till 1 hour of
                      departure
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="text-primary px-3">
                    <FaGasPump />
                  </div>
                  <div className="d-flex w-75">
                    <div className="d-flex w-50 font-size13">Amenities</div>
                    <div className="d-flex w-50 gap-3 align-items-center text-primary">
                      {/* <TbBatteryCharging2 /> */}
                      <FaRegSnowflake />
                      <GiCharging />
                      <FaTv />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carRate d-flex gap-2 flex-column">
            <div>
              <p className="text-danger m-0 px-4 pt-3 text-end">13% off</p>
            </div>
            <div className="d-flex align-items-center justify-content-evenly">
              <span className="strikeDiagonal text-secondary d-flex justify-content-center align-items-center fontInter">
                ₹10,054
              </span>
              <span className="font-size30 fontWeight500 fontInter">
                ₹ 1,150
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn">BOOK NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

import React from "react";

const SideBar = () => {
  return (
    <>
      <div className="pb-4">
        <p className="h5 mb-3">Select Filters</p>
        <p className="mb-2"> Cab Type</p>
        <div className="d-flex flex-column gap-2">
          <div class="form-check d-flex justify-content-between">
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label font-size14" for="flexCheckDefault">
                HATCHBACK
              </label>
            </div>
            <div className="text-secondary font-size12">(5)</div>
          </div>
          <div class="form-check d-flex  justify-content-between">
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label font-size14" for="flexCheckDefault">
                SEDAN
              </label>
            </div>
            <div className="text-secondary font-size12">(2)</div>
          </div>
          <div class="form-check d-flex  justify-content-between">
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label font-size14" for="flexCheckDefault">
                SUV
              </label>
            </div>
            <div className="text-secondary font-size12">(1)</div>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-2"> Cab Model</p>
        <div className="d-flex flex-column gap-2">
          <div class="form-check d-flex justify-content-between">
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label font-size14" for="flexCheckDefault">
                Toyota Innova
              </label>
            </div>
            <div className="text-secondary font-size12">(5)</div>
          </div>
          <div class="form-check d-flex  justify-content-between">
            <div>
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label font-size14" for="flexCheckDefault">
                Innova Crysta
              </label>
            </div>
            <div className="text-secondary font-size12">(1)</div>
          </div>
          {/* <div class="form-check d-flex  justify-content-between">
          <div>
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              SUV
            </label>
          </div>
          <div className="text-secondary">(1)</div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default SideBar;

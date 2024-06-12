import React, { useState } from "react";
import "./NavBar.css";
import Logo from "../../Asset/B2b_Main_Logo_.svg";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [showPassword, setShowPassword] = useState(false);
  // const [formData, setFormData] = useState({});
  const [active, setActive] = useState("navBar");
  const navigate = useNavigate();
  // Function for open a navBar Action
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Function for open a navBar Action
  const removeNavbar = () => {
    setActive("navBar");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  const handleRegister = () => {
    navigate("/sign-up");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          {/* <a href="/" className="logo flex">
            <img src={Logo} alt="Logo" />
          </a> */}
          <Link to={"/"} className="logo flex">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem li">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>

            <li className="navItem li">
              <Link to="/about-us" className="navLink">
                About Us
              </Link>
            </li>

            <li className="navItem li">
              <Link to="/services" className="navLink">
                Services
              </Link>
            </li>

            <li className="navItem li">
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>
            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </ul>
        </div>
        <div>
          {/* <Link to={"/sign-in"}>
            <button onClick={LoginBtn} className="btn">
              Login
            </button>
          </Link> */}

          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Agent Login
          </button>

          {/* <!-- Modal --> */}

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Sign In
                  </h1>
                  <button
                    type="button"
                    className="button"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <IoClose
                      style={{ fontSize: "25px" }}
                      className="closeBtn"
                    />
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        className="mb-2"
                        style={{ color: "--SecondaryColor" }}
                      >
                       <div> Agent ID <span className="text-danger">*</span></div>
                      </label>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Enter Your Agent ID"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        className="mb-2"
                        style={{ color: "--SecondaryColor" }}
                      >
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        // ref={inputRef}

                        type={showPassword ? "text" : "password"}
                        id="password"
                        className="form-control "
                        placeholder="Enter Your Password"
                      />
                      <i
                        onClick={togglePasswordVisibility}
                        style={{
                          float: "right",
                          cursor: "pointer",
                          marginRight: "15px",
                          marginTop: "-33px",
                          color: "var(--grayText)",
                        }}
                        className={
                          showPassword
                            ? "fa fa-fw fa-eye"
                            : "fa fa-fw fa-eye-slash"
                        }
                      ></i>
                    </div>

                    <div
                      className="mb-3 d-flex justify-content-between"
                      style={{ fontSize: "var(--fontSize13)" }}
                    >
                      <label className="d-inline-flex gap-2 align-items-center justify-content-center">
                        <input
                          type="checkbox"
                          name="remeber"
                          className="ui-checkbox"
                        />
                        <span>Remember me</span>
                      </label>
                      <div>
                        <Link
                          data-bs-toggle="modal"
                          data-bs-target="#forgetpassword"
                          style={{ color: "var(--PrimaryColor)" }}
                        >
                          Forget Password
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-outline-light w-25 btn-size mt-1"
                        data-bs-dismiss="modal"
                      >
                        Sign In
                      </button>
                    </div>
                    <div
                      className="text-center mt-5"
                      style={{ fontSize: "var(--fontSize13)" }}
                      onClick={handleRegister}
                    >
                      <Link data-bs-dismiss="modal">
                        <span style={{ color: "var(--blackColor)" }}>
                          Become a Agent ? &nbsp;
                        </span>
                        <span style={{ color: "var(--PrimaryColor)" }}>
                          Register
                        </span>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;

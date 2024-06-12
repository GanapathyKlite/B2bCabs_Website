import React from 'react'
import Logo from "../../Asset/B2b_WhiteText_Main_Logo_.svg"
import "./Dashboard_Footer.css"
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const Dashboard_Footer = () => {
  return (
    <div>
      <footer class="footer-section">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget company-intro-widget">
              {/* <img src={Logo} className='w-50 mb-2' alt="logo"/> */}
              <div className='display-6 mb-3' style={{width:"200px"}}>
                <img src={Logo} alt="Main Logo" />
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
              <ul class="company-footer-contact-list">
                <li className='d-flex gap-2 align-items-center justify-content-start'><FaPhone />1234567890</li>
                {/* <li><i class="fas fa-clock"></i>Mon - Sat 8.00 - 18.00</li> */}
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget course-links-widget">
              <h5 class="widget-title">OUR AGENCY</h5>
              <ul class="courses-link-list">
                <li><a href="#"><IoIosArrowForward className='me-1' />Services</a></li>
                <li><a href="#"><IoIosArrowForward className='me-1' />Insurance</a></li>
                <li><a href="#"><IoIosArrowForward className='me-1' />Agency</a></li>
                <li><a href="#"><IoIosArrowForward className='me-1' />Tourism</a></li>
                <li><a href="#"><IoIosArrowForward className='me-1' />Payment</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget course-links-widget">
              <h5 class="widget-title">PARTNERS</h5>
              <ul class="courses-link-list">
                <li><a href="#"><IoIosArrowForward className='me-1' />Bookings</a></li>
                <li><a href="#"><IoIosArrowForward className='me-1' />Rentcars</a></li>
                <li><a href="#"><IoIosArrowForward className='me-1' />HostelWorld</a></li>
                <li><a href="#"><IoIosArrowForward className='me-1' />Trivago</a></li>
                <li><a href="#"><IoIosArrowForward className='me-1' />TripAdvisor</a></li>
              </ul>
            </div>
          </div>
          {/* <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget latest-news-widget">
              <h5 class="widget-title">lastest news</h5>
              <ul class="small-post-list">
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">July 18, 2018</a>
                    <h6 class="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing.</a></h6>
                  </div>
                </li>
                <li>
                  <div class="small-post-item">
                    <a href="#" class="post-date">July 28, 2018</a>
                    <h6 class="small-post-title"><a href="#">Lorem Ipsum is simply dummy text of the printing</a></h6>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget newsletter-widget">
              <h5 class="widget-title">KEEP IN TOUCH</h5>
              <div class="footer-newsletter">
                <p>Travel with us</p>
                <form class="news-letter-form">
                  <input type="email" name="news-email" id="news-email" placeholder="Your email address"/>
                  {/* <input className='btn' type="submit" value="Send"/> */}
                  <button className='btn' type='submit'>Send</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
            <div class="col-md-6 col-sm-6 text-sm-left text-center">
              <span class="copy-right-text">Copyright © 2024 <a href="https://codepen.io/anupkumar92">B2b Cabs</a> All Rights Reserved.</span>
            </div>
            <div class="col-md-6 col-sm-6">
              <ul class="terms-privacy d-flex justify-content-sm-end justify-content-center">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </footer>
</div>
  )
}

export default Dashboard_Footer
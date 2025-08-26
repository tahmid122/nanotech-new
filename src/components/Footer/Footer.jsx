import React from "react";
import "./Footer.css";
import { Link } from "react-router";
import {
  FaEnvelope,
  FaFacebook,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";
import useLang from "../../hooks/useLang";
const Footer = () => {
  const { isBangla } = useLang();
  return (
    // Footer
    <div id="footer" className="footer-bg">
      {/* main footer */}
      <div className="footer-main">
        {/* footer part 1 */}
        <div className="tech">
          <h3 style={{ fontSize: "24px" }}>
            {isBangla
              ? "ন্যানো-টেক উৎপাদন প্রযুক্তি"
              : "Nano-Tech Production Technology"}
          </h3>
          <div className="customerService">
            <h6>Customer service helpline</h6>
            <div>
              <p>Call us at 16267 (Charge Applicable)</p>
              <p>or 08 000016267 (Toll Free)</p>
              <p>We are available from 07:00 am to 11:00 pm</p>
            </div>
          </div>
          <div className="mediaContainer">
            <h6>Stay in touch with us</h6>
            <div className="socialMedias">
              <a href="#" target="_blank">
                <FaFacebook size={19} />
              </a>
              <a href="#" target="_blank">
                <FaWhatsapp size={19} />
              </a>
            </div>
          </div>
        </div>
        {/* footer part 1 */}
        {/* footer part 2 */}
        <div>
          <h3 className="footer-title">
            {isBangla ? "কোম্পানী" : "About Nano-Tech"}
          </h3>
          <ul className="footer-menu">
            <li>
              <Link>{isBangla ? "হোম" : "Home"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "হোম" : "About Us"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "হোম" : "Message from MD"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "হোম" : "Why Us"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "হোম" : "Contact Us"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "হোম" : " Product Certification"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "হোম" : "Plaza List"}</Link>
            </li>
          </ul>
        </div>
        {/* footer part 2 */}
        {/* footer part 3 */}
        <div>
          <h3 className="footer-title">
            {isBangla ? "অন্যান্য" : "Help & Information"}
          </h3>
          <ul className="footer-menu">
            <li>
              <Link>{isBangla ? "আবেদন" : "Payment Policy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Delivery Policy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Reward Policy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Reject And Return Policy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Privacy Policy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "How to Buy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "FAQ Offer FAQ"}</Link>
            </li>
          </ul>
        </div>
        {/* footer part 3 */}
        {/* footer part 3 */}
        <div>
          <h3 className="footer-title">
            {isBangla ? "অন্যান্য" : "Top Categories"}
          </h3>
          <ul className="footer-menu">
            <li>
              <Link>{isBangla ? "আবেদন" : "Refrigerator & Freezer"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Air Conditioner"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Television"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Computer"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Home Appliances"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "E-Bike"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Washing Machine"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Kitchen Appliance"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Featured Products"}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">
            {isBangla ? "অন্যান্য" : "Out Brands"}
          </h3>
          <ul className="footer-menu">
            <li>
              <Link>{isBangla ? "আবেদন" : "Walton"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "Safe"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আবেদন" : "ACC"}</Link>
            </li>
          </ul>
        </div>
        {/* footer part 4 */}
        {/* <div className="contact">
          <h3 className="footer-title">{isBangla ? "ঠিকানা" : "Address"}</h3>
          <div className="address">
            <p>
              <FaLocationDot />{" "}
              {isBangla ? "লেভেল #১৩, এমটি বিল্ডিং" : "Level #13, MT Building"}
            </p>
            <p>
              {" "}
              {isBangla
                ? "যশোর সফটওয়্যার টেকনোলোজি পার্ক, যশোর"
                : "Jashore Software Technology Park, Jashore"}{" "}
            </p>
            <p>
              <FaEnvelope />
              <a href="mailto:contact@nano-techbd.com">
                contact@nano-techbd.com
              </a>
            </p>
            <p>
              <FaPhone /> {isBangla ? "+৮৮০ ১৩২৯৬৩৬৮৯০" : "+880 1329636890"}
            </p>
          </div>
        </div> */}
        {/* footer part 4 */}
      </div>
      {/* main footer */}
      <hr className="hr-style" />
      {/* Down footer */}
      <div className="copyright">
        <div className="paymentMethod">
          <h6>Payment Method</h6>
          <div className="paymentImages">
            <div>
              {" "}
              <img src="/bkash.png" alt="bkash" />
            </div>
            <div>
              {" "}
              <img src="/nagad.png" alt="nagad" />
            </div>

            <div>
              {" "}
              <img src="/visa.png" alt="visa" />
            </div>

            <div>
              {" "}
              <img src="/mastercard.png" alt="mastercard" />
            </div>
          </div>{" "}
        </div>
        <small>
          &copy;
          {isBangla
            ? "২০২৫ ন্যানো-টেক উৎপাদন প্রযুক্তি। সর্বস্বত্ব সংরক্ষিত।"
            : "2025 Nano-Tech Production Technology. All rights reserved."}
        </small>
      </div>
      {/* Down footer */}
    </div>
    // Footer
  );
};

export default Footer;

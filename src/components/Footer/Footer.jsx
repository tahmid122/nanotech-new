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
          <h3 className="footer-title">
            {isBangla
              ? "ন্যানো-টেক উৎপাদন প্রযুক্তি"
              : "Nano-Tech Production Technology"}
          </h3>
          <p>
            {isBangla
              ? "ন্যানো-টেক প্রোডাকশন টেকনোলজি একটি উদ্ভাবনী ইলেকট্রনিক্স উৎপাদনকারী কোম্পানি, যা উচ্চমানের গৃহস্থালী যন্ত্রপাতি এবং স্মার্ট ডিভাইস তৈরিতে নিবেদিতপ্রাণ যা দৈনন্দিন জীবনকে আরও সহজ এবং দক্ষ করে তোলে।"
              : "Nano-Tech Production Technology is an innovative electronics manufacturing company, dedicated to producing high-quality home appliances and smart devicesthat make everyday life easier and more efficient."}
          </p>
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
          <h3 className="footer-title">{isBangla ? "কোম্পানী" : "Company"}</h3>
          <ul className="footer-menu">
            <li>
              <Link>{isBangla ? "হোম" : "Home"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "পন্যসমূহ" : "Products"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "যোগাযোগ" : "Contact"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "আমাদের সম্পর্কে" : "About us"}</Link>
            </li>
          </ul>
        </div>
        {/* footer part 2 */}
        {/* footer part 3 */}
        <div>
          <h3 className="footer-title">
            {isBangla ? "অন্যান্য" : "Resources"}
          </h3>
          <ul className="footer-menu">
            <li>
              <Link to={"/sales-representative"}>
                {isBangla ? "আবেদন" : "Application"}
              </Link>
            </li>
            <li>
              <Link>{isBangla ? "শর্তাবলী" : "Terms & Conditions"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "ওয়ারেন্টি নীতি" : "Warranty Policy"}</Link>
            </li>
            <li>
              <Link>{isBangla ? "পেশা" : "Career"}</Link>
            </li>
          </ul>
        </div>
        {/* footer part 3 */}
        {/* footer part 4 */}
        <div className="contact">
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
        </div>
        {/* footer part 4 */}
      </div>
      {/* main footer */}
      <hr className="hr-style" />
      {/* Down footer */}
      <div className="copyright">
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

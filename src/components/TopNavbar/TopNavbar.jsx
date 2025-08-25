import React, { useState } from "react";
import "./TopNavbar.css";
import { Link } from "react-router";
import useLang from "../../hooks/useLang";
import Logo from "../Logo/Logo";
const TopNavbar = () => {
  // This is top navbar. It will show to everywhere.
  const [isShow, setIsShow] = useState(false);
  const { isBangla, setLang } = useLang();

  return (
    <div id="topNavbar">
      <div className="topNavLogo">
        <Logo />
      </div>
      <ul>
        <li>
          <Link>{isBangla ? "লগইন" : "Login"}</Link>
        </li>
        <li>
          <Link>{isBangla ? "সেলস পয়েন্টস" : "Sales Points"}</Link>
        </li>
        <li onClick={() => setIsShow(!isShow)} className="languageSwitch">
          <Link>
            {isBangla ? "বাংলা" : "English"}
            <ul style={{ display: isShow ? "block" : "none" }}>
              <li onClick={() => setLang("bangla")}>বাংলা</li>
              <li onClick={() => setLang("english")}>English</li>
            </ul>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNavbar;

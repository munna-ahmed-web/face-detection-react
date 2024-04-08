import { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const [mobileMenuBtnToggle, setMobileMenuToggle] = useState(false);
  const handleToggle = () =>{
    setMobileMenuToggle((prev)=>!prev)
  }
  return (
    <div>
      {/* menu bar */}
      <section className="header_section">
        <nav className="header_nav">
          <div className="container">
            <div className="header_main">
              {/* <!-- Mobile icon --> */}
              <div className="mobile_icon_main">
                <div className="mobile_icon_div">
                  <div className="mobile_logo">
                    <a href="index.html">Face AI</a>
                  </div>
                  <div className="mobile_icon">
                    <button
                      className="mIcon_btn mobile_bars"
                      onClick={handleToggle}
                    >
                      <i
                        className={
                          mobileMenuBtnToggle
                            ? "fa-solid fa-xmark"
                            : "fa-solid fa-bars"
                        }
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="header_logo">
                <NavLink href="index.html">Face AI</NavLink>
              </div>

              {/* this menu is hidden initially and when mobile screen reach it */}
              <div
                className="menus"
                style={{ display: mobileMenuBtnToggle ? "block" : "none" }}
              >
                <ul className="menu_list">
                  <li className="menu_item">
                    <NavLink className="menu_link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink to="/live" className="menu_link">
                      Live
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink className="menu_link" to="/report">
                      Report
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink className="menu_link" to="/help">
                      Help
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink className="menu_link" to="/person">
                      <i className="fa-solid fa-user"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* this menu will be hidden when screen will be large */}
              <div className="menus desktopMenus">
                <ul className="menu_list">
                  <li className="menu_item">
                    <NavLink className="menu_link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink to="/live" className="menu_link">
                      Live
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink className="menu_link" to="/report">
                      Report
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink className="menu_link" to="/help">
                      Help
                    </NavLink>
                  </li>
                  <li className="menu_item">
                    <NavLink className="menu_link" to="/person">
                      <i className="fa-solid fa-user"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default HeaderComponent;

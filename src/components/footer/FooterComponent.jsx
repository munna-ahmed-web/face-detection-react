import {NavLink } from 'react-router-dom'
const FooterComponent = () => {
  return (
    <div>
      {/* <!-- Footer Section --> */}
      <section className="footer_section">
        <div className="footer_black_layer"></div>
        <div className="container">
          <div className="footer_main">
            {/* <!-- Footer top --> */}
            <div className="footer_top">
              <div className="footer_top_left">
                <div className="footer_logo">
                  {/* <a href="index.html" className="fLogoink">
                    Face AI
                  </a> */}
                  <NavLink to={"/"}>
                    <img
                      src="../../../src/assets/img/logo/logo.jpg"
                      alt=""
                      style={{ width: "250px" }}
                    />
                  </NavLink>
                </div>
                <p className="short_about">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, consequuntur.
                </p>
                <div className="footer_social">
                  <ul className="social_list">
                    <li className="social_item">
                      <a
                        href="https://web.facebook.com/innovativeskillsbd"
                        className="social_link"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="social_item">
                      <a href="#" className="social_link" target="_blank">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li className="social_item">
                      <a href="#" className="social_link" target="_blank">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li className="social_item">
                      <a
                        href="https://www.youtube.com/@InnovativeSkillsBD"
                        className="social_link"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer_top_right">
                <div className="quick_link">
                  <h3 className="footer_sub_title">Quick Link</h3>
                  <ul className="quick_link_list fTul">
                    <li className="link_item">
                      <a href="#" className="link-a">
                        Face Recognition
                      </a>
                    </li>
                    <li className="link_item">
                      <a href="#" className="link-a">
                        Live Detection
                      </a>
                    </li>
                    <li className="link_item">
                      <a href="#" className="link-a">
                        Age Varification
                      </a>
                    </li>
                    <li className="link_item">
                      <a href="#" className="link-a">
                        Attendance System
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_company">
                  <h3 className="footer_sub_title">Company</h3>
                  <ul className="com_list fTul">
                    <li className="company_item">
                      <a href="#" className="company_link">
                        About Us
                      </a>
                    </li>
                    <li className="company_item">
                      <a href="#" className="company_link">
                        Creer
                      </a>
                    </li>
                    <li className="company_item">
                      <a href="#" className="company_link">
                        Developer guide
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_contact">
                  <h3 className="footer_sub_title">Contact</h3>
                  <ul className="contact_list fTul">
                    <li className="contact_item">
                      <a href="tel: +88001705644008" className="contact_link">
                        <i className="fa-solid fa-phone"></i>
                        <span>01705644008</span>
                      </a>
                    </li>
                    <li className="contact_item">
                      <a
                        href="mailto: innovativeskillsbd@gmail.com"
                        className="contact_link"
                      >
                        <i className="fa-solid fa-envelope"></i>
                        <span>innovativeskillsbd@gmail.com</span>
                      </a>
                    </li>
                    <li className="contact_item">
                      <div className="footer_location">
                        <i className="fa-solid fa-location-crosshairs"></i>
                        <span>693, West Shewrapara, Mirpur - 1216</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Footer bottom --> */}
        <div className="footer_bottom_nain">
          <div className="container">
            <div className="footer_bottom">
              <div className="footer_bottom_left">
                <p className="copy_text">
                  © 2024 The Website developed by
                  <a
                    href="innovativeskillsbd.com"
                    className="footer_bottom_link"
                    target="_blank"
                  >
                    Innovative Skills
                  </a>
                </p>
              </div>
              <div className="footer_bottom_right">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Condition</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FooterComponent
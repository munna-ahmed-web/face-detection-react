
const Home = () => {
  return (
    <div>
      {/* menu bar */}
      <section className="header_section">
        <div className="container">
          {/* <!-- Slider section --> */}
          <div className="slider_main">
            <div className="slider_left">
              <div className="slider_left_data">
                <p className="slider_text">
                  Innovative Face AI
                  <p style={{fontSize:'25px'}}>Indentify Real Time Face Efficiently</p>
                </p>
                <a href="#" className="btn_blue">
                  <span>Try now</span>
                  <i className="fa-solid fa-right-long"></i>
                </a>
              </div>
            </div>
            <div className="slider_right">
              <div className="slider_img">
                <img
                  src="../../../src/assets/img/slider/94-removebg-preview.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Price list --> */}
      <section className="price_section">
        <div className="container">
          <div className="price_section_main">
            <div className="price_title">
              <p className="title_text">Check your desire plan</p>
            </div>
            <div className="price_section_inner">
              <div className="price_single silver">
                <div className="price_header">
                  <p className="price_head">Silver</p>
                  <p className="price_amount">&#2547;5000 month</p>
                </div>
                <div className="price_body">
                  <p className="price_body_text">Monthly plan</p>
                  <ul className="service_list">
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>One-month access</span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        <b>25</b> searches daily
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        Access to sources of results (websites and images)
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        Up to <b>3</b> PimEyes’ Alerts
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>Dedicated support</span>
                    </li>
                  </ul>
                  <a href="#" className="btn_light">
                    <span>Buy now</span>
                    <i className="fa-solid fa-right-long"></i>
                  </a>
                </div>
              </div>
              <div className="price_single gold">
                <div className="price_header">
                  <p className="price_head">Gold</p>
                  <p className="price_amount">&#2547;7500 / month</p>
                </div>
                <div className="price_body">
                  <p className="price_body_text">Monthly plan</p>
                  <ul className="service_list">
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>One-month access</span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        <b>25</b> searches daily
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        Access to sources of results (websites and images)
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        Up to <b>15</b> PimEyes’ Alerts
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>Dedicated support</span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>Managing current and future results</span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        Drafting and sending up to 80 DMCA and GDPR Takedown
                        Notices on your behalf
                      </span>
                    </li>
                  </ul>
                  <a href="#" className="btn_blue bg_white">
                    <span>Buy now</span>
                    <i className="fa-solid fa-right-long"></i>
                  </a>
                </div>
              </div>
              <div className="price_single plutinam">
                <div className="price_header">
                  <p className="price_head">Plutinam</p>
                  <p className="price_amount">&#2547;10000 / month</p>
                </div>
                <div className="price_body">
                  <p className="price_body_text">Monthly plan</p>
                  <ul className="service_list">
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>One-month access</span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        <b>Unlimited</b> searches daily
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        Access to sources of results (websites and images)
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        Up to <b>500</b> PimEyes’ Alerts
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>Dedicated support</span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>
                        <b>Deep Search</b> (more thorough search)
                      </span>
                    </li>
                    <li className="service_item">
                      <i className="fa-solid fa-check"></i>
                      <span>PDF and CSV results exporting</span>
                    </li>
                  </ul>
                  <a href="#" className="btn_black">
                    <span>Buy now</span>
                    <i className="fa-solid fa-right-long"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
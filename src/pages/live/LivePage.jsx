import ReactPlayer from "react-player";
import { useEffect, useState } from 'react';
import axios from "axios";


const ACCESS_KEY = "d-ZV6gt1AOfsh8DM_EtinbqEmZo__o4FhnArYQSnCtE";
const API_URL = "https://api.unsplash.com/photos/random";

const liveCamUrl = "http://127.0.0.1:8000/employee/employee/images/";


const totalNumber = [1, 2, 3, 4, 5, 6, 7, 8];
const cameraList = [1, 2, 3, 4, "all"];


const LivePage = () => {
  const [frameUrl, setFrameUrl] = useState("");
  const [streamMenuToggle, setStreamMenuToggle] = useState(false);
  const handleToggleMenu = () =>{
    setStreamMenuToggle((prev)=>!prev)
  }
 
  //  useEffect(() => {
  //    // Function to fetch frames from the Django backend
  //    const fetchFrames = async () => {
  //      try {
  //        // Fetch frames from the backend using Axios
  //        const response = await axios.get(
  //          "http://your-django-backend.com/frame-endpoint",
  //          {
  //            responseType: "blob", // Set response type to blob
  //          }
  //        );
  //        const frameBlob = response.data;

  //        // Convert frame blob to data URL
  //        const dataUrl = URL.createObjectURL(frameBlob);

  //        // Set the frame URL to update the video source
  //        setFrameUrl(dataUrl);
  //      } catch (error) {
  //        console.error("Error fetching frames:", error);
  //      }
  //    };

  //    // Fetch frames periodically (adjust interval as needed)
  //    const intervalId = setInterval(fetchFrames, 1000);

  //    // Clean up interval on component unmount
  //    return () => clearInterval(intervalId);
  //  }, []);


  //  useEffect(() => {
  //    // Function to fetch frames from the Django backend
  //    const fetchFrames = async () => {
  //      try {
  //        // Fetch frames from the backend using Axios
  //        const response = await axios.get('url');
  //        const imageObj = response.data;
  //        const imgArray = imageObj.images;
  //        const lastImage = imgArray[imgArray.length - 1];
  //        // Set the frame URL to update the video source
  //        setFrameUrl(imageObj);
  //      } catch (error) {
  //        console.error("Error fetching frames:", error);
  //      }
  //    };

  //    // Fetch frames periodically (adjust interval as needed)
  //    const intervalId = setInterval(fetchFrames, 1000);

  //    // Clean up interval on component unmount
  //    return () => clearInterval(intervalId);
  //  }, []);

  return (
    <div>
      <section className="live_section">
        <div className="container">
          <div className="live_main">
            {/* <!-- LiveStream Header --> */}
            <div className="live_header">
              <div
                className="live_header_inner liveHeadMenuMobile"
                style={{ display: streamMenuToggle ? "block" : "none" }}
              >
                <select
                  name="camera"
                  id="camera"
                  className="camera header_select"
                >
                  <option value="Camera" selected>
                    Select camera
                  </option>
                  <option value="select_camera" selected>
                    Select camera
                  </option>
                  <option value="camera_1">Camera one</option>
                  <option value="camera_2">Camera two</option>
                  <option value="camera_3">Camera three</option>
                  <option value="camera_4">Camera four</option>
                  <option value="all">Camera all</option>
                </select>

                <select
                  name="inTime"
                  id="inTime"
                  className="inTime header_select"
                >
                  <option value="select_inTime" selected>
                    Select in time
                  </option>
                  <option value="seven00">7:00am to 7:30am</option>
                  <option value="seven30">7:30am to 8:00am</option>
                  <option value="eight00">8:00am to 8:30am</option>
                  <option value="eight30">8:30am to 9:00am</option>
                  <option value="nine00">9:00am to 9:30am</option>
                  <option value="nine00">9:30am to 10:00am</option>
                </select>

                <select
                  name="outTime"
                  id="outTime"
                  className="outTime header_select"
                >
                  <option value="select_out" selected>
                    Select out time
                  </option>
                  <option value="four00">4:00pm to 4:30pm</option>
                  <option value="four30">4:30pm to 5:00pm</option>
                  <option value="five00">5:00pm to 5:30pm</option>
                  <option value="five30">5:30pm to 6:00pm</option>
                  <option value="six00">6:00pm to 6:30pm</option>
                  <option value="six30">6:30pm to 7:00pm</option>
                </select>

                <select
                  name="tolerance"
                  id="tolerance"
                  className="tolerance header_select"
                >
                  <option value="select_tolerance" selected>
                    Tolerance time
                  </option>
                  <option value="tolerance10">10 minutes</option>
                  <option value="tolerance20">20 minutes</option>
                  <option value="tolerance30">30 minutes</option>
                  <option value="tolerance40">40 minutes</option>
                  <option value="tolerance50">50 minutes</option>
                  <option value="tolerance1h">1 hour</option>
                  <option value="tolerance1:10h">1.10 hour</option>
                  <option value="tolerance1:20h">1.20 hour</option>
                  <option value="tolerance1:30h">1.30 hour</option>
                </select>
              </div>

              <div className="live_header_inner  desktopliveHeader">
                <select
                  name="camera"
                  id="camera"
                  className="camera header_select"
                >
                  <option value="Camera" selected>
                    Select camera
                  </option>
                  <option value="select_camera" selected>
                    Select camera
                  </option>
                  <option value="camera_1">Camera one</option>
                  <option value="camera_2">Camera two</option>
                  <option value="camera_3">Camera three</option>
                  <option value="camera_4">Camera four</option>
                  <option value="all">Camera all</option>
                </select>

                <select
                  name="inTime"
                  id="inTime"
                  className="inTime header_select"
                >
                  <option value="select_inTime" selected>
                    Select in time
                  </option>
                  <option value="seven00">7:00am to 7:30am</option>
                  <option value="seven30">7:30am to 8:00am</option>
                  <option value="eight00">8:00am to 8:30am</option>
                  <option value="eight30">8:30am to 9:00am</option>
                  <option value="nine00">9:00am to 9:30am</option>
                  <option value="nine00">9:30am to 10:00am</option>
                </select>

                <select
                  name="outTime"
                  id="outTime"
                  className="outTime header_select"
                >
                  <option value="select_out" selected>
                    Select out time
                  </option>
                  <option value="four00">4:00pm to 4:30pm</option>
                  <option value="four30">4:30pm to 5:00pm</option>
                  <option value="five00">5:00pm to 5:30pm</option>
                  <option value="five30">5:30pm to 6:00pm</option>
                  <option value="six00">6:00pm to 6:30pm</option>
                  <option value="six30">6:30pm to 7:00pm</option>
                </select>

                <select
                  name="tolerance"
                  id="tolerance"
                  className="tolerance header_select"
                >
                  <option value="select_tolerance" selected>
                    Tolerance time
                  </option>
                  <option value="tolerance10">10 minutes</option>
                  <option value="tolerance20">20 minutes</option>
                  <option value="tolerance30">30 minutes</option>
                  <option value="tolerance40">40 minutes</option>
                  <option value="tolerance50">50 minutes</option>
                  <option value="tolerance1h">1 hour</option>
                  <option value="tolerance1:10h">1.10 hour</option>
                  <option value="tolerance1:20h">1.20 hour</option>
                  <option value="tolerance1:30h">1.30 hour</option>
                </select>
              </div>

              <div className="live_icon d-lg-none ms-auto">
                <button
                  className="live_menu_close mobile_bars"
                  onClick={handleToggleMenu}
                >
                  <i
                    className={
                      streamMenuToggle
                        ? "fa-solid fa-xmark"
                        : "fa-solid fa-bars"
                    }
                  ></i>
                </button>
              </div>
            </div>

            {/* <!-- Live Body --> */}
            <div className="live_inner">
              {/* <!-- Live Footage --> */}
              <div className="live_footage">
                <div className="camera_single c-1">
                  <p className="c_id">Camera one</p>
                  <img src={frameUrl} alt="Live Video Frame" />
                  <ReactPlayer
                    url={liveCamUrl}
                    width="100%"
                  />
                </div>
                <div className="camera_single c-2">
                  <p className="c_id">Camera two</p>
                </div>
                <div className="camera_single c-3">
                  <p className="c_id">Camera three</p>
                </div>
                <div className="camera_single C-4">
                  <p className="c_id">Camera four</p>
                </div>
              </div>

              {/* <!-- Face Maching --> */}
              <div className="live_chaking">
                {/* <!-- Checking Single person --> */}
                {totalNumber.map((item) => {
                  return (
                    <div className="single_chaking" key={item + 5}>
                      {/* <!-- Image form database --> */}
                      <div className="img_database">
                        <img
                          src="../../../src/assets/img/databaseImg/database.jpeg"
                          alt=""
                          className="database_img"
                        />
                      </div>

                      {/* <!-- person data --> */}
                      <div className="person_data">
                        <div className="person_single_line">
                          <p className="small_text key">Name:</p>
                          <p className="small_text2 value">Person Name</p>
                        </div>
                        <div className="person_single_line">
                          <p className="small_text key">Camera id:</p>
                          <p className="small_text2 value">C_1</p>
                        </div>
                        <div className="person_single_line">
                          <p className="small_text key">Date:</p>
                          <p className="small_text2 value">10/05/2023</p>
                        </div>
                        <div className="person_single_line">
                          <p className="small_text key">Time:</p>
                          <p className="small_text2 value">10:00 pm</p>
                        </div>
                        <div className="person_single_line">
                          <p className="small_text key">Track id:</p>
                          <p className="small_text2 value">T_10365</p>
                        </div>
                        <div className="person_single_line">
                          <p className="small_text key">Status:</p>
                          <select
                            name="#"
                            id="#"
                            className="person_status value"
                          >
                            <option value="status" selected>
                              On time
                            </option>
                            <option value="status">Late</option>
                            <option value="status">Fast</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="single_chaking">
                  {/* <!-- Image form database --> */}
                  <div className="img_database">
                    <img
                      src="../../../src/assets/img/databaseImg/database.jpeg"
                      alt=""
                      className="database_img"
                    />
                  </div>

                  {/* <!-- person data --> */}
                  <div className="person_data">
                    <div className="person_single_line">
                      <p className="small_text key">Name:</p>
                      <p className="small_text2 value">Person Name</p>
                    </div>
                    <div className="person_single_line">
                      <p className="small_text key">Camera id:</p>
                      <p className="small_text2 value">C_1</p>
                    </div>
                    <div className="person_single_line">
                      <p className="small_text key">Date:</p>
                      <p className="small_text2 value">10/05/2023</p>
                    </div>
                    <div className="person_single_line">
                      <p className="small_text key">Time:</p>
                      <p className="small_text2 value">10:00 pm</p>
                    </div>
                    <div className="person_single_line">
                      <p className="small_text key">Track id:</p>
                      <p className="small_text2 value">T_10365</p>
                    </div>
                    <div className="person_single_line">
                      <p className="small_text key">Status:</p>
                      <select name="#" id="#" className="person_status value">
                        <option value="status" selected>
                          On time
                        </option>
                        <option value="status">Late</option>
                        <option value="status">Fast</option>
                      </select>
                    </div>
                  </div>

                  {/* <!-- Image form camera --> */}
                  <div className="img_camera">
                    <img
                      src="../../../src/assets/img/liveImg/images.jpeg"
                      alt=""
                      className="camera_img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LivePage;

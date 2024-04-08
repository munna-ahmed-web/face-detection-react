import {Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import LivePage from "../pages/live/LivePage";
import NotFound from "../components/notFound/NotFound";



const RouterComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/live" element={<LivePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterComponent;

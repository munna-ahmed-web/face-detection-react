import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <section className="live_section" style={{backgroundColor:'white'}} >
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3 text-center mt-5">
                <h2>404 - Not Found</h2>
                <p>The page you are looking for does not exist.</p>
                <Link to="/" className="btn btn-primary">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;

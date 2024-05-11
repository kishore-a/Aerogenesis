import "./App.css";
import MainPage from "./pages/mainpage";
import { Amplify } from "aws-amplify";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
import PhotoUpload from "./pages/photoupload";
import ContactPage from "./pages/contactform";
import Aboutpage from "./pages/Aboutpage";
Amplify.configure(config);
const style = {
  height: "100vh", // Full height of the viewport
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to right, #ff7e5f, #feb47b)" // Gradient from pink to orange
};
function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <div >
      <Router>
        <nav>
            
        <div
        style={{
          flexDirection: "row",
          paddingLeft: "2%",
          paddingTop: "2%",
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontFamily: "Ubuntu", fontSize: "40px" }}>
          AeroGenesis
        </div>
        <div style={{ display: "flex", marginRight: "100px" }}>
        <Link to="/" style={{fontSize:'20px'}}>
            Home
        </Link>
        <Link to="/diagnosis" style={{fontSize:'20px'}}>
            Diagnosis
        </Link>
        <Link to="/contact" style={{fontSize:'20px'}}>
            Contact
        </Link>
        <Link to="/about" style={{fontSize:'20px'}}>
            About
        </Link>
        <Link to="/logout" style={{fontSize:'20px'}} onClick={signOut}>
            Logout
        </Link>

          
     
        </div>
      </div>
        </nav>
        <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/diagnosis" element={<PhotoUpload/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<Aboutpage/>} />

        </Routes>
      
  </Router>
    </div>

  );
}

export default withAuthenticator(App);

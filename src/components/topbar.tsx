import React from 'react';

interface TopBarProps {
    // define your props here
}

const TopBar: React.FC<TopBarProps> = (props) => {
    return (
        <div>
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
        <div style={{fontFamily:'Ubuntu', fontSize:'40px'}}>AeroGenesis        </div>
        <div style={{ display: "flex", marginRight: "100px" }}>

        <a href="https://www.google.com" style={{ marginRight: "20px",fontSize:'20px' }}>Home</a>
        <a href="https://www.google.com" style={{ marginRight: "20px",fontSize:'20px' }}>Diagnosis</a>
        <a href="https://www.google.com" style={{ marginRight: "20px",fontSize:'20px' }}>Contact</a>
        <a href="https://www.google.com" style={{ marginRight: "20px",fontSize:'20px' }}>About</a>
          <a href="https://www.google.com" style={{ marginRight: "20px",fontSize:'20px' }}>Logout</a>


        </div>
      </div>        </div>
    );
}

export default TopBar;
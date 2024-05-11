import React from 'react';
import one from '../resource/one.jpg';
import "../stylesheets/styles.css";

const HomeDesc = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "60px 20px",
            minHeight: "100vh",  // Ensures that the gradient covers the full view height
            background: "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)"  // Example gradient from purple to blue
        }}>
            <img src={one} style={{
                height: "350px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }} alt="Lung Imaging" />
            <div style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginTop: "20px",
                maxWidth: "600px"
            }}>
                <div style={{ fontFamily: 'Ubuntu', fontSize: '40px', color: "#2A2A72" }}>AeroGenesis</div>
                <div style={{ fontFamily: 'Ubuntu', fontSize: '30px', color: "#4A4A90" }}>Guarding Lungs with Precision</div>
                <div style={{
                    fontFamily: 'Ubuntu',
                    fontSize: '20px',
                    textAlign: 'justify',
                    color: "#4A4A90"
                }}>
                    Pneumonia is a condition that requires timely diagnosis to ensure effective treatment.
                    Aerogenesis revolutionizes the way pneumonia is detected, offering a fast, accurate, and non-invasive solution right at your fingertips. -Kishore Shankar Abimanyu
                </div>
            </div>
        </div>
    );
};

export default HomeDesc;
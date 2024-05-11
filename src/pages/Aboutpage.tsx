import React from 'react';
import one from '../resource/a.png';
import xray from '../resource/xray.png';
const AboutPneumonia: React.FC = () => {
    // Define the styles in a variable
    const pageStyles: React.CSSProperties = {
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: '#ffffffdd', // Semi-transparent white
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    };

    const headerStyles: React.CSSProperties = {
        textAlign: 'center',
        color: '#2c3e50'
    };

    const sectionStyles: React.CSSProperties = {
        marginBottom: '30px'
    };

    const titleStyles: React.CSSProperties = {
        color: '#3498db',
        textAlign: 'center'
    };

    const textStyle: React.CSSProperties = {
        textAlign: 'justify',
        fontSize: '16px',
        lineHeight: '1.6'
    };

    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginTop: '10px'
    };

    // Set the global background style
    const backgroundStyle: React.CSSProperties = {
        background: 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)',
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };

    return (
        <div style={backgroundStyle}>
            <div style={pageStyles}>
                <h1 style={headerStyles}>About Pneumonia</h1>

                <section style={sectionStyles}>
                    <h2 style={titleStyles}>What is Pneumonia?</h2>
                    <p style={textStyle}>
                        Pneumonia is a form of acute respiratory infection that affects the lungs, making it difficult to breathe. It can be caused by viruses, bacteria, or fungi and can range in seriousness from mild to life-threatening. It is especially dangerous for infants, children, and the elderly.
                    </p>
                    <img src={xray} alt="Pneumonia" style={imageStyle} />
                </section>

                <section style={sectionStyles}>
                    <h2 style={titleStyles}>How is Pneumonia Detected?</h2>
                    <p style={textStyle}>
                        Traditionally, pneumonia is diagnosed by a combination of clinical symptoms and a chest X-ray. However, advancements in artificial intelligence have begun to provide new tools for detecting pneumonia more quickly and accurately, using techniques such as machine learning models trained on large datasets of X-ray images.
                    </p>
                    <img src={one} alt="Detection Technology" style={imageStyle} />
                </section>

                <section style={sectionStyles}>
                    <h2 style={titleStyles}>Importance of Early Detection</h2>
                    <p style={textStyle}>
                    An autoencoder is a type of neural network that learns to compress and then reconstruct its input data. It has two main parts: an encoder that reduces the input to a smaller, dense representation, and a decoder that attempts to generate the original input from this compressed version. The goal is to capture the most important features of the data in the compressed representation and use it to minimize the difference between the original and reconstructed data. Autoencoders are useful for dimensionality reduction, denoising, and feature learning.
                    </p>
                   
                </section>
            </div>
        </div>
    );
};

export default AboutPneumonia;

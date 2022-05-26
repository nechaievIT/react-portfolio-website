import React from 'react'
import about from '../img/about.png'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4><span>Lorem Ipsum</span></h4>

                <p className="about-rext">
                    Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumvLorem IpsumLorem IpsumLorem Ipsum
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Country</p>
                        <p>City</p>
                    </div>
                    <div className="right-section">
                        <p>: Yurii Nechaiev</p>
                        <p>: 21</p>
                        <p>: Ukrainian</p>
                        <p>: English, Russian, Ukranian</p>
                        <p>: Ukraine</p>
                        <p>: Kiev</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection;

import React from 'react'

function ServicesSection({ image, title, text }) {
    return (
        <div className="ServicesSection">
            <div className="service">
                <div className="service-content">
                    <img src={image} alt="" />
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection;

import React from 'react'

function MenuItems({ menuItems }) {
    return (
        <div className="portfolios">
            {
                menuItems.map((item) => {
                    return <div className="portfolio" key={item.id}>
                        <div className="image-data">
                            <img src={item.image} alt="" />
                            <ul className="hover-items">
                                <li>
                                    <a href={item.link}>{item.icon}</a>
                                    <a href={item.link}>{item.icon}</a>
                                </li>
                            </ul>
                        </div>
                        <h5>
                            {item.title}
                        </h5>
                        <p>Placeholder paragraph</p>
                    </div>
                })
            }

        </div>
    )
}

export default MenuItems;

import React from 'react'
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import Portfolios from '../Components/allPortfolios';
import { useState } from 'react';



 const allCatogories =['ALL', ...new Set(Portfolios.map(item => item.category))];

function PortfoliosPage() {

    const[categories, setCategories] = useState(allCatogories);
    const [menuItems, setMenuItems] = useState(Portfolios);
    
    const filter = (category) => {
        if (category === 'ALL') {
            setMenuItems(Portfolios)
            return;
        }
        const filteredData = Portfolios.filter((item) => {
            return item.category === category;
        })
        setMenuItems(filteredData)
    }

    return (
        <div className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolios'} span={'Portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories}/>
                <MenuItems menuItems={menuItems} />
            </div>
        </div>
    )
}

export default PortfoliosPage;

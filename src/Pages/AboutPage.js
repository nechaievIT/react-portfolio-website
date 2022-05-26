import React from 'react'
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.png'
import gamedev from '../img/gamedev.png'
import mobile from '../img/mobile.png'



function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'CSS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={' Web Design'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Typescript'} progress={'5%'} width={'5%'} />
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web design'} text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} />
                <ServicesSection image={gamedev} title={'Game Dev'} text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} />
                <ServicesSection image={mobile} title={'Mobile Apps'} text={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'} />


            </div>
        </div>
    )
}

export default AboutPage;

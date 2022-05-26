import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.png';
import email from '../img/email.png';
import location from '../img/location.png';
import Title from '../Components/Title';



function ContactsPage() {
    return (
        <div>
            <div className="title">
                <Title title={'Contacts'} span={'Contacts'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325515.68161572196!2d30.25251015734255!3d50.402136755748614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1616436032737!5m2!1sru!2sua" width="600" height="450" style={{ border: 0 }} allowfullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'099 266 15 52'} text2={'+38 099  266 15 52'} title={'Phone'} />
                    <ContactItem icon={email} text1={'nechaiev.it@gmail.com'} text2={'+38 099  266 15 52'} title={'Email'} />
                    <ContactItem icon={location} text1={'Kiev'} text2={'Ukraine'} title={'Location'} />
                </div>

            </div>
        </div>
    )
}

export default ContactsPage;

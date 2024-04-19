import React from 'react';
import './EndPage.style.scss';
import {RiRobot2Line} from "react-icons/ri";
import {FaFacebookF, FaInstagram, FaTelegramPlane} from "react-icons/fa";


function EndPage(props) {
  return (
    <section id={'information-section'}>
      <div className='information-section__main-content'>
        <div className='information-section__main-content__text-wrapper'>
          <div className='information-section__main-content__text-box'>
            Нажми на робота, що перейти до форми реєстрації 👇
          </div>
          <div className='information-section__main-content__icon-link'>
            <a href="https://forms.gle/visNrfF53YPETeLJ9">
              <RiRobot2Line id="robot-link-icon"/>
            </a>
          </div>
        </div>
      </div>
      <footer>
        <div id="location-text">
          <span>Місце проведення: м. Кропивницький, вул. Т. Шевченка 1, ЦДУ імені В. Винниченка,</span>
          <span> спортивна зала, семи  поверхового корпусу</span>
        </div>
        <div style={{width: `50%`, height: '1.25px', background: 'gray'}}/>
        <div className="contact-icons-container">
          <a href="#">
            <FaInstagram className="contact-icon"/>
          </a>
          <a href="#">
            <FaTelegramPlane className="contact-icon"/>
          </a>
          <a href="#">
            <FaFacebookF className="contact-icon"/>
          </a>
        </div>
      </footer>
    </section>
  );
}

export default EndPage;
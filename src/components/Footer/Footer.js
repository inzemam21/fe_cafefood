import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub,faFacebook,faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import React from 'react';
import './Footer.css'

const Footer = (props) => {

    const renderFooter = () => (
        <footer className='footer'>
          <div className='container'>
             <div className='row justify-content-center flex wrap'>
                <section className='col-md-4 footer-column'>
                   <p>Cafefood</p>
                   <p>Copyright &copy; 2022</p>
                </section>
                
                <section className='col-md-4 footer-column'>
                <ul>
                  <li><a href='/delivery'>Delivery Policy</a></li>
                  <li><a href='/returns'>Returns</a></li>
                  <li><a href='/support'>Support</a></li>
                </ul>
                </section>
                <section className='col-md-4 footer-column'>
                   <div>
                     <a href='/git#'>
                       <FontAwesomeIcon icon={faGithub} />
                     </a>
                     <a href='/twt#'>
                     <FontAwesomeIcon icon={faTwitter} />
                     </a>
                     <a href='/fb#'>
                     <FontAwesomeIcon icon={faFacebook} />
                     </a>
                     <a href='lnk/#'>
                     <FontAwesomeIcon icon={faLinkedin} />
                     </a>
                     </div>
                </section>
             </div>
            </div>
          </footer>
    
    )
  return <>{renderFooter()}</>;
};

export default Footer;

import React, { useState, useEffect } from 'react'
import { CCol, CRow, CImage, CFooter } from '@coreui/react'

import logo from 'src/assets/brand/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import './footer.css'
import facebook from 'src/assets/brand/facebook.png'
import instagram from 'src/assets/brand/instagram1.png'
import linkedin from 'src/assets/brand/Linkedin.png'
import twitter from 'src/assets/brand/Twitter1.png'
import youtube from 'src/assets/brand/Youtube.png'
import {
  faEnvelope,
  faMobileScreen,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'

import { FaAngleRight } from 'react-icons/fa'


const Footer = () => {
  let year = new Date().getFullYear()
 

  return (
    <>
      <footer id="footer1">
        <div className="footer-top" style={{backgroundColor:'#241520'}}>
          <CRow className="mx-2">
            <div className="col-lg-4 col-md-6 footer-info">
              <div className="adds">
                <div className="o mb-4">
                  <img
                    src={logo}
                    alt=""
                    className="oimg"
                  />
                </div>
              </div>
              <div className="slogan">
                <span>
                  The largest non-profit association of Chief Information Officers in India.
                </span>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <ul>
                <li>
                  <h4 style={{ color: 'rgb(178,0,0)' }}>Pages</h4>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={"#"}>
                    {' '}
                    About us{' '}
                  </a>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={"#"}>
                    {' '}
                    Membership{' '}
                  </a>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={"#"}>
                    {' '}
                    Team{' '}
                  </a>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={"#"}>
                    {' '}
                    Events{' '}
                  </a>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={`/#/notice`}>
                    {' '}
                    Notice
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <ul>
                <li>
                  <h4 style={{ color: 'rgb(178,0,0)' }}>Useful Links</h4>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={`/#/disclaimer`}>
                    {' '}
                    Disclaimer
                  </a>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={`/#/terms`}>
                    {' '}
                    Terms & Conditions{' '}
                  </a>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={`/#/policy`}>
                    {' '}
                    Privacy Policy{' '}
                  </a>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={"#"}>
                    {' '}
                    FAQs{' '}
                  </a>
                </li>
                <li>
                  <FaAngleRight />
                  <a style={{ color: 'black', textDecoration: 'None' }} href={"#"}>
                    {' '}
                    Contact Us{' '}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="n">
                <div className="mailsn">
                  <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                </div>

                <div className="ftaddrss">
                  
                    <>
                      C/o Empire Business Centre 414,
                      <br /> Senapati Bapat Marg,
                      <br /> Lower Parel, Mumbai - 400013
                    </>
                
                </div>
              </div>
              <div className="e">
                <div className="mobis">
                  <FontAwesomeIcon icon={faMobileScreen}></FontAwesomeIcon>
                </div>
                <div className="mobin">
                  { <>1256-874-956</>}
                </div>
              </div>
              <div className="onee">
                <div className="mailsn">
                  {' '}
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className="mailss">
                  { <>helpdesk@cioklub.com</>}
                </div>
              </div>

              <div className="sm">
                <CImage
                  src={facebook}
                  className="sm1"
                  onClick={() => window.open('https://www.facebook.com/klubcio/')}
                ></CImage>
                <CImage
                  src={linkedin}
                  className="sm1"
                  onClick={() => window.open('https://www.linkedin.com/company/13313851/admin/')}
                ></CImage>
                <CImage
                  src={instagram}
                  className="sm1"
                  onClick={() => window.open('https://www.instagram.com/cioklub/')}
                ></CImage>
                <CImage
                  src={twitter}
                  className="sm1"
                  onClick={() => window.open('https://twitter.com/cioklub1')}
                ></CImage>
                <CImage
                  src={youtube}
                  className="sm1"
                  onClick={() =>
                    window.open('https://www.youtube.com/channel/UCmshJHEFtR41EKrB3fpVI6g')
                  }
                ></CImage>
              </div>
            </div>
          </CRow>
        </div>

        <div className="last111" style={{backgroundColor:'#160813'}}>
          <div className="last" >
            <CCol sm={12} style={{backgroundColor:'#160813'}}>
              <CFooter className="" style={{backgroundColor:'#160813'}}>
                <div>
                  <span className="ms-1"><b>&copy; {year} Salon V0.1</b></span>
                </div>
                

                <div className="ms-auto">
                  <span className="me-1"><b>Designed & Developed by</b></span>
                  <a href="https://www.indeftts.com" target="_blank" rel="noopener noreferrer">
                  {/* <b> InDeft Technology Solutions Pvt. Ltd.</b>  */}
                  </a>
                </div>
              </CFooter>
            </CCol>
          
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer

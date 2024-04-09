import React, { useState, useEffect, useContext } from 'react'
import { CForm, CFormInput, CCol, CFormCheck, CAvatar, CSpinner } from '@coreui/react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from 'src/assets/brand/logo.png'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icon } from '@iconify/react'
import './header.css'

import {
  faSquareArrowUpRight,
  faAngleRight,
  faEnvelope,
  faMobileScreen,
  faHome,
  faCircleChevronLeft,
  faCircleChevronRight,
  faBuilding,
  faPhone,
  faArrowUp,
  faSquareUp,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import baseURl from 'src/utils/baseurl'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import useAxios from 'src/utils/newuseAxios'
import useAxios1 from 'src/utils/useAxios'
import Card from 'react-bootstrap/Card'
import { cibCircle, cibRoundcube } from '@coreui/icons'
import avatar8 from 'src/assets/images/img1.jpg'
import AuthContext from 'src/context/AuthContext'

const Header = () => {
  let api = useAxios()
  let api1 = useAxios1()
  let { authTokens, logoutUser } = useContext(AuthContext)
  let baseurl = baseURl()
  let [notes, setNotes] = useState()
  let [notes1, setNotes1] = useState([])
  let [notes2, setNotes2] = useState([])
  let [notes3, setNotes3] = useState([])
  let [notes4, setNotes4] = useState([])
  let [notes5, setNotes5] = useState([])
  const [activeKey, setActiveKey] = useState()
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState()

  useEffect(() => {
    getcurrenturl()
  }, [])
  let getcurrenturl = async () => {
    // console.log(typeof window.location.href)
    // console.log(typeof encoded13)
    if (window.location.href.includes('/#/')) {
      setActiveKey(7)
    }
  }

  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let currentDate = `${day}-${month}-${year}`

  useEffect(() => {
    getcreate_project()
  }, [])

  let getcreate_project = async () => {
    if (window.location.href.includes('#')) {
      setActiveKey(1)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(2)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(3)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(4)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(5)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(5)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(5)
    }
    if (window.location.href.includes('/eventdetails')) {
      setActiveKey(5)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(6)
    }
    if (window.location.href.includes('tech_details')) {
      setActiveKey(6)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(7)
    }
    if (window.location.href.includes('pages')) {
      setActiveKey(7)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(8)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(9)
    }
    if (window.location.href.includes('login')) {
      setActiveKey(10)
    }
    if (window.location.href.includes('registration')) {
      setActiveKey(11)
    }
    if (window.location.href.includes('#')) {
      setActiveKey(11)
    }
  }

  // const navItems = document.querySelectorAll('.navitem1');

  // navItems.forEach(item => {
  //   item.addEventListener('click', () => {
  //     navItems.forEach(navItem => {
  //       navItem.classList.remove('active');
  //     });
  //     item.classList.add('active');
  //   });
  // });
  // get the current page URL
  const currentPage = window.location.href

  // set the active item based on the current page URL
  function setActiveItem() {
    const navItems = document.querySelectorAll('.navitem1')
    navItems.forEach((navItem) => {
      const navItemURL = navItem.href
      if (currentPage === navItemURL) {
        navItem.classList.add('active')
      } else {
        navItem.classList.remove('active')
      }
    })
  }

  // call the setActiveItem function on page load and on each click
  setActiveItem()

  const navItems = document.querySelectorAll('.navitem1')

  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navItems.forEach((navItem) => {
        navItem.classList.remove('active')
      })
      item.classList.add('active')
    })
  })

  let base100 = '/#/'
  let uri100 = 'chapteradmin/profileupdate/'
  let encoded100 = window.btoa(uri100)

  return (
    <>
      <div className="cio-header-container">
        <nav>
          <div className="cio-header-logo">
            <a className="navbar-brand" href="#">
              <img
                src={logo}
                // alt="..."
                height="40vh"
                className="navbar-brand-img logoinfo"
              />
            </a>
          </div>
          <input type="checkbox" id="click" />
          <label for="click" className="cio-header-menu-btn">
            <FontAwesomeIcon icon={faBars} color="#B20000" className="d-xl-none d-block" />
          </label>

          <ul>
            <li>
              <a href={'#'} class="navitem1">
                <FontAwesomeIcon icon={faHome} size="medium" />
              </a>
            </li>

            <li>
              <a href={'/#/aboutus'} class="navitem1">
                ABOUT US
              </a>
            </li>
            <li>
              <a href={'/#/contactus'} class="navitem1">
                CONTACT US
              </a>
            </li>
            {authTokens ? (
              <>
                <li class="team-dropdown">
                  <a class="navitem1">
                    {loading ? (
                      notes?.profile_photo ? (
                        <CAvatar src={baseurl + notes?.profile_photo} size="md" />
                      ) : (
                        <CAvatar src={avatar8} size="md" />
                      )
                    ) : (
                      <CSpinner color="danger" />
                    )}
                  </a>
                  <div class="team-dropdown-content">
                    <a href={'#'} class="navitem1">
                      Dashboard
                    </a>
                    <a href="#" onClick={logoutUser} class="navitem1">
                      Logout
                    </a>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a href="/#/login" class="navitem1">
                    LOG IN
                  </a>
                </li>
                <li>
                  <a href="/#/registration" class="navitem1">
                    SIGN UP
                  </a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </>
  )
}
export default Header

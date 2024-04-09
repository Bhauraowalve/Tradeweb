import React, { useEffect, useState, useContext } from 'react'
import {
  CCol,
  CButton,
  CImage,
  CCard,
  CRow,
  CModal,
  CCardTitle,
  CCardImage,
  CCardBody,
  CCardText,
  CCardFooter,
  CFormCheck,
  CCardImageOverlay,
  CSpinner,
  CContainer,
  CModalHeader,
  CModalBody,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CModalTitle,
} from '@coreui/react'
import Carousel from 'react-grid-carousel'
import './AboutUs.css'
import Footer from 'src/layout/footer'
import Header from 'src/layout/header'
import customer_sec from 'src/assets/images/Team section (1).png'
import aboutusBanner from 'src/assets/brand/About Us Banner.png'
import genuine100 from 'src/assets/brand/100% Genuine.png'
import beautyExperts from 'src/assets/brand/Beauty Experts.png'
import greatServices from 'src/assets/brand/Great Services.png'
import line from 'src/assets/brand/Line.png'
import aboutusFirstImage from 'src/assets/brand/aboutusFirstImage.png'

const Index = () => {
  const [loading, setLoading] = useState(true)

  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        borderRadius: '50%',
        marginTop: '40px',
        height: isActive ? '8px' : '8px',
        width: isActive ? '8px' : '8px',
        background: isActive ? 'blue' : 'grey',
      }}
    ></span>
  )

  return (
    <div className="main-index">
      <Header />
      {loading ? (
        <>
          <CRow className="contactus_banner">
            <img
              src={aboutusBanner}
              class="w-100 shadow-1-strong rounded mb-4 contact-us-img"
              alt="Boat on Calm Water"
            />
            <div className={`position-absolute text-center w-100`}>
              <CRow className="aboutus_banner_out">
                <CCol>
                  <p className="bannerTitle">SHORT STORY ABOUT US</p>
                  <h2 className="bannerText">
                    The big story behind, our
                    <br />
                    beautyness center
                  </h2>
                  <div className="ContactUs_button">
                    <CButton style={{ background: '#BA7894', color: 'white' }}>CONTACT US</CButton>
                  </div>
                </CCol>
              </CRow>
            </div>
          </CRow>
          <CRow className="m-5">
            <CCol lg={3}></CCol>
            <CCol className="ourValuesRow">
              <p className="ourValues">OUR VALUES</p>
              <h2 className="ourValuesText">The work values we thrive for</h2>
              <CRow className="ourValuesdet">
                <div className="d-flex">
                  <CCol md={2}>
                    <img className="ourValuesIcons" src={beautyExperts} alt="Boat on Calm Water" />
                  </CCol>
                  <CCol md={10}>
                    <h4 className="usTitle">Beauty Experts</h4>
                    <p className="usText">
                      The majority have suffered alteration in some form, buying to injected humour,
                      or randomised words which desktop publishing packages.
                    </p>
                  </CCol>
                </div>
                <img className="line" src={line} alt="Boat on Calm Water" />
                <div className="d-flex">
                  <CCol md={2}>
                    <img className="ourValuesIcons" src={greatServices} alt="Boat on Calm Water" />
                  </CCol>
                  <CCol md={10}>
                    <h4 className="usTitle">Great Services</h4>
                    <p className="usText">
                      The majority have suffered alteration in some form, buying to injected humour,
                      or randomised words which desktop publishing packages.
                    </p>
                  </CCol>
                </div>
                <img className="line" src={line} alt="Boat on Calm Water" />
                <div className="d-flex">
                  <CCol md={2}>
                    <img className="ourValuesIcons" src={genuine100} alt="Boat on Calm Water" />
                  </CCol>
                  <CCol md={10}>
                    <h4 className="usTitle">100% Genuine</h4>
                    <p className="usText">
                      The majority have suffered alteration in some form, buying to injected humour,
                      or randomised words which desktop publishing packages.
                    </p>
                  </CCol>
                </div>
              </CRow>
            </CCol>
            <CCol lg={3}></CCol>
          </CRow>
          {/* <CRow className="aboutUsRow my-5">
            <CCol lg={3}></CCol>
            <CCol className="aboutUsCol">
              <div className="d-flex classbg">
                <div className="aboutImage1">
                  <img
                    src={aboutusFirstImage}
                    // class="w-100 shadow-1-strong rounded mb-4 contact-us-img"
                    alt="Boat on Calm Water"
                  />
                </div>
                <div className="aboutcontent1">
                  <h5 className="formTitle">SCHEDULE YOUR PRESENCE</h5>
                  <h2 className="formHeading">Get in touch</h2>
                  <p className="formText">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </CCol>
            <CCol lg={3}></CCol>
          </CRow> */}
          <CRow className="customer_says">
            <CRow className="my-2">
              <CCol lg={3}></CCol>
              <CCol lg={6} sm={6} className="mx-2">
                <p style={{ textAlign: 'center' }}>
                  Testimonial
                  <br />
                  <strong style={{ fontSize: '38px' }}>What our customer says...</strong>
                  {/* <br /> */}
                  {/* Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque */}
                </p>
              </CCol>

              <CCol lg={3}></CCol>
            </CRow>
            <CContainer fluid className="">
              <CRow sm={12} md={12} lg={12} xl={12} className="mx-2">
                <CCol sm={12} md={12} lg={12} xl={12} style={{ marginBottom: '2%' }}>
                  <Carousel
                    showDots={true}
                    dot={MyDot}
                    autoplay={window.innerWidth <= 768}
                    hideArrow={false}
                    cols={1}
                    rows={1}
                    loop
                  >
                    <Carousel.Item>
                      <CCard className="rounded-5">
                        <CCardImage src={customer_sec} alt="Boat on Calm Water" />
                      </CCard>
                    </Carousel.Item>
                    <Carousel.Item>
                      <CCard className="rounded-5">
                        <CCardImage src={customer_sec} alt="Boat on Calm Water" />
                      </CCard>
                    </Carousel.Item>
                  </Carousel>
                </CCol>
              </CRow>
            </CContainer>
          </CRow>
        </>
      ) : (
        <CSpinner className="Spinner" color="danger" />
      )}
      <Footer />
    </div>
  )
}

export default Index

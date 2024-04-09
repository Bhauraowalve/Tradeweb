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
import './Contactus.css'
import Footer from 'src/layout/footer'
import Header from 'src/layout/header'
import contactusBanner from 'src/assets/brand/Contact Banner.png'
import contactusFirstImageBackground from 'src/assets/brand/contactusFirstImageBackground.png'
import contactusFirstImageMain from 'src/assets/brand/contactusFirstImageMain.png'
import addressContactus from 'src/assets/brand/addressContactus.png'
import mailContactus from 'src/assets/brand/mailContactus.png'
import callContactus from 'src/assets/brand/callContactus.png'
import userSVG from 'src/assets/brand/user.svg'
import mailSVG from 'src/assets/brand/mail.svg'
import phoneSVG from 'src/assets/brand/phone.svg'
import bookSVG from 'src/assets/brand/book-open.svg'
import editSVG from 'src/assets/brand/edit.svg'

const Index = () => {
  const [loading, setLoading] = useState(true)

  return (
    <div className="main-index">
      <Header />
      {loading ? (
        <>
          <CRow className="contactus_banner">
            <img
              src={contactusBanner}
              class="w-100 shadow-1-strong rounded mb-4 contact-us-img"
              alt="Boat on Calm Water"
            />
            <div className={`position-absolute text-center w-100`}>
              <CRow className="contactus_banner_out">
                <CCol>
                  <p className="bannerTitle">GET IN TOUCH WITH US</p>
                  <h2 className="bannerText">
                    We Are Ready To Assist <br />
                    You In 24x7
                  </h2>
                </CCol>
              </CRow>
            </div>
          </CRow>
          <CRow className="mt-5">
            <CCol lg={2}></CCol>
            <CCol lg={4}>
              <img
                src={contactusFirstImageBackground}
                class="contactusFirstImageBack"
                alt="Boat on Calm Water"
              />
              <img
                src={contactusFirstImageMain}
                class="contactusFirstImage"
                alt="Boat on Calm Water"
              />
            </CCol>
            <CCol className="contactDetails" lg={4}>
              <h5 className="contactDetailsTitle">Get in Touch!</h5>
              <h2 className="contactDetails1stText">
                We are here to help
                <br />
                you always...
              </h2>
              <p class="contactDetails2ndText">
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, buying to many desktop publishing packages.
              </p>
              <CRow className="contdet">
                <div className="d-flex">
                  <CCol md={2}>
                    <img className="contactIcons" src={addressContactus} alt="Boat on Calm Water" />
                  </CCol>
                  <CCol md={10}>
                    <h4 className="usTitle">Visit Us :</h4>
                    <p className="usText">Mariendalsvej 50D 2 2000 Frederiksberg.</p>
                  </CCol>
                </div>
                <div className="d-flex">
                  <CCol md={2}>
                    <img className="contactIcons" src={mailContactus} alt="Boat on Calm Water" />
                  </CCol>
                  <CCol md={10}>
                    <h4 className="usTitle">Drop Us :</h4>
                    <p className="usText">support@beautyness.com</p>
                  </CCol>
                </div>
                <div className="d-flex">
                  <CCol md={2}>
                    <img className="contactIcons" src={callContactus} alt="Boat on Calm Water" />
                  </CCol>
                  <CCol md={10}>
                    <h4 className="usTitle"> Call Us :</h4>
                    <p className="usText">Call: 1-800-123-9999</p>
                  </CCol>
                </div>
              </CRow>
            </CCol>
          </CRow>
          <CRow>
            <CCol lg={2}></CCol>
            <CRow className="container mt-5">
              <CCol className="containerContent mt-5 text-center">
                <h5 className="formTitle">SCHEDULE YOUR PRESENCE</h5>
                <h2 className="formHeading">Get in touch</h2>
                <p className="formText">
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form.
                </p>
                <CCard className="formCard mb-5">
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">
                      <img
                        src={userSVG}
                        // class="w-100 shadow-1-strong rounded mb-4 contact-us-img"
                        alt="Boat on Calm Water"
                      />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">
                      <img
                        src={mailSVG}
                        // class="w-100 shadow-1-strong rounded mb-4 contact-us-img"
                        alt="Boat on Calm Water"
                      />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">
                      <img
                        src={phoneSVG}
                        // class="w-100 shadow-1-strong rounded mb-4 contact-us-img"
                        alt="Boat on Calm Water"
                      />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Phone"
                      aria-label="Phone"
                      aria-describedby="basic-addon1"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">
                      <img
                        src={bookSVG}
                        // class="w-100 shadow-1-strong rounded mb-4 contact-us-img"
                        alt="Boat on Calm Water"
                      />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Service You Need"
                      aria-label="Service You Need"
                      aria-describedby="basic-addon1"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText id="basic-addon1">
                      <img
                        src={editSVG}
                        // class="w-100 shadow-1-strong rounded mb-4 contact-us-img"
                        alt="Boat on Calm Water"
                      />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Any Note for Us"
                      aria-label="Any Note for Us"
                      aria-describedby="basic-addon1"
                    />
                  </CInputGroup>
                  <div className="d-grid gap-2">
                    <CButton style={{ background: '#422A3C', color: 'white' }}>Submit</CButton>
                  </div>
                </CCard>
              </CCol>
            </CRow>
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

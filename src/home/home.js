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
  CModalTitle,
} from '@coreui/react'
import Footer from 'src/layout/footer'
import Header from 'src/layout/header'
import image1 from 'src/assets/images/Section 1.png'
import './home.css'
import Carousel from 'react-grid-carousel'
import carsolimage1 from 'src/assets/images/Frame 1000004328.png'
import carsolimage2 from 'src/assets/images/Frame 1000004325.png'
import carsolimage3 from 'src/assets/images/Frame 1000004326.png'
import carsolimage4 from 'src/assets/images/Frame 1000004327.png'
import carsolimage5 from 'src/assets/images/Frame 1000004329.png'
import carsolimage6 from 'src/assets/images/Frame 1000004330.png'
import gallery1 from 'src/assets/images/Rectangle 7.png'
import gallery2 from 'src/assets/images/Rectangle 11.png'
import gallery3 from 'src/assets/images/Rectangle 10.png'
import gallery4 from 'src/assets/images/Rectangle 11 (1).png'
import gallery5 from 'src/assets/images/Rectangle 10 (1).png'
import re_gallery1 from 'src/assets/images/Rectangle 11 (2).png'
import re_gallery2 from 'src/assets/images/Rectangle 11 (3).png'
import re_gallery3 from 'src/assets/images/Rectangle 11 (4).png'
import re_gallery4 from 'src/assets/images/Rectangle 11 (5).png'
import customer_sec from 'src/assets/images/Team section (1).png'
import newslatter_img from 'src/assets/images/image 10.png'
import { HmacMD5 } from 'crypto-js'

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
          {/* Write code here  */}

          <CRow className="home_banner">
            <img
              src={image1}
              class="w-100 shadow-1-strong rounded mb-4 contact-us-img"
              alt="Boat on Calm Water"
            />
            <div className={`position-absolute text-left w-100`}>
              <CRow className="home_banner_out">
                <CCol md={6}>
                  <p>Hair Salon, Masseuse, Beauty Salon</p>
                  <p className="heding">Find a service close to you</p>
                  <p>
                    There are many variation of passages are Ipsum available, majority have suffered
                    alteration in some form.
                  </p>
                </CCol>
                <CCol md={7}>
                  <CCard className="rounded-pill home_banner_serach">
                    <CCol sm={4}></CCol>
                    <CCol sm={4}></CCol>
                    <CCol sm={4}></CCol>
                  </CCard>
                </CCol>
              </CRow>
            </div>
          </CRow>

          <CRow className="mb-3">
            <CContainer fluid className="">
              {/* <CRow md={12} className="mt-4 ">
                <CCol sm={12}> */}
              <CRow sm={12} md={12} lg={12} xl={12} className="">
                <CCol sm={12} md={12} lg={12} xl={12} style={{ marginBottom: '2%' }}>
                  <Carousel
                    showDots={true}
                    dot={MyDot}
                    autoplay={window.innerWidth <= 768}
                    hideArrow={false}
                    cols={6}
                    rows={1}
                    loop
                  >
                    <Carousel.Item>
                      <img src={carsolimage1} alt="Boat on Calm Water" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={carsolimage2} alt="Boat on Calm Water" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={carsolimage3} alt="Boat on Calm Water" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={carsolimage4} alt="Boat on Calm Water" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={carsolimage5} alt="Boat on Calm Water" />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img src={carsolimage6} alt="Boat on Calm Water" />
                    </Carousel.Item>
                  </Carousel>
                </CCol>
              </CRow>
            </CContainer>
          </CRow>
          <CRow className="my-2 gallery_section">
            <CCol lg={3}></CCol>
            <CCol lg={6} sm={6} className="">
              <p style={{ textAlign: 'center' }}>
                <strong>We are Experienced in making you very Beautiful</strong>
                <br />
                Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque
              </p>
            </CCol>

            <CCol lg={3}></CCol>
          </CRow>
          <CRow className="my-2">
            <CCol lg={1}></CCol>
            <CCol lg={10} sm={6} md={6} className="mb-4">
              <CRow>
                <CCol sm={6} lg={4}>
                  <CCardImage
                    src={gallery1}
                    class="w-100  my-2 shadow-1-strong rounded contact-us-img"
                    alt="Boat on Calm Water"
                  />
                </CCol>
                <CCol sm={6} lg={4}>
                  <CCardImage
                    src={gallery2}
                    class="w-100 my-2 shadow-1-strong rounded contact-us-img"
                    alt="Boat on Calm Water"
                  />
                  <CCardImage
                    src={gallery3}
                    class="w-100  my-2 shadow-1-strong rounded contact-us-img"
                    alt="Boat on Calm Water"
                  />
                </CCol>
                <CCol sm={6} lg={4}>
                  <CCardImage
                    src={gallery4}
                    class="w-100  my-2 shadow-1-strong rounded contact-us-img"
                    alt="Boat on Calm Water"
                  />
                  <CCardImage
                    src={gallery5}
                    class="w-100  my-2 shadow-1-strong rounded contact-us-img"
                    alt="Boat on Calm Water"
                  />
                </CCol>
              </CRow>
            </CCol>
            <CCol lg={1}></CCol>
          </CRow>

          {/* Recommanded section  */}

          <CRow className="recommanded_section">
            <CRow className="my-2">
              <CCol lg={3}></CCol>
              <CCol lg={6} sm={6} className="mx-2">
                <p style={{ textAlign: 'center' }}>
                  Our Services
                  <br />
                  <strong>Recommanded</strong>
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque
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
                    cols={4}
                    rows={1}
                    loop
                  >
                    <Carousel.Item>
                      <CCard className="rounded-4">
                        <CCardImage src={re_gallery1} alt="Boat on Calm Water" />
                        <CCardBody>
                          <CCardTitle>ABC</CCardTitle>
                        </CCardBody>
                      </CCard>
                    </Carousel.Item>
                    <Carousel.Item>
                      <CCard className="rounded-4">
                        <CCardImage src={re_gallery2} alt="Boat on Calm Water" />
                        <CCardBody>
                          <CCardTitle>ABC</CCardTitle>
                        </CCardBody>
                      </CCard>
                    </Carousel.Item>
                    <Carousel.Item>
                      <CCard className="rounded-4">
                        <CCardImage src={re_gallery3} alt="Boat on Calm Water" />
                        <CCardBody>
                          <CCardTitle>ABC</CCardTitle>
                        </CCardBody>
                      </CCard>
                    </Carousel.Item>
                    <Carousel.Item>
                      <CCard className="rounded-4">
                        <CCardImage src={re_gallery4} alt="Boat on Calm Water" />
                        <CCardBody>
                          <CCardTitle>ABC</CCardTitle>
                        </CCardBody>
                      </CCard>
                    </Carousel.Item>
                    <Carousel.Item>
                      <CCard className="rounded-4">
                        <CCardImage src={re_gallery1} alt="Boat on Calm Water" />
                        <CCardBody>
                          <CCardTitle>ABC</CCardTitle>
                        </CCardBody>
                      </CCard>
                    </Carousel.Item>
                    <Carousel.Item>
                      <CCard className="rounded-4">
                        <CCardImage src={re_gallery2} alt="Boat on Calm Water" />
                        <CCardBody>
                          <CCardTitle>ABC</CCardTitle>
                        </CCardBody>
                      </CCard>
                    </Carousel.Item>
                  </Carousel>
                </CCol>
              </CRow>
            </CContainer>
          </CRow>

          {/* What our customer says  */}

          <CRow className="customer_says">
            <CRow className="my-2">
              <CCol lg={3}></CCol>
              <CCol lg={6} sm={6} className="mx-2">
                <p style={{ textAlign: 'center' }}>
                  Testimonial
                  <br />
                  <strong>What our customer says...</strong>
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

          {/* section */}
          <>
            <CCard
              className="w-100 py-3 p-md-5 text-center mt-1"
              style={{ height: '', backgroundColor: '#rgb(8,10,12)' }}
            >
              <CRow className="newslatter_section">
                <CCol md={6}>
                  <img
                    className="rounded-5 newslatter_img"
                    src={newslatter_img}
                    alt="Boat on Calm Water"
                  />
                </CCol>
                <CCol md={6}>
                  <p className="mt-5">
                    <strong>Subscribe to newsletter</strong>
                  </p>
                  <p>
                    Sign up for our newsletter to stay up-to-date on the latest promotions,
                    discounts, and new features releases.
                  </p>

                  <CButton shape="rounded-pill" color="drak" variant="ghost" block>
                    Subscribe
                  </CButton>
                </CCol>
              </CRow>
            </CCard>
          </>
        </>
      ) : (
        <CSpinner className="Spinner" color="danger" />
      )}
      <Footer />
    </div>
  )
}

export default Index

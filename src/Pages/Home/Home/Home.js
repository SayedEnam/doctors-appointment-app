import React from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navigation from '../../Shared/Navigations/Navigation'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <AppointmentBanner></AppointmentBanner>
      <Footer></Footer>
    </div>
  )
}

export default Home
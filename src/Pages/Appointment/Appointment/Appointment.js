import React, { useState } from 'react'
import Footer from '../../Shared/Footer/Footer'
import Navigation from '../../Shared/Navigations/Navigation'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader'
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments'

const Appointment = () => {
    const [date, setDate] = useState(new Date());
  return (
      <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
            <Footer></Footer>
      </div>

  )
}

export default Appointment
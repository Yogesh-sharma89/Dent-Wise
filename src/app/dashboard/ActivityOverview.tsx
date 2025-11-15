import React from 'react'
import DentalHealthOverview from './DentalHealthOverview'
import NextAppointment from './NextAppointment'

const ActivityOverview = () => {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 my-10'>

        <DentalHealthOverview/>
        <NextAppointment/>
      
    </div>
  )
}

export default ActivityOverview

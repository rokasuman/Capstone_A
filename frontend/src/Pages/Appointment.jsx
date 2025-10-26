import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors,currencySymbol } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = () => {
    const doctor = doctors.find(doc => doc._id === docId)
    setDocInfo(doctor)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  if (!docInfo) {
    return <p className="text-center mt-10 text-gray-500">Loading doctor info...</p>
  }

  return (
    <div className="max-w-[900px] mx-auto px-6 py-10">
      <div className="flex flex-col md:flex-row gap-6 bg-white shadow-lg rounded-2xl p-6">
        {/* Image */}
        <div className="md:w-1/3">
          <img
            src={docInfo.image}
            alt={docInfo.name}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:w-2/3 flex flex-col gap-4">
          {/* Name & Verified */}
          <p className="text-2xl font-semibold flex items-center gap-2">
            {docInfo.name}
            <img src={assets.verified_icon} alt="Verified" className="w-6 h-6" />
          </p>

          {/* Degree & Speciality */}
          <div className="flex items-center gap-4">
            <p className="text-gray-700">{docInfo.degree} - {docInfo.speciality}</p>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm">
              {docInfo.experience} yrs
            </button>
          </div>

          {/* About */}
          <div className="mt-4">
            <p className="text-lg font-semibold flex items-center gap-2">
              About <img src={assets.info_icon} alt="Info" className="w-5 h-5" />
            </p>
            <p className="text-gray-600 mt-2">{docInfo.about}</p>
          </div>
          <p className='font-medium mt-4'>
            Appointment fees : <span className='text-green-700'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Appointment

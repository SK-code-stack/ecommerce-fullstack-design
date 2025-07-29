import React from 'react'
import industryPic from '../../assets/services/industry.png'
import customizePic from '../../assets/services/customize.png'
import shipping from '../../assets/services/shipping.png'
import monitoring from '../../assets/services/monitoring.png'
// icons
import search from '../../assets/services/search.png'
import vector from '../../assets/services/vector.png'
import send from '../../assets/services/send.png'
import security from '../../assets/services/security.png'
export default function SectionServices() {

  const data = [
      {
        id : "1",
        img : industryPic,
        icon : search,
        disc : "Source from Industry Hubs"
      },
      {
        id : "2",
        img : customizePic,
        icon : vector,
        disc : "Customize Your Products"
      },
      {
        id : "3",
        img : shipping,
        icon : send,
        disc : "Fast, reliable shipping by ocean or air"
      },
      {
        id : "4",
        img : monitoring,
        icon : security,
        disc : "Product monitoring and inspection"
      },

  ]

  return (
    <>
    <div className="lg:mx-[9%] lg:w-[82%] lg:rounded-xl   md:w-full md:mx-0 md:rounded-none md:border-none md:my-1  p-2">
    <h4>Our extra services</h4>

    {/* cards */}
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
    {
      data.map((item, id) => (

            <div className="bg-white w-full h-52 pb-2">
              <img src={item.img} alt="Image not found" className='w-full h-2/3' />

              <div className="bg-white p-2 w-full h-1/3 flex justify-between">
                  <div className="w-2/3">
                    <h6>{item.disc}</h6>
                  </div>
                  <div className="rounded-full h-11 w-11 bg-[#D1E7FF] p-1 border border-white flex justify-center items-center -mt-7">
                    <img src={item.icon} alt="" className='w-7 h-7' />
                  </div>

              </div>
            </div>
      ))
    }
    </div>



    </div>    
    </>
  )
}

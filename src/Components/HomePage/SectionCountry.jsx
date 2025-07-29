import React from 'react'
import AE from '../../assets/flags/AE.png'
import AS from '../../assets/flags/AS.png'
import CN from '../../assets/flags/CN.png'
import DE from '../../assets/flags/DE.png'
import DK from '../../assets/flags/DK.png'
import FR from '../../assets/flags/FR.png'
import GB from '../../assets/flags/GB.png'
import IT from '../../assets/flags/IT.png'
import RU from '../../assets/flags/RU.png'
import US from '../../assets/flags/US.png'
export default function SectionCountry() {

const data = [
    {
        flag : AE,
        country : "Arabic Emirates",
        domain : "shopname.ae",
    },
    {
        flag : AS,
        country : "Australia",
        domain : "shopname.ae",
    },
    {
        flag : US,
        country : "United States",
        domain : "shopname.ae",
    },
    {
        flag :RU,
        country : "Russia",
        domain : "shopname.ru",
    },
    {
        flag :IT,
        country : "Italy",
        domain : "shopname.it",
    },
    {
        flag :DK,
        country : "Denmark",
        domain : "denmark.com.dk",
    },
    {
        flag :FR,
        country : "France",
        domain : "shopname.com.fr",
    },
    {
        flag :AE,
        country : "Arabic Emirates",
        domain : "shopname.ae",
    },
    {
        flag :CN,
        country : "China",
        domain : "shopname.ae",
    },
    {
        flag :GB,
        country : "Great Britain",
        domain : "shopname.co.uk",
    },

]

  return (
    <>
    <div className="lg:mx-[9%] lg:w-[82%] lg:rounded-xl   md:w-full md:mx-0 md:rounded-none md:border-none md:my-1  p-2">
        <h4>Suppliers by region</h4>  

        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">

            {
                data.map((item, i) => (
                    
                    <div className='flex items-center text-center' key={i}>
                        <div className="mr-2">
                            <img src={item.flag} alt="" />
                        </div>
                        <div className=" flex flex-col items-start  ">
                            <h6 className="text-sm">{item.country}</h6>
                            <a href={item.domain} target='blank' className='-mt-1'>{item.domain}</a>
                        </div>
                    </div>

                ))
            }


        </div>



    </div>
    </>
  )
}

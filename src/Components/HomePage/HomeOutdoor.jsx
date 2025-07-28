import React, { useEffect, useState } from 'react'
import BlockItemGroup from './Cards/BlockItemGroup'
import api from '../Api'
import homeOutdoorBg from '../../assets/backgrounds/homeoutdoor.png';


export default function HomeOutdoor() {

const [product, setProduct] = useState([])


useEffect(() => {
  api.get('home-homeoutdoor')
  .then((res) => {
    setProduct(res.data)
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err.message)
  })
},[])


  return (
    <>
    <BlockItemGroup titleleft={"Home and outdoor"} leftImage={homeOutdoorBg} product={product}/>
    </>
  )
}

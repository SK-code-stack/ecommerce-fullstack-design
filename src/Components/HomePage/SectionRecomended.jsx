import React, { useState, useEffect } from 'react';
import RecomendedCard from './Cards/RecomendedCard'
import api from '../Api';


export default function SectionRecomended() {

    const [product, setProduct] = useState([])


    useEffect(() => {
      api.get('home-recomended')
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
    <RecomendedCard title="Recommended items" product={product} />
    </>
  )
}

import React, { useEffect, useState } from 'react';
import api, {BASE_URL} from '../Api';
import DealCard from './Cards/DealCard'; 

export default function DealsOffers() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    api.get('home-deals')
      .then((res) => {
        setDeals(res.data);
      })
      .catch((err) => {
        console.log("this is error: ", err.message);
      });
  }, []);

  return (
    <>
      {deals.map((deal, index) => (
        <DealCard key={index} deal={deal} />
      ))}
    </>
  );
}

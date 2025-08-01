import React, { useEffect, useState } from 'react';
import BlockItemGroup from './Cards/BlockItemGroup';
import api from '../Api';
import homeElectronics from '../../assets/backgrounds/homeelectronics.png';

export default function HomeElectronics() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get('home-electronic') // <-- fixed endpoint
      .then((res) => {
        setProduct(res.data);
        console.log("Electronic Products:", res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
<BlockItemGroup
  titleleft="Consumer electronics and gadgets"
  leftImage={homeElectronics}
  product={product}
  categoryName="Computer and tech" 
/>
  );
}

import 'bootstrap/dist/css/bootstrap.css'
import config from '@/config'
import Paragrah from '../../component/paragrah'
import Product from '../../component/product';
import { useEffect } from 'react';
import axios from 'axios';
import React, { useState } from 'react';
    export default function Home() {
      const [valueName, setValueName] = useState([])

        useEffect(() => {
          const fetchProducts = async () => {
            const res = await fetch('http://localhost:1337/api/restaurants?populate=Image');
            const items = await res.json();
            // const result = JSON.stringify(items);
            setValueName(items);
            
          };

          fetchProducts();
        }, [])
        const colors = 'My name is seth 71';
        
        return (
            <div className="container">
              <Paragrah title={colors}></Paragrah>
              <Product posts={valueName}></Product>
            </div>
        )
    }
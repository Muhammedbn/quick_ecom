'use client'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState} from 'react';



export default function ProductCard( props:any) {
    var prod=props.product;
    const [selectProduct, setSelectProduct]=useState({});
const router = useRouter()
    const selectProd=()=>{
        console.log("selecting prod:",prod)
        setSelectProduct(prod)
    } 
    // useEffect (() => {
    //     fetch("https://fakestoreapi.com/products/1")
    // },[])
  return (
    <div>
    <button onClick={() => router.push(`/products/${prod.id}`) }>Details </button>
    
   <Link href={`/products/${prod.id}`}>

    <div onClick={selectProd} className="bg-gray-200 p-4 m-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">{prod.title}</h3>
        <p className="text-sm">{prod.description}</p>
        <p className="text-sm">Price: {prod.price}</p>
        <button onClick={() => router.push(`/products/${prod.id}`) } className="text-blue-500">Details </button>

        <Link href={`/products/${prod.id}`}>
        <div onClick={selectProd} className="bg-gray-200 p-4 m-4 rounded-lg shadow-lg">
          <img src={prod.image} width={50} alt="" />
          <h3 className="text-xl font-bold">{prod.title}</h3>
        </div>
        </Link>
      </div>
      </Link>
    </div>
  )
}

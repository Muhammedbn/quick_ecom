import React from 'react';
import {ProductService} from '../service/product-service';
import ProductCard from '../components/product-card/productCard';
import Image from 'next/image';
async function getProducts() {
  var productResponce = await ProductService.getProducts();
  return productResponce;
}
export default async function products () {
  console.log("product page excuted");
  var products = await getProducts();
  return (
    <div>
      <h3>product list</h3>
      <Image src={'/image.png'}
     
      alt={"background"}
      // width={600}
      // height={500}
      layout='fill'
      objectFit='cover'
      placeholder='blur'
      blurDataURL='/image.png'
      quality={100}
      priority={true}
    
      // sizes='(max-width: 600px) 100vw, (max-width: 1024px) 100vw, 600px'
      // layout='responsive'
      // style={{ objectFit: 'cover' as 'cover', objectPosition: 'center' as 'center' }}
      style={{ zIndex: -1, top: 0, left: 0, }}
    />
      <div>
        {products.map((p:any) => {
          return <ProductCard key={p.id} product={p} />
        })}
      </div>
    </div>
  )
}
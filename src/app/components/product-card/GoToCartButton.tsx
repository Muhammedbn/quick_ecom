'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';
export default function GoToCartButton() {
    const router = useRouter();
    useEffect(()=>{
        router.prefetch('/cart');
    },[router])
    return (
        <Link href={"/products"}><button onClick={() => router.push('/cart')}>Go to Cart</button></Link>
        
    );
}

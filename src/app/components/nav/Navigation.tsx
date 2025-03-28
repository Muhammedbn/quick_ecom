import React from 'react'
import Link from 'next/link'

export default function Navigations() {
  return (
    <div>
      <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active"  aria-current="page" href="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="about-us">About-us</Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/products">product</a>
  </li>
</ul>

    </div>
  )
}
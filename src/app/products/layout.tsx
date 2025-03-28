import React from 'react'

export default function productlayout({children}:{children: React.ReactNode} ) {
  return (
    <div>
      <h2 className="text-3xl font-bold underline">This is layout</h2>
      {children}
    </div>
  )
}
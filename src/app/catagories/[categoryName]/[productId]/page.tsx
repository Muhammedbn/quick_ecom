import React from "react";

export default function CategoryProduct(props: any) {
    console.log(props)
    const color=props.searchParms.color;
    return(
        <div>
            <h3>Category Product</h3>
            <p>Color: {color}</p>
        </div>
    )
}
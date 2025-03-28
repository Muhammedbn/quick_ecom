import { ProductService } from "../../service/product-service";
import React from "react";

export default async function ProductDetail(props: any) {
    console.log(props);
    const productId = props.params.productId;
    var product;
    if (productId) {
        product = await ProductService.getProductById(productId);
    }
    return (
        <div>
            <h3>{product.title}</h3>
            <div>
                <img src={product.image} alt={product.title} />
                <p>{product.description}</p>
                <p>{product.price}</p>
                </div>
        </div>
    )
}
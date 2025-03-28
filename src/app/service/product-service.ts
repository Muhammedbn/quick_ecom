import { ServiceBase} from './service-base';


export class ProductService extends ServiceBase {

    static getProducts = async () => {
        const productResp = await fetch(this.getURL('/products'));
        console.log(productResp)
        const products = await productResp.json();
        return products;
    }


    static getProductById = async (id: number) => {
        const productResp = await fetch(this.getURL(`/products/${id}`));
        const product = await productResp.json();
        return product;
    }
}

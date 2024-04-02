import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schema/Product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

    async pushData(category: string, productArray: Array<ProductDto>): Promise<void> {
        try {

            const products={
                categoryType:category,
                productList:productArray
            }

            // Create an array of product documents
    

            // Insert products into the database
            await this.productModel.create(products);
        } catch (error) {
            // Handle error
            throw error;
        }
    }
}

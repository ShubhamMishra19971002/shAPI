import { Body, Controller, Get, Post } from '@nestjs/common';
import { SaveProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('/product')
export class ProductController {
    constructor(private productService:ProductService){

    }
    @Get()
    getHelloFromProduct(){
        return "Product is Working"
    }

    @Post("/save-product")
    async saveProductToDataBase(@Body() saveReq:SaveProductDto){
        this.productService.pushData(saveReq.category,saveReq.products)
        return "PRoducts Saved"
    }

}

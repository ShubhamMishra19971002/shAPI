export class SaveProductDto{ 
    products:Array<ProductDto>
    category:string

}

export class ProductDto{
    unit_code: string
    unit_name: string
    unit_size: string
    theme: string
    short_description: string
    long_description: string
}






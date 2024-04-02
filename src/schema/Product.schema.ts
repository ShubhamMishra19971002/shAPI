import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



@Schema()
export class Product {
  @Prop({ required: true })
  categoryType: string;

  @Prop({ required: true })
  productList: Array<ProductItem>;

 

}

export const ProductSchema = SchemaFactory.createForClass(Product);

@Schema()
export class ProductItem {
    @Prop({ required: true })
    unit_code: string;

  @Prop({ required: true })
  unit_name: string;

  @Prop({ required: true })
  unit_size: string;

  @Prop({ required: true })
  theme: string;

  @Prop({ required: true })
  short_description: string;

  @Prop({ required: true })
  long_description: string;
}

export const ProductItemSchema = SchemaFactory.createForClass(ProductItem);

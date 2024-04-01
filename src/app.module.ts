import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import * as cors from 'cors'
import { AdminModule } from './admin/admin.module';
import { ImageServiceService } from './image-service/image-service.service';

@Module({
 // imports:[MongooseModule.forRoot('mongodb+srv://<username>:<password>@cluster0.yyerrbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')],
  imports: [MongooseModule.forRoot('mongodb://localhost/satva_homes'), AdminModule],
  controllers: [AppController],
  providers: [AppService, ImageServiceService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors())
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

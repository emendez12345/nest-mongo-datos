import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { ExportModule } from './export/export.module';

// const uri = 'mongodb://root:root@localhost:27017/'

// const client = new MongoClient(uri);

// async function run() {
//   await client.connect();
//   const database = client.db('platzi-store');
//   const taskColletion = database.collection('task');
//   const tasks= await taskColletion.find().toArray();
//   console.log(tasks)
// }
// run();
@Module({
  imports: [ExportModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService],
})
export class AppModule {}

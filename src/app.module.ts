import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { ExportModule } from './export/export.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ExportModule,DatabaseModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService],
})
export class AppModule {}

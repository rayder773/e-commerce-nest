import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './models/product/product.module';
import { DatabaseModule } from './core/database/database.module';
import { SettingsModule } from './models/settings/settings.module';
import { AuthModule } from './models/auth/auth.module';

@Module({
  imports: [ProductModule, SettingsModule, AuthModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

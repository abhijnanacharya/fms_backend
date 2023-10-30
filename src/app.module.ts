import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { TripModule } from './trip/trip.module';

@Module({
  imports: [TripModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}

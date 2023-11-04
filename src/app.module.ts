import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { TripModule } from './trip/trip.module';
import { MaintenanceModule } from './Maintenance/maintenance/maintenance.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [TripModule, MaintenanceModule, VehicleModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}

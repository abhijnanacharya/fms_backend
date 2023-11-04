import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { TripModule } from './trip/trip.module';
import { MaintenanceModule } from './Maintenance/maintenance/maintenance.module';
import { VehicleModule } from './vehicle/vehicle.module';
import { FuelLogModule } from './fuel-log/fuel-log.module';

@Module({
  imports: [TripModule, MaintenanceModule, VehicleModule, FuelLogModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}

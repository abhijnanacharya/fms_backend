// src/trip/trip.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';
import { DatabaseService } from '../database/database.service';
import { TripDataDto } from './dto/tripdata.dto';

@Controller('trips')
@ApiTags('trips')
export class TripController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Post()
  @ApiOperation({ summary: 'Add a new trip' })
  @ApiCreatedResponse({ description: 'The trip has been successfully added.' })
  @ApiBadRequestResponse({ description: 'Invalid input data.' })
  async addTrip(@Body() tripData: TripDataDto) {
    try {
      const results = await this.databaseService.callAddTripProcedure(
        tripData.trip_id, 
        tripData.start_date,
        tripData.end_date,
        tripData.distance,
        tripData.fuel_expense,
        tripData.vehicle_id,
        tripData.driver_id,
        tripData.trip_type_id,
      );
      return results;
    } catch (error) {
      // Handle the error appropriately
      return { error: error.message };
    }
  }
}

import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class TripService {
  constructor(private readonly databaseService: DatabaseService) {}

  async addTrip(
    trip_id: number, // Added the trip_id parameter
    start_date: Date,
    end_date: Date,
    distance: number,
    fuel_expense: number,
    vehicle_id: string,
    driver_id: number,
    trip_type_id: number,
  ) {
    try {
      const result = await this.databaseService.callAddTripProcedure(
        trip_id, // Updated to include trip_id
        start_date,
        end_date,
        distance,
        fuel_expense,
        vehicle_id,
        driver_id,
        trip_type_id,
      );
      return result;
    } catch (error) {
      throw new Error(`Error calling stored procedure: ${error.message}`);
    }
  }
}

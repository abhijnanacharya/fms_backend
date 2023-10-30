import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

@Controller('/driver')
export class AppController {
  constructor(private readonly databaseService: DatabaseService) {}

  @Get()
  async getAllDrivers() {
    const query = 'SELECT * FROM driver';
    const results = await this.databaseService.executeQuery(query);
    console.log(results);
    return results;
  }
}

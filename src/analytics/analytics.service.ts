import { Injectable } from '@nestjs/common';
import { totalmem } from 'os';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AnalyticsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async getTotalMaintenanceCostForAVehicle(id: string) {
    const query = `SELECT SUM(cost) as totalCost 
    FROM Maintenance m 
    where m.vehicle_id ='${id}';`;
    const results = await this.databaseService.executeQuery(query);

    if (results && results.length > 0) {
      const totalCost = results[0].totalCost;

      return { cost: totalCost };
    } else {
      return { cost: 0 };
    }
  }

  async getFuelExpenseCostMovingAvg(yearId: number) {
    const query = `SELECT
    quarter,
    ROUND(AVG(total_cost) OVER (PARTITION BY quarter ORDER BY start_date), 2) AS running_avg_total_cost
FROM (
    SELECT
        QUARTER(start_date) AS quarter,
        start_date,
        SUM(fuel_expense) AS total_cost
    FROM trip
    WHERE YEAR(start_date) = ${yearId}
    GROUP BY quarter, start_date
) AS subquery
ORDER BY quarter, start_date;
`;
    const results = await this.databaseService.executeQuery(query);

    if (results && results.length > 0) {
      return results;
    }
  }

  async getMaintenanceCostForEachComponent() {
    const query = `SELECT description AS Vehicle_maintenance, SUM(cost) AS TOTAL_COST
    FROM Maintenance
    GROUP BY description;`;
    const results = await this.databaseService.executeQuery(query);

    if (results && results.length > 0) {
      return results;
    }
  }
}

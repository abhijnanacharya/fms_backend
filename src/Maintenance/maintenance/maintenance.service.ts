import { Injectable } from '@nestjs/common';
import { MaintenanceDataDto } from './dto/maintenance.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MaintenanceService {
  constructor(private readonly databaseService: DatabaseService) {}

  async updateMaintenance(
    id: string,
    updatedMaintenanceData: Partial<MaintenanceDataDto>,
  ) {
    const updatedFields = Object.keys(updatedMaintenanceData);

    if (updatedFields.length === 0) {
      return null; // No fields to update
    }

    const updateClause = updatedFields.map((field, index) => {
      return `${field} = ?`;
    });

    const query = `
        UPDATE Maintenance
        SET
          ${updateClause.join(', ')}
        WHERE maintenance_id = ?
      `;

    const values = [
      ...updatedFields.map((field) => updatedMaintenanceData[field]),
      id,
    ];

    const updatedMaintenance = await this.databaseService.executeQuery(
      query,
      values,
    );

    return updatedMaintenance;
  }

  async deleteMaintenance(id: string) {
    const query = `
      DELETE FROM maintenance
      WHERE maintenance_id = ?
    `;

    const values = [id];

    // Execute the DELETE statement
    const deletionResult = await this.databaseService.executeQuery(
      query,
      values,
    );

    if (deletionResult.affectedRows > 0) {
      return { message: 'Maintenance record deleted successfully' };
    } else {
      return { error: 'Maintenance record not found or could not be deleted' };
    }
  }
}

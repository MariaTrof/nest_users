import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private dataSource: DataSource) {}

  async countUsersWithProblem(): Promise<{ count: number; updated: number }> {
    try {
      console.log('Executing query...');

      const countResult = await this.dataSource.query(
        'SELECT count(*) AS count FROM users WHERE problem = true;',
      );
      const count = parseInt(countResult[0].count, 10);
      console.log(`Users with problems before reset: ${count}`);
      
      const updateResult = await this.dataSource.query(
        'UPDATE users SET problem = false WHERE problem = true;',
      );
      const updated = updateResult[1];
      console.log(`Number of affected rows: ${updated}`);

      return { count, updated };
    } catch (error) {
      console.error('Error occurred:', error);
      throw new InternalServerErrorException(
        'Failed to count users with problems',
      );
    }
  }
}

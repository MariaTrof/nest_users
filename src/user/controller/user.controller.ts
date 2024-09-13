import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('count_problem')
  async getCountWithProblem(): Promise<{ count: number; updated: number }> {
    return this.userService.countUsersWithProblem();
  }

  @Post('count_problem')
  async countProblems(): Promise<{ count: number; updated: number }> {
    return this.userService.countUsersWithProblem();
  }
}

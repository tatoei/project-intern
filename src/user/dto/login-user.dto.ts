import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ description: '' })
  @IsString()
  email: string;

  @ApiProperty({ description: '' })
  @IsString()
  password: string;
}

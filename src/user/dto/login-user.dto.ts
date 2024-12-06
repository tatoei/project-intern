import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: '' })
  @IsString()
  email: string;

  @ApiProperty({ description: '' })
  @IsString()
  password: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsOptional()
  password?: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  factory: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}

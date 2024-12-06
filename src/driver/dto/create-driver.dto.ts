import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateDriverDto {
  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  driverCode: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: '' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  company: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  driverType: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  idCardNumber: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  licenseNumber: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: '' })
  @IsString()
  @IsNotEmpty()
  profileImage: string;
}

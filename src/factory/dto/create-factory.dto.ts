import {
  IsString,
  IsNumber,
  IsEmail,
  IsArray,
  ValidateNested,
  IsDate,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
class LocationDto {
  @ApiProperty({ description: '' })
  @IsNumber()
  latitude: number;

  @ApiProperty({ description: '' })
  @IsNumber()
  longitude: number;
}

class DocumentDto {
  @ApiProperty({ description: '' })
  @IsString()
  documentName: string;

  @ApiProperty({ description: '' })
  @IsString()
  documentUrl: string;
}

class CoinHistoryDto {
  @ApiProperty({ description: '' })
  @IsNumber()
  amount: number;

  @ApiProperty({ description: '' })
  @IsDate()
  date: Date;

  @ApiProperty({ description: '' })
  @IsString()
  description: string;

  @ApiProperty({ description: '' })
  @IsString()
  user: string;
}

class PackageDto {
  @ApiProperty({ description: '' })
  @IsString()
  packageName: string;

  @ApiProperty({ description: '' })
  @IsNumber()
  price: number;

  @ApiProperty({ description: '' })
  @IsNumber()
  duration: number;
}

export class CreateFactoryDto {
  @ApiProperty({ description: '' })
  @IsString()
  factoryCode: string;

  @ApiProperty({ description: '' })
  @IsString()
  factoryName: string;

  @ApiProperty({ description: '' })
  @IsString()
  phone: string;

  @ApiProperty({ description: '' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: '' })
  @ValidateNested()
  @Type(() => LocationDto)
  location: LocationDto;

  @ApiProperty({ description: '' })
  @IsNumber()
  coins: number;

  @ApiProperty({ description: '' })
  @IsString()
  images: string;

  @IsArray()
  @ApiProperty({ description: '' })
  @ValidateNested({ each: true })
  @Type(() => DocumentDto)
  @ArrayMinSize(1) // Require at least one document
  documents: DocumentDto;

  @IsArray()
  @ApiProperty({ description: '' })
  @ValidateNested({ each: true })
  @Type(() => CoinHistoryDto)
  coinHistory: CoinHistoryDto;

  @IsArray()
  @ApiProperty({ description: '' })
  @ValidateNested({ each: true })
  @Type(() => PackageDto)
  packages: PackageDto;
}

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class location {
  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

@Schema()
class documents {
  @Prop({ required: true })
  documentName: string;
  @Prop({ required: true })
  documentUrl: string;
}

@Schema()
class coinHistory {
  @Prop({ required: true })
  amount: number;
  @Prop({ required: true })
  date: Date;
  @Prop({ required: true })
  description: string;
  @Prop({ required: true })
  user: string;
}

@Schema()
class packages {
  @Prop({ required: true })
  packageName: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  duration: number;
}

@Schema({ timestamps: true })
export class Factory extends Document {
  @Prop({ required: true, unique: true })
  factoryCode: string;

  @Prop({ required: true })
  factoryName: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, type: location })
  location: location;

  @Prop({ required: true, type: documents })
  documents: documents;

  @Prop({ required: true, type: coinHistory })
  coinHistory: coinHistory;

  @Prop({ required: true, type: packages })
  packages: packages;

  @Prop({ required: true })
  coins: number;

  @Prop({ required: true })
  images: string;

  @Prop({ default: false }) // ฟิลด์สำหรับบอกว่าสถานะถูกลบหรือไม่
  isActive: boolean;
}

export const LocationSchema = SchemaFactory.createForClass(location);
export const FactorySchema = SchemaFactory.createForClass(Factory);
export const DocumentsSchema = SchemaFactory.createForClass(documents);
export const coinHistorySchema = SchemaFactory.createForClass(coinHistory);
export const PackagesSchema = SchemaFactory.createForClass(packages);

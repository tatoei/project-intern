import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DriverDocument = Driver & Document;

@Schema({ timestamps: true })
export class Driver {
  @Prop({ required: true, unique: true })
  driverCode: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  driverType: string;

  @Prop({ required: true })
  idCardNumber: string;

  @Prop({ required: true })
  licenseNumber: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  profileImage: string;

  @Prop({ default: false })
  isActive: boolean;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);

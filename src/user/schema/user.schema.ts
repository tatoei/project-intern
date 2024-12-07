import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = TUser & Document;

@Schema({ timestamps: true })
export class TUser {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ default: true }) // ฟิลด์สำหรับบอกว่าสถานะถูกลบหรือไม่
  isActive: boolean;

  @Prop({ default: false })
  isNewUser: boolean;
}

export const UserSchema = SchemaFactory.createForClass(TUser);
UserSchema.index({ email: 1 }, { unique: true });

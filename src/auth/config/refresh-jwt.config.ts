import { JwtSignOptions } from '@nestjs/jwt';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'refresh-jwt',
  (): JwtSignOptions => ({
    secret: process.env.REFRESH_JWT_SECRET || 'default-refresh-secret-key', // ตั้งค่า secret สำหรับ refresh token
    expiresIn: process.env.REFRESH_JWT_EXPIRE_IN || '7d', // ตั้งค่า expiration สำหรับ refresh token
  }),
  //   ถ้าไม่มีใน .env ให้ใช้ค่า default
);

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // ดึง JWT จาก Authorization header
      secretOrKey: 'secret', // ใส่ secret key สำหรับตรวจสอบ JWT
    });
  }

  async validate(payload: {email:string, firstname:string, lastname:string,role:string}) {
    console.log('validate-payload', payload);
    // payload คือข้อมูลที่อยู่ใน JWT
    return {
      email: payload.email,
      firstname: payload.firstname,
      lastname: payload.lastname,
      role: payload.role,
    };
  }
}

import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest(); // ดึง Request
    const user = request.user; // ดึงข้อมูล user จาก Request
    console.log('GetUser-request', user);

    return data ? user?.[data] : user; // ส่งคืนข้อมูลทั้งหมด หรือเฉพาะ field ที่ระบุ
  },
);

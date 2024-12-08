import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ตั้งค่า Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description for my project')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger ที่ endpoint: /api

  // ใช้ PORT จาก environment variable หรือค่าเริ่มต้น (3000)
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');

  console.log(`Application is running on: http://localhost:${port}/api`);
}
bootstrap();

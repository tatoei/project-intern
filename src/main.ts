import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ตั้งค่า Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description for my project')
    .setVersion('1.0')
    // .addTag('users') // ตัวอย่างการเพิ่ม tag
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // http://localhost:3000/api


  await app.listen(3000, '0.0.0.0');
}
bootstrap();

// for redeploy

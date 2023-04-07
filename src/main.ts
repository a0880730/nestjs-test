import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('http://localhost:3000');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 将输入数据转换为 DTO 对象
      whitelist: true, // 只允许 DTO 中定义的属性
      forbidNonWhitelisted: true, // 禁止 DTO 中未定义的属性
    }),
  );
  await app.listen(3000);
}
bootstrap();

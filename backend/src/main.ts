import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const PORT = process.env.PORT || 5001

  const app = await NestFactory.create(AppModule)

  const config = new DocumentBuilder()
    .setTitle('WaSA - Warehouse and sales accounting(Учёт склада и продаж)')
    .setVersion('1.0.0')
    .addTag('Remzi Ablyakimov')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server started on ${PORT} port...`))
}
bootstrap()

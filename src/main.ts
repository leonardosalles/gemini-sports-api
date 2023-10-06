import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

export async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

	app.enableCors({
		allowedHeaders: ['Content-Type', 'Accept'],
		methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
		origin: [process.env.FRONTEND_URL, 'http://localhost:3001'],
	})

	await app.listen(process.env.PORT || 3000, '0.0.0.0')
}

bootstrap()

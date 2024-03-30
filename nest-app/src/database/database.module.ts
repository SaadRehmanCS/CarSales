import { Module } from "@nestjs/common";
import { Connection } from "typeorm";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: configService.get('DB_USER'),
        password: '',
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/../**/entities/*{.ts,.js}'],
        synchronize: true,
      }),
    }),
  ],
  exports: [TypeOrmModule]
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) {
      console.log("DB connected successfully");
    } else {
      console.log("DB not connected");
    }
  }
}

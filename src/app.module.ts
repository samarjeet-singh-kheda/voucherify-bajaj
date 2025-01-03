import { Module } from '@nestjs/common';
import { UserModule } from './v1/user/user.module';
import { DatabaseModule } from './database/db.module';
import { VoucherModule } from './v1/voucher/voucher.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    VoucherModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { SessionSerializer } from '../utils/Serializer';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [UsersModule, PassportModule],
    providers: [AuthService, LocalStrategy, SessionSerializer],
    controllers: [AuthController],
})
export class AuthModule {}

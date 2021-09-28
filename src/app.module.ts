import { QuestionModule } from './question/question.module';
import { QuestionController } from './question/question.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { QuestionService } from './question/question.service';

@Module({
  imports: [
    QuestionModule,],
  controllers: [
    QuestionController, AppController],
  providers: [AppService, AppGateway, QuestionService],
})
export class AppModule { }

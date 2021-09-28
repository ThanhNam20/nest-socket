import { QuestionService } from './question/question.service';
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway({cors: true})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  constructor(
    private questionService: QuestionService) {
  }
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): void {
    this.server.emit('msgToClient', payload);
  }


  handleEvents(data: any){
    this.server.emit('events', data);
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    const listquestions = this.questionService.getAllQuestion();
    let index = 0;
    this.handleEvents(listquestions[index]);
    let interval = setInterval(() => {
      index++;
      this.handleEvents(listquestions[index]);
      if (index == listquestions.length - 1) {
        clearInterval(interval);
      }
    }, 10000);
  }
}

import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { lastValueFrom } from 'rxjs';
import { Server, Socket } from 'socket.io';
import { AppService } from './app.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit {

  constructor(private readonly appService: AppService) { }

  @WebSocketServer()
  server: Server;

  afterInit(server: any) {
    this.server = server;
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('UPDATE_DRIVER_LOCATION')
  async updateDriverLocation(@MessageBody() driverLocation: any) {
    this.appService.updateDriverLocation(JSON.parse(driverLocation), this.server);
  }

  @SubscribeMessage('SEND_MESSAGE')
  async sendMessage(@MessageBody() message: any) {
    this.appService.sendMessage(JSON.parse(message), this.server);
  }
}

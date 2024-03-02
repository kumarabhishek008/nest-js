import { Injectable } from '@nestjs/common';
import {
  ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    WsResponse,
  } from '@nestjs/websockets';
import { Socket } from 'net';
  import { from, Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { Server } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: 'http://localhost:3000',
    },
  })
  @Injectable()
  export class EventsGateway {
    @WebSocketServer()
    server: Server;
    
    @SubscribeMessage('events')
    findAll(@MessageBody() data: any, @ConnectedSocket() client: Socket): Observable<WsResponse<number>> {
      console.log(data);
      /**
       * 
       */
      client.emit('events', { data: "Hi How are you" });
      return data;
      // return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
    }
  
    @SubscribeMessage('identity')
    async identity(@MessageBody() data: number): Promise<number> {
      console.log(data, 'identity');
      return data; 
    }
  }
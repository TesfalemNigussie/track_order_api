import { Injectable } from '@nestjs/common';
import { CreateRequest } from './model/create.request';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AppService {

  constructor(private readonly prismaService: PrismaService) { }

  async getRequests() {
    const result = await this.prismaService.request.findMany();

    if (result) {
      return {
        status: "SUCCESS",
        requests: result
      }
    }

    return {
      status: "ERROR",
    }
  }

  async createRequest(createRequest: CreateRequest) {
    const result = await this.prismaService.request.create({
      data: {
        itemName: createRequest.itemName,
        pickupName: createRequest.pickupName,
        PickupLat: createRequest.PickupLat,
        PickupLng: createRequest.PickupLng,
        desLat: createRequest.desLat,
        desLng: createRequest.desLng,
        desName: createRequest.desName,
        status: 'CREATED'
      }
    });


    if (result) {
      return {
        status: "SUCCESS",
        request: result
      }
    }

    return {
      status: "ERROR",
    }
  }


  async cretaeUser(creteUser: any) {
    const result = await this.prismaService.user.create({
      data: {
        socketId: creteUser.socketId,
      }
    });


    if (result) {
      return {
        status: "SUCCESS",
        request: result
      }
    }

    return {
      status: "ERROR",
    }
  }

  async getUser() {

    const result = await this.prismaService.user.findMany();

    if (result) {
      return {
        status: "SUCCESS",
        users: result
      }
    }

    return {
      status: "ERROR",
    }
  }

  
  async updateSocketId(id) {
    await this.prismaService.user.updateMany({
      where: {
        id: 1
      },
      data: {
        socketId: id
      }
    })
  }
  
  async updateSocketIdByPost(request) {
    console.log(request);
    await this.prismaService.user.updateMany({
      where: {
        id: request.id
      },
      data: {
        socketId: request.socketId
      }
    })
  }

  async updateDriverLocation(driverLocation, server) {
    const result  =  await this.prismaService.user.updateMany({
      where: {
        id: 1
      },
      data: {
        currentLocationLng: driverLocation.lng,
        currentLoctionLat: driverLocation.lat
      }
    });

    const user = await this.prismaService.user.findFirst();

    server.to(user.socketId).emit("LOCATION_UPDATED", driverLocation)
  }

  async sendMessage(message, server) {
    
    const result = await this.prismaService.user.findFirst({
      where  :{
        id : message.userId == 1 ? 2 : 1
      }
    });

    console.log(result);

    server.to(result.socketId).emit("RECIVED_MESSAGE", message)
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateRequest } from './model/create.request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('requests')
  getRequests() {
    return this.appService.getRequests();
  }

  @Post('createRequest')
  createRequest(@Body() createRequest : CreateRequest ){
    return this.appService.createRequest(createRequest)
  }


  @Post('user')
  cretaeUser(@Body() createRequest : any ){
    return this.appService.cretaeUser(createRequest)
  }

  @Get('user')
  getUser() {
    return this.appService.getUser();
  }

  @Post('updateSocketId')
  updateSocketIdByPost(@Body() updateRequest : any ) {
    console.log(updateRequest);
    this.appService.updateSocketIdByPost(updateRequest)
  }
}

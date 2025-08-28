import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMailDto } from './mailer/send-mail.dto';
import { ApiKeyGuard } from './common/guards/api-key-guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-mail')
  @UseGuards(ApiKeyGuard)
  async sendMail(@Body() body: SendMailDto) {
    return this.appService.sendEmail(
      body.to,
      body.subject,
      body.text,
      body.html,
    );
  }
}

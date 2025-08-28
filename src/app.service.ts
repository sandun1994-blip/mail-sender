import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MailerService } from './mailer/mailer.service';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, text: string, html?: string) {
    try {
      await this.mailerService.sendMail(to, subject, text, html);

      return { message: 'Email sent successfully!' };
    } catch (error) {
      throw new InternalServerErrorException('Failed to send email');
    }
  }
}

import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Users } from '../users/models/user.models';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendUserConfirmation(user: Users): Promise<void> {
    const url = `${process.env.API_HOST}/api/users/activate/${user.activationLink}`;
    console.log(url);
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Electronics store App! Confirm your Email',
      template: './confirmation',
      context: {
        name: user.first_name,
        url,
      }
    });
  }
}

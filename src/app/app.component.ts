import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronForwardOutline,
  caretForwardOutline,
  logoInstagram,
  logoFacebook,
  call,
  time,
  lockClosed,
  map,
  caretDown,
  bag,
  bookmark,
  sunny,
  moon,
} from 'ionicons/icons';
import { ContactModel, IRequestRdlaboMail } from './types';
import { defaultContactModel } from './constant';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { contact } from '../data/contact';
import { rece } from '../data/rece';
import { ckj } from '../data/ckj';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, IonIcon],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public contactModel: ContactModel = defaultContactModel();
  readonly contact = contact();
  readonly rece = rece();
  readonly ckj = ckj();
  readonly isSend = signal<boolean>(false);

  private http = inject(HttpClient);

  constructor() {
    addIcons({
      chevronForwardOutline,
      caretForwardOutline,
      logoInstagram,
      logoFacebook,
      call,
      time,
      lockClosed,
      map,
      caretDown,
      bag,
      bookmark,
      sunny,
      moon,
    });
  }

  async send() {
    this.isSend.set(true);
    const preMessage = this.contactModel.tel
      ? `電話番号： ${this.contactModel.tel}\r\n\r\n`
      : '';
    const result = await firstValueFrom(
      this.http.post('https://api.v5.tipsys.me/thirdparty/diner/mail', {
        from: this.contactModel.email,
        name: this.contactModel.name,
        message: preMessage + this.contactModel.message,
      } as IRequestRdlaboMail),
    )
      .then(() => true)
      .catch(() => false);

    if (result) {
      this.contactModel = defaultContactModel();
    } else {
      this.isSend.set(false);
      alert(
        'メッセージの送信に失敗しました。時間を置いてから再度お試しください。',
      );
    }
  }
}

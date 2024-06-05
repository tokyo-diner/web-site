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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, IonIcon],
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public contactModel: ContactModel = defaultContactModel();
  isSend = signal<boolean>(false);
  contact = signal<string[]>(contact());

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
    const preMessage = this.contactModel.tel
      ? `電話番号： ${this.contactModel.tel}\r\n\r\n`
      : '';
    const result = await firstValueFrom(
      this.http.post('https://api.v5.tipsys.me/thirdparty/rdlabo/mail', {
        from: this.contactModel.email,
        name: this.contactModel.name,
        message: preMessage + this.contactModel.message,
      } as IRequestRdlaboMail),
    )
      .then(() => true)
      .catch(() => false);

    if (result) {
      this.isSend.set(true);
      this.contactModel = defaultContactModel();
    } else {
      alert(
        'メッセージの送信に失敗しました。時間を置いてから再度お試しください。',
      );
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {


  Instagram() {
    window.open('https://www.instagram.com/il_violinista_di_tik_tok/', '_blank')
  }

  Facebook() {
    window.open('https://www.facebook.com/giovanni.dimauro.33', '_blank')
  }

  TikTok() {
    window.open('www.tiktok.com', '_blank')
  }

  WhatsApp() {
    window.alert("numero")
  }

}

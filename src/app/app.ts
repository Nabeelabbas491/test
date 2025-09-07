import { Component } from '@angular/core';
import MobileDetect from 'mobile-detect';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private isMobile(): boolean {
    const md = new MobileDetect(navigator.userAgent);
    return !!md.mobile();
  }

  Download() {
    if (this.isMobile()) {
      const fallbackUrl = encodeURIComponent(
        'https://drive.google.com/file/d/1oOu7_R2lA5ax3CNjSCIEvccu918ofatO/view?usp=sharing'
      );
      const externalUrl =
        'intent://#Intent;scheme=myapp;package=com.example.hello;' +
        `S.browser_fallback_url=${fallbackUrl};end`;
      window.location.href = externalUrl;
    } else {
      alert('This feature is only available inside the mobile app.');
    }
  }
}

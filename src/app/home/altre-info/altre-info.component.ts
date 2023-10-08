import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-altre-info',
  templateUrl: './altre-info.component.html',
  styleUrls: ['./altre-info.component.css']
})
export class AltreInfoComponent {
  scrolledPixels: number = 0;
  showContainer2: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrolledPixels = window.scrollY;
    console.log(this.scrolledPixels);

    if (this.scrolledPixels >= 570) {
      this.showContainer2 = true;
    }
  }
}

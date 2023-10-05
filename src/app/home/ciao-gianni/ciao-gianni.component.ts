import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-ciao-gianni',
  templateUrl: './ciao-gianni.component.html',
  styleUrls: ['./ciao-gianni.component.css']
})
export class CiaoGianniComponent implements OnInit {
  tran: boolean = false;
  tran2: boolean = false;
  tran3: boolean = false;

  scrolledPixels: number = 0;
  isScrolled: boolean = false;
  showContainer2: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log("START");

    setTimeout(() => {
      this.tran = true;
    }, 200);

    setTimeout(() => {
      this.tran2 = true;
    }, 500);

    setTimeout(() => {
      this.tran3 = true;
    }, 900);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrolledPixels = window.scrollY;
    this.isScrolled = this.scrolledPixels >= 4;

    // Aggiungi questa condizione per mostrare il container2 quando si scorre oltre i 4 pixel
    if (this.scrolledPixels >= 4) {
      this.showContainer2 = true;
    } if (this.scrolledPixels < 4) {
      this.showContainer2 = false;
    }
  }
}




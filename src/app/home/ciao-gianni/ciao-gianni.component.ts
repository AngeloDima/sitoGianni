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
  isScrolled: boolean = false; // Variabile per tenere traccia del superamento dei 90 pixel di scroll
  constructor() { }

  ngOnInit(): void {
    console.log("START");

    setTimeout(() => {
      this.tran = true; // Attiva la transizione per tran dopo 200 millisecondi
    }, 200);

    setTimeout(() => {
      this.tran2 = true; // Attiva la transizione per tran2 dopo 400 millisecondi
    }, 500);

    setTimeout(() => {
      this.tran3 = true; // Attiva la transizione per tran2 dopo 400 millisecondi
    }, 900);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.scrolledPixels = window.scrollY;
    this.isScrolled = this.scrolledPixels >= 4; // Imposta isScrolled in base alla condizione
    console.log('Scrolled Pixels:', this.scrolledPixels);
  }



}




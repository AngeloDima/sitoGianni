import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciao-gianni',
  templateUrl: './ciao-gianni.component.html',
  styleUrls: ['./ciao-gianni.component.css']
})
export class CiaoGianniComponent implements OnInit {
  tran: boolean = false;
  tran2: boolean = false;
  tran3: boolean = false;

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
}

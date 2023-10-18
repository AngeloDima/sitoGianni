import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  ChiSono() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 2.65;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }


  ChiSono2() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 3.05;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }


  LAVORO() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 1.4;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }


  LAVORO2() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 1.85;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }



  CONTATTAMI() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 3.70;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }


  CONTATTAMI2() {

    const windowHeight = window.innerHeight;
    const scrollPercentage = 5.5;


    window.scrollTo({
      top: windowHeight * scrollPercentage,
      behavior: 'smooth'
    });
  }

}



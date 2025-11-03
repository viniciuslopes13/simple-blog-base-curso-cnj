import { Component, ElementRef, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador {

  @ViewChild('myButton') button!: ElementRef;

  contador = 0;

  constructor(private ngZone: NgZone){

  }

  ngAfterViewInit(): void{
    this.ngZone.runOutsideAngular(()=>{
      this.button.nativeElement.addEventListener('click', ()=>{
        this.contador+=1;
        console.log(this.contador);
      })
    })
  }
 
  /*
  incrementar() {
    this.contador+=1;
  }*/

}

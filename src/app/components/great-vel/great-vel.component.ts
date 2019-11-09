import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-great-vel',
  templateUrl: './great-vel.component.html',
  styleUrls: ['./great-vel.component.css']
})
export class GreatVelComponent implements OnInit {

  items: any[] = [
    {
      icon:'../../../assets/male_avatar.png',
      heading:'THE LATEST TINCI',
      para:`Soccer football on television who invest dui lorem Obama, but only Performance. 
      At the time of propaganda put football with the customer.`
    }, {
      icon:'../../../assets/male_avatar.png',
      heading:'NOW YOU DESERVE',
      para:`
      Soccer football on television who invest dui lorem Obama, but only Performance. 
      At the time of propaganda put football with the customer.
      `
    }, {
      icon:'../../../assets/male_avatar.png',
      heading:'NOW YOU DESERVE',
      para:`
      Soccer football on television who invest dui lorem Obama, but only Performance. 
      At the time of propaganda put football with the customer.
      `
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

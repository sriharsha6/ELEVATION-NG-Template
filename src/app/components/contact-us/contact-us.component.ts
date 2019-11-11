import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactUs } from '../../entites/ContactUs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 

  @Input()
  contactUs: ContactUs;
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    //fgkdg
  }

}

import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { ContactUs } from "../../entites/ContactUs";
import { Props } from "src/app/constants/props";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  @Input()
  props: Props;

  @Input()
  contactUs: ContactUs;

  contactForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  constructor() {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.maxLength(500)
      ])
    });
  }

  onSubmit() {
    // console.log("formGroup", this.contactForm);
    console.log("name:", this.contactForm.value.name);

    console.log("email:", this.contactForm.value.email);

    console.log("message:", this.contactForm.value.message);
    this.contactForm.reset()
  }
}

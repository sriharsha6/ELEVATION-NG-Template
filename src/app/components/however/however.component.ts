import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-however",
  templateUrl: "./however.component.html",
  styleUrls: ["./however.component.css"]
})
export class HoweverComponent implements OnInit {
  cards: any[] = [
    {
      card: "../../../assets/images/pic02.jpg",
      name: "SOMETIMES EVEN",
      para: `Present dapibus, neque id cursus lorem tortor neque`,
      actions: "LEARN MORE"
    },
    {
      card: "../../../assets/images/pic02.jpg",
      name: "VARIOUS SHOP",
      para: "Present dapibus, neque id cursus lorem tortor neque ",
      actions: "LEARN MORE"
    },
    {
      card: "../../../assets/images/pic02.jpg",
      name: "BEFORE PRESENT ",
      para: "Present dapibus, neque id cursus lorem tortor neque .",
      actions: "LEARN MORE"
    }
  ];
  constructor() {}

  ngOnInit() {}
}

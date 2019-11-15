import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "./cart.service";
import { Config } from "./config";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private _cartService: CartService) {}
  config: Config;
  ngOnInit() {}

  showConfig() {
    this._cartService
      .getConfig()
      .subscribe((data: Config) => (this.config = { heroesUrl: (data as any).heroesUrl,
        textfile:  (data as any).textfile, }));
  }
}

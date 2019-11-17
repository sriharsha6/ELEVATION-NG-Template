import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Config } from "./config";
// https://angular.io/guide/http

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private _http: HttpClient) {}

  configUrl = "assets/config.json";

  getConfig() {
    return this._http.get<Config>(this.configUrl);
  }
}

import { Injectable } from "@angular/core";
import { Router, Routes } from "@angular/router";

@Injectable({providedIn:'root'})
export class DynamicRouteService{
  constructor(private router:Router){}

  addRoutes(routes: Routes){
    this.router.config.unshift(...routes);
    this.router.resetConfig(this.router.config);
  }
}
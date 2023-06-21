import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CostumerService } from '../costumer.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanMatch,CanActivate {


  constructor(private customerService:CostumerService,private router:Router) { }

  private checkAuthStatus(): boolean | Observable<boolean>{


    return this.customerService.checkAuthentication().pipe(
      tap( isAuthenthicated =>{
        if(!isAuthenthicated){
          console.log("AUTENTICADO");
          this.router.navigate(['/agente']);
          return true;
        }else{
          console.log("NO AUTENTICADO");
          this.router.navigate(['/']);
          return false;
        }
      })
    );
  }

  canMatch(route: Route, segments: UrlSegment[]): boolean |
  Observable<boolean> {
    //console.log("CanMatch: ",{route:route,segments:segments});
   return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean |
   Observable<boolean> {
    //console.log("CanActivate:",{route:route,state:state});
    return this.checkAuthStatus();
  }

}

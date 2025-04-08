import { Injectable } from "@angular/core";

// C'est un plat
@Injectable({
  // Je met le plat dans mon menu
  providedIn: 'root'
})
export class LoggerService {
  logger(message: any): void {
    console.log('From Logger Service');
    console.log({message});
  }
}

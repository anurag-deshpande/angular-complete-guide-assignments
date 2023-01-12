import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'app-gameControl',
    templateUrl: './gameControl.component.html',
    styleUrls: ['./gameControl.component.css']
}
)

export class gameControl{
     
   @Output() intervalNumber = new EventEmitter<number>();
   ref: any
   i=1;
   constructor(){}

   onStartGame(){
    this.ref = setInterval(()=>{
        this.intervalNumber.emit(this.i ++)
    },1000)
   }

   onStopGame(){
    clearInterval(this.ref)
   }

}
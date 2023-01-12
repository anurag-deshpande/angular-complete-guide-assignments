import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers:number[]=[]
  evenNumbers:number[]=[]

  getIntervalNumber(intervalNumber:Number){
      if(Number(intervalNumber) % 2 === 0){
        this.evenNumbers.push(Number(intervalNumber))
      }else{
        this.oddNumbers.push(Number(intervalNumber))
      }
  }

}

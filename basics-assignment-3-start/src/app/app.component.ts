import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display = false
  status_possibilities = ["Display", "Hide"]
  status = this.status_possibilities[0]
  button_clicks=[]

  toggleDisplay(){
    this.display=!this.display
    if (this.display === true){
      this.status= this.status_possibilities[1]
    }else{
      this.status=this.status_possibilities[0]
    }
    this.button_clicks.push(this.button_clicks.length + 1);
  }
}

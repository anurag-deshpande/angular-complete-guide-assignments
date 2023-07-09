import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  exampleForm : FormGroup;
  forbiddenUserNames = ['Test']; 

ngOnInit(): void {
  this.exampleForm = new FormGroup({
    'name_pro': new FormControl(null, [Validators.required], this.customNameValidatorAsync.bind(this)), //this.customNameValidator.bind(this)
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'status_pro': new FormControl(null),
  });
}

submitForm() {
 console.log(this.exampleForm);
}

// customNameValidator (control: FormControl): {[s: string]: boolean} {
//     if(this.forbiddenUserNames.indexOf(control.value)!== -1) {
//       return {'nameIsForbidden': true};
//     }
//     return null;
// }

customNameValidatorAsync(control: FormControl) : Promise<any> | Observable<any> {
  const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      if(this.forbiddenUserNames.indexOf(control.value)!==-1) {
        resolve({'nameIsForbidden': true});
      } else {
        resolve(null);
      }
    },1500)
  })

  return promise;
}

}

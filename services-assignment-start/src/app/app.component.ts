import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { UserService } from './UsersService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})
export class AppComponent {
}

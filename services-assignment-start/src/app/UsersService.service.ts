import { Injectable } from "@angular/core";

import { CounterService } from "./counter.service";

@Injectable()

export class UserService{
    constructor(private counterService: CounterService){}

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    onSetToInactive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.countActiveInactiveAction();
    }

    onSetToActive(id:number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.countInactiveActiveAction();
    }
}
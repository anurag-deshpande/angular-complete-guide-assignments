
export class CounterService{
    activeToInactive=0;
    inactiveToActive=0;

    countActiveInactiveAction(){
        this.activeToInactive++;
        console.log("Active to Inactive: ", this.activeToInactive);
    }

    countInactiveActiveAction(){
      this.inactiveToActive++;
      console.log("Inactive to active: ", this.inactiveToActive);
    }
}
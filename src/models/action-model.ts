export class Action {
    type: string;
    payLoad: any;
    
    constructor(type:string, date:Date){
      this.type = type;

      this.payLoad = {
        newState : date
      };
    }
  }
  
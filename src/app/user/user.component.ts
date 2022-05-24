import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  users =[
    {
      id:1,
      name:"nghia",
      age:10,
      email:"",
      phone:100
    }
    
  ]
  inputValues = {
    id:0,
    name:'',
    age:0,
    phone:0,
    email:''
    
  }
  dte(event:number){
  
 this.users =  this.users.filter(item=> item.id != event)
    

  }
  uploat(event:any){
    this.inputValues ={ ...this.users[event]};
  }
}

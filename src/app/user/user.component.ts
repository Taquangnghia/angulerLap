import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    },
    {
      id:2,
      name:"nghia222",
      age:10,
      email:"",
      phone:100
    }
    
  ]
  inputValues = {
    id:0,
    name:'',
    age:0,
     email:'',
    phone:0,
   
    
  }

  dte(id:number){
  
 this.users =  this.users.filter(item=> item.id !== id)
    

  }

  uploat(event:any){  
    
    this.inputValues =  { ...this.users[event]};
  }
  onSubmit(event:NgForm){
    const newUserIds = this.users
    .map(user => user.id) // lấy ra mảng mới chỉ có id
    .sort((a: number, b: number) => b - a); // sort các id đang có
  const maxId = newUserIds[0];
    const newID = this.inputValues.id;
    this.users.push({
      ...event.value, // lấy ra object value của form
      id: maxId + 1
    });
  
  }

 
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
@Input()   inputValues:any

@Output () handladSubmit : EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }
 
  
  onSubmit(userForm:NgForm) {
    this.handladSubmit.emit(userForm)
    // console.log(formData);
    // tìm id lớn nhất đang có để +1
   
  }
}

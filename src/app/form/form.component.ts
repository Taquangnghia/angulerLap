import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  inputValues={
    id:0,
    name:'',
    age:0,
    phone:0,
    email:""

  };

users =[
  {
    id:1,
    name:"nghia",
    age:10,
    email:"",
    phone:100
  }
  
]

  constructor() { }

  ngOnInit(): void {
  }
  // trung gian dữ liệu của file tsvs from
 curee = null;
  onSubmit(userForm:NgForm) {
    // console.log(formData);
    // tìm id lớn nhất đang có để +1
    const newUserIds = this.users 
    .map(users=>users.id) // lấy ra mảng mứi chỉ có id 
    .sort((a:number,b:number)=>b-a);
    const maxId =  newUserIds[0];
   if(this.curee==null ){
    this.users.push({
      ...userForm.value,
      id:maxId+1
    });
   }else{
     ///
    this.users.splice(this.curee,1,this.inputValues)
   }
   
    // cập nhật gt của inputvalues về dèal
    this.inputValues = {
      id:0,
      name:'',
      age:0,
      phone:0,
      email:''
      
    }
  }

  
  remove(id:number){
    alert("ban muon xoa ko")
    this.users = this.users.filter(item=>item.id !=id)
  }
  edit(index:any){
    this.curee = index;
    this.inputValues ={ ...this.users[index]};


  }
}

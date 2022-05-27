import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
@Input() users :any;
@Output () handleDelete : EventEmitter<number> = new EventEmitter<number>();
@Output () handUploat : EventEmitter<any> = new EventEmitter<any>();
  constructor() { 
   
  }

  ngOnInit(): void {
  }

  remove(id:number){

    this.handleDelete.emit(id);
    
    
 
  
  }
  edit(index:any){
  
  this.handUploat.emit(index)


  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent    {
  taskArray = [{taskName: 'Brush teeth' , isComplated: false}];
  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isComplated: false

    })

form.reset();


  }

  onDelete(index: number) {
    console.log(index);
    this.taskArray.splice(index, 1);
  }
onCheck(index: number) {
  console.log(this.taskArray);

  this.taskArray[index].isComplated =  !this.taskArray[index].isComplated;
}
}

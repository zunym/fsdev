import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {
title="TO DO"
@ViewChild('entryForm')
entryForm : NgForm;
priority:string[]=[];

  constructor() { }

  ngOnInit() {
  }

  Process(){
    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employeeDetail = [
    {id: '1', name: 'abc' , dept: 'CSE'},
    {id: '2', name: 'pqr' , dept: 'ME'},
    {id: '3', name: 'xyz' , dept: 'CE'}
  ]
}

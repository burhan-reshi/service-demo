import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
    employee = [
    {id: 1, name: 'abc' , dept: 'CSE'},
    {id: 2, name: 'pqr' , dept: 'ME'},
    {id: 3, name: 'xyz' , dept: 'CE'}
]

getemployee(){
    return this.employee
}
setEmployee(emp){
    this.employee.push(emp)

}
}
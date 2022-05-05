import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Array<Employee> = new Array<Employee>();
  id: number;
  error: boolean = false;

  exMessage: string = '';

  constructor(private empService: EmployeesService) { }

  ngOnInit(): void {
  }

  getEmployees() {
    this.employees = new Array<Employee>();
    this.exMessage = '';
    if (this.id) {
      this.empService.getEmployee(this.id)
        .subscribe({
          next: (resp) => {
            if (resp.data === null) {
              this.exMessage = 'No data found';
            } else {
              this.employees.push(resp.data);
            }
          },
          error: (err) => {
            this.exMessage = 'Internal error, please retry';
          }
        });
    } else {
      console.log('Id null');
      this.empService.getEmployees()
        .subscribe({
          next: (resp) => {
            if (resp.data === null) {
              this.exMessage = 'No data found';
            } else {
              this.employees = resp.data;
            }
          },
          error: (err) => {
            this.exMessage = 'Internal error, please retry';
          }
        });
    }
    this.id = undefined;
  }
}

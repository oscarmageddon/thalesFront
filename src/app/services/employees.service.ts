import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { EmployeeResponse } from '../interfaces/employee-response.interface';
import { EmployeesResponse } from '../interfaces/employees-response.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private getEmployeesUrl: string = environment.employeesUrl;
  private getEmployeeUrl: string = environment.employeeUrl;

  constructor( private http: HttpClient ) { }

  getEmployees(): Observable<EmployeesResponse> {
    return this.http.get<EmployeesResponse>(`${this.getEmployeesUrl}/`);
  }

  getEmployee(id: number): Observable<EmployeeResponse> {
    return this.http.get<EmployeeResponse>(`${this.getEmployeeUrl}` + id);
  }
}

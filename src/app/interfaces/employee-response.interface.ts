import { Employee } from "./employee.interface";
import { Resp } from "./resp.interface";

export interface EmployeeResponse extends Resp {
    data: Employee
}
import { Employee } from "./employee.interface";
import { Resp } from "./resp.interface";

export interface EmployeesResponse extends Resp {
    data: Array<Employee>
}
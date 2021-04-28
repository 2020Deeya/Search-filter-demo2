import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from './employee';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Employees: IEmployee[],searchValue:string): IEmployee[] {

    if(!Employees || !searchValue)
    return Employees;

    return Employees.filter(employee => 
      employee.empId.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      employee.empName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())  ||
      employee.empLocation.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      
      
      );
  }

  

}

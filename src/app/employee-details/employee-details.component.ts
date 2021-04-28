import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  Employees: IEmployee[];
  searchValue:string;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('/assets/Employees.json').subscribe((result:IEmployee[]) => {
    this.Employees=result;

    });
  }

}

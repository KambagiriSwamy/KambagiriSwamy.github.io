import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EmployeeService } from './_services/employee.service';

@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeeModule { }

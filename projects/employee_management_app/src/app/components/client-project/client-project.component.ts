import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ApiResponseModel, ClientProject, Employee } from '../../model/interface/baseModel';
import { environment } from '../../../environments/environment.development';
import { Client } from '../../model/class/Client';
import { HttpService } from '../../common/service/http.service';
import { Constant } from '../../constant/Constant';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule, UpperCasePipe, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", [Validators.required, Validators.minLength(4)]),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    leadByEmpId: new FormControl(""),
    completedDate: new FormControl(""),
    contactPerson: new FormControl(""),
    contactPersonContactNo: new FormControl(""),
    totalEmpWorking: new FormControl(""),
    projectCost: new FormControl(""),
    projectDetails: new FormControl(""),
    contactPersonEmailId: new FormControl(""),
    clientId: new FormControl(""),
  })

  clientObj: Client = new Client();
  clientList: Client[] = [];
  employeeList: Employee[] = [];
  projectList = signal<ClientProject[]>([])

  httpService = inject(HttpService)

  
  ngOnInit(): void {
    this.getAllClients()
    this.getAllEmployees()
    this.getAllClientProjects()
  }

  getAllClientProjects() {
    this.httpService.getMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT_PROJECTS).subscribe((response: ApiResponseModel) => {
      this.projectList.set(response.data);
    })
  }

  getAllClients() {
    this.httpService.getMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENTS).subscribe((response: ApiResponseModel) => {
      this.clientList = response.data;
    })

  }

  getAllEmployees() {
    this.httpService.getMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_EMPLOYEES).subscribe((response: ApiResponseModel) => {
      this.employeeList = response.data;
    })
  }


  onSaveProject() {

    const formValue = this.projectForm.value;

    // debugger;
    this.httpService.postMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.ADD_UPDATE_CLIENT_PROJECT, formValue).subscribe( (response: ApiResponseModel) => {
      if(response.result){
        alert("Project created/updated successfully");
        this.getAllClientProjects();
        this.clientObj = new Client();
      } else {
        alert(response.message)
      }
    },
    (error) => {
      alert("API error / Network down")
      console.error("Error fetching roles:", error);  // Handle errors
    });

  }

  onUpdateClientProject(data: ClientProject) {
    // this.projectForm.setValue()
  }

  onDeleteClientProject(id: number) {

    const isDelete = confirm("Are you sure you want to delete?")

    if (isDelete) {
      this.httpService.deleteMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.DELETE_CLIENT_PROJECT + id).subscribe((response: ApiResponseModel) => {
        if (response.result) {
          alert("Client deleted successfully")
          this.getAllClientProjects()
        } else {
          alert (response.message)
        }
      })
    }

  }


}

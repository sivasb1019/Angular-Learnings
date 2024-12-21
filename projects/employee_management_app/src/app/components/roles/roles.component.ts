import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiResponseModel, IRole } from '../../model/interface/baseModel';
import { HttpService } from '../../common/service/http.service'
import { environment } from '../../../environments/environment.development';
import { Constant } from '../../constant/Constant';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit{

  roleList: IRole [] = [];

  httpService = inject(HttpService)

  ngOnInit(): void {
    this.httpService.getMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_ROLES).subscribe((response: ApiResponseModel) => {
      this.roleList = response.data;
    },
    (error) => {
      alert("API error / Network down")
      console.error("Error fetching roles:", error);  // Handle errors
    });
  }

  // getAllRoles() {
  //   this.httpService.getMethod<ApiResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((response: ApiResponseModel) => {
  //     this.roleList = response.data;
  //   },
  //   (error) => {
  //     alert("API error / Network down")
  //     console.error("Error fetching roles:", error);  // Handle errors
  //   });

  // }





}

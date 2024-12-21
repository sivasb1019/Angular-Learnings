import { Component, inject, OnInit } from '@angular/core';
import { ApiResponseModel, IDesignation } from '../../model/interface/baseModel';
import { HttpService } from '../../common/service/http.service';
import { environment } from '../../../environments/environment.development';
import { Constant } from '../../constant/Constant';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  designationList: IDesignation[] = [];

  isLoader: boolean = true;

  httpService = inject(HttpService)

  ngOnInit(): void {
    this.httpService.getMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_DESIGNATION).subscribe((response: ApiResponseModel) => {
      this.designationList = response.data
      this.isLoader = false;

    },
    (error) => {
      alert("API error / Network down")
      console.error("Error fetching roles:", error);  // Handle errors
      this.isLoader = false;
    });
  }

}


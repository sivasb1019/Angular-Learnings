import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Client } from '../../model/class/Client';
import { HttpService } from '../../common/service/http.service';
import { environment } from '../../../environments/environment.development';
import { ApiResponseModel } from '../../model/interface/baseModel';
import { Constant } from '../../constant/Constant';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule, AlertComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  clientObj: Client = new Client();
  clientList: Client[] = [];

  httpService = inject(HttpService)

  loadClients() {
    this.httpService.getMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENTS).subscribe((response: ApiResponseModel) => {
      this.clientList = response.data;
    })

  }

  onSaveClient() {
    // debugger;
    this.httpService.postMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.ADD_UPDATE_CLIENT, this.clientObj).subscribe( (response: ApiResponseModel) => {
      if(response.result){
        alert("Client created/updated successfully");
        this.loadClients();
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

  onUpdateClient(client: Client) {
    this.clientObj = client;
  }

  onDeleteClient(id: number) {

    const isDelete = confirm("Are you sure you want to delete?")

    if (isDelete) {
      this.httpService.deleteMethod<ApiResponseModel>(environment.API_URL + Constant.API_METHOD.DELETE_CLIENT + id).subscribe((response: ApiResponseModel) => {
        if (response.result) {
          alert("Client deleted successfully")
          this.loadClients()
        } else {
          alert (response.message)
        }
      })
    }

  }

  ngOnInit(): void {
    this.loadClients()
  }

}

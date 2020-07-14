import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from 'app/shared/api.service';

@Component({
  selector: 'app-userplots',
  templateUrl: './userplots.component.html',
  styleUrls: ['./userplots.component.scss']
})
export class UserplotsComponent implements OnInit {
  isUserStanceLoading: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  userStance: any;

createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
    this.userStance = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}

getUserStancePlotFromService(username) {
  this.isUserStanceLoading = true;
  this.apiService.getUserStancePlot(username).subscribe(data => {
    this.createImageFromBlob(data);
    this.isUserStanceLoading = false;
  }, error => {
    this.isUserStanceLoading = false;
    console.log(error);
  });
}



}

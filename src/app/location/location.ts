import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-location',
  imports: [ReactiveFormsModule],
  templateUrl: './location.html',
  styleUrl: './location.css',
})
export class Location {
    LocationId=new FormControl();
    LocationName=new FormControl();
    LocationAddress=new FormControl();
    DocDigit=new FormControl();

    SaveLocation(){
      let CustomerId='11';
      let CompanyId='W003'
      let LocationId="";
      let Location_Name=this.LocationName.value;
      let Location_Address=this.LocationAddress.value;
      let Loc_Doc_Text=this.DocDigit.value;
      let OprFlag='Insert';

      const Input = {
                "CustomerID": CustomerId,
                "CompanyID": CompanyId,
                "LocationID": LocationId,
                "Location_Name": Location_Name,
                "Location_Address": Location_Address,
                "Loc_Doc_Text": Loc_Doc_Text,
                "OprFlg": OprFlag,
                "TableName": "Location"
            }

    }



}

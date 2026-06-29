import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Registration } from '../services/registration';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [ReactiveFormsModule,MatButtonModule,MatMenuModule,RouterLink],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  // Name = new FormControl();
  // Age = new FormControl();
  // City = new FormControl();
  // Designation = new FormControl();
  // //Create constructor for service
  // constructor(private register:Registration){}

  // registerUser(){
  //   let Name=this.Name.value;
  //   let Age=this.Age.value;
  //   let City=this.City.value;
  //   let Designation=this.Designation.value

  //   if(Name=="" || Name==undefined || Name==null){
  //     alert('Please enter Name')
  //   }

  //    if(Age=="" || Age==undefined || Age==null){
  //     alert('Please enter Age')
  //   }
  //    if(City=="" || City==undefined || City==null){
  //     alert('Please enter Name')
  //   }
  //    if(City=="" || City==undefined || City==null){
  //     alert('Please enter City')
  //   }

  //   const InputUserData={
  //       'Name':Name,
  //       'Age':Age,
  //       'City':City,
  //       'Designation':Designation
      
  //   }
  //   this.register.registration(InputUserData).subscribe(data=>{
  //     console.log(data);
      
  //   })


  // }

  constructor(private router:Router){}

  AddLocation(){
    this.router.navigate(['/Location']);
  }



}

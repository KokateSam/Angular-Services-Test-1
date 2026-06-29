import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validatelogin } from '../services/validatelogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  name = new FormControl();
  password = new FormControl();
  id = "";
  // loginform = new FormGroup({
  //   name: new FormControl(),
  //   password: new FormControl(),
  //   //company: new FormControl('Werardt Systemss')
  // })
  constructor(
    private getlogin: Validatelogin,
    private router: Router

  ) { };



  submit() {
    let username = this.name.value;
    let passw = this.password.value;

    if (username == null || username == undefined || username == "") {
      alert('please Enter Username')
      return;
    } else if (passw == null || passw == undefined || passw == "") {
      alert('Please Enter password..')
      return;
    } else {
      let encryptLoginUser = {
        LoginId: username,
        Password: passw,
        CompanyCode: "test"
      };
      //let formattedString = JSON.stringify(encryptLoginUser, null, 2).replace(/\n/g, '\r\n');
      //const Logindata=JSON.stringify(encryptLoginUser);


      // constructor(private getlogin:Validatelogin){};
      this.getlogin.loginValidate(encryptLoginUser).subscribe(data => {
        console.log(data);
        let opdata = JSON.parse(data);
        //console.log(opdata);

        debugger;
        if (opdata.Result != null) {
          if (opdata.Result == "Y" && opdata.Message == "User Exists") {

            let idata: any = {
              "LoginID": username,
              "Password": passw
            }
            localStorage.setItem("UserLoginInfo", idata);
            let userid = opdata.Value;
            // this.LoadCompanies(userid)
            this.processSignIn(idata);
          } else {
            alert('User does not exists.....! ');
          }
        }
        else {

          alert('No data found.')
          return

        }
      });
    }
  }
  processSignIn(idata: any) {
    let userid = idata.LoginID;
    let password = idata.Password;
    let CompanyCode = "W001"

    var ipUserInfo = {
      "LoginID": userid,
      "Password": password,
      "CompanyCode": CompanyCode
    };
    this.getlogin.Userlogin(ipUserInfo).subscribe(data => {
      debugger;
      console.log(data);
      let jsondata = JSON.parse(data);

      if (jsondata != null) {
        localStorage.setItem("TokanNo", jsondata.TokanNo);
        this.goToAdmin();
        alert('login successfully..');
      } else {

        alert('Error while sign in.');
      }
    });
  }

  goToAdmin() {
    this.router.navigate(['/Admin']);
  };


}

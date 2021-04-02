import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
idUtilisateur: any;
  mytoken = localStorage.getItem('Token');
  message: any;
  error_message: any;
      input = {
      idUtilisateur: ' ',
      };

  constructor(private LoginServices: LoginService ) {}
  ngOnInit() {
    this.verificationss()
  }
   verificationss(){
      this.LoginServices.verification(this.mytoken).subscribe((arg: any[]) => {
        this.idUtilisateur = arg['data'][0];
    });
  }
  deconection(){
     const onSuccess = response => {
       localStorage.clear();
 };
     const onError = response => {
  this.message = 'Erreur interne';
 };
     this.input.idUtilisateur = this.idUtilisateur;
     console.log(this.idUtilisateur);
     this.LoginServices.deconection(this.input).subscribe(onSuccess, onError);
  }
}

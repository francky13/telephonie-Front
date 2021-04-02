import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
Login = {
    nom: '',
    mdp: '',
  };
  results: null;
  message: any;
  constructor(private router: Router, private LoginServices: LoginService) { }
  Token = localStorage.getItem('Token');
  ngOnInit(): void {
    this.verification();
  }
seConnecter() {
    this.Login.nom = (document.getElementById('nom') as HTMLInputElement).value;
    this.Login.mdp = (document.getElementById('password') as HTMLInputElement).value;
    console.log(this.Login);
    const onSuccess = res => {
    this.results = res.data;
    this.message = 'Succes Confirmation';
    localStorage.setItem('Token', this.results);
    this.router.navigate(['/Historique']);
          };
    const onError = err => {
      this.message = 'Erreur interne';
      this.router.navigate(['/Historique']);
    };
    this.LoginServices.loginPost(this.Login).subscribe(onSuccess, onError);
  }
 verification(){
    if(this.Token !== null){
      this.router.navigate(['/Historique']);
    }
}
}

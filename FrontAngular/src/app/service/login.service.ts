import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsServiceService } from './tools-service.service';
import { url } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
results2: string;
 results: string;

  constructor(private http: HttpClient, private toolsServ: ToolsServiceService, private router: Router) { }
  loginPost(login){
    const options = this.toolsServ.formOption();
    return this.http.post(`${url}utilisateur/postToken`, login, options);
  }
   GetID(token){
    const link = `${url}utilisateur/Validation?token=${token}`;
    return this.http.get(link);
  }
    verfications(idUtilisateur){
  const onSuccess = res => {
        this.results2 = res.data;
          };
  const onError = err => {
   this.router.navigate(['/Login']);
    };
  this.GetID(idUtilisateur).subscribe(onSuccess, onError);
  return this.results2;
}
verification(idUtilisateur) : string{
  if(idUtilisateur === null){
  this.router.navigate(['/Login']);
  } else {
  this.results = this.verfications(idUtilisateur);
  }
  return this.results = this.verfications(idUtilisateur);
}
}




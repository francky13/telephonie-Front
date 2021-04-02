import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToolsServiceService } from './tools-service.service';
import { url } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
results2: any;
 results: any;

  constructor(private http: HttpClient, private toolsServ: ToolsServiceService, private router: Router) { }
  loginPost(login) {
    const options = this.toolsServ.formOption();
    return this.http.post(`${url}utilisateur/postToken`, login, options);
  }
   GetID(token) {
    const link = `${url}utilisateur/validationUtilisateur?tok=${token}`;
    return this.http.get(link);
  }
  deconection(id){
    const options = this.toolsServ.formOption();
    const link = `${url}utilisateur/deco`;
    console.log(this.http.post(link, id, options));
    return this.http.post(link, id, options);

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
verification(idUtilisateur): any{
  if(idUtilisateur === null){
    this.router.navigate(['/Login']);
  } else {
  this.results = this.GetID(idUtilisateur);
  }
  return this.results;
}
}




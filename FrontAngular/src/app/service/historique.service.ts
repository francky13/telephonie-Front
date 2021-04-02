import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private http: HttpClient) { }
  listeHistorique(idUtilisateur){
    let res;
    res = this.http.get(`${url}simulation/getHistorique?idUtilisateur='${idUtilisateur}'`);
    console.log(res);
    return res;
  }
}

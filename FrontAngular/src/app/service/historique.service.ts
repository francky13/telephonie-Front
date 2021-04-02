import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private http: HttpClient) { }
  listeHistorique(){
    return this.http.get(`${url}forfait/listeForfait`);
  }
}

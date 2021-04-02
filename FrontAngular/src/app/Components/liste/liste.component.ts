import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from 'src/app/service/historique.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  results = null;
  idUtilisateur = null;

  constructor( private HistoriqueServices: HistoriqueService,private LoginServices: LoginService  ) { }
  mytoken = localStorage.getItem('Token');
  ngOnInit(): void {
    this.verificationss();
  }
   verificationss(){
      this.LoginServices.verification(this.mytoken).subscribe((arg: any[]) => {
        this.idUtilisateur = arg['data'][0];
        this.listeHistorique(this.idUtilisateur)
    });
  }
    listeHistorique(idUtilisateur){
    this.HistoriqueServices.listeHistorique(idUtilisateur).subscribe((res: any[]) => {
      this.results = res['data'];

          });
  }

}

import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
 results = null;
  idUtilisateur = null;

  Token = localStorage.getItem('Token');
  constructor(private LoginServices: LoginService) { }

  ngOnInit(): void {
    this.verificationss();
  }
 verificationss(){
      this.idUtilisateur = this.LoginServices.verification(this.Token);
  }

}

import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from 'src/app/service/historique.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  results = null;

  constructor( private HistoriqueServices: HistoriqueService ) { }

  ngOnInit(): void {
  }
    listeHistorique(){
    this.HistoriqueServices.listeHistorique().subscribe((res: any[]) => {
      this.results = res['data'];
      console.log(this.results);
          });
  }
}

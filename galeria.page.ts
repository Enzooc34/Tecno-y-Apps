import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { PerrosService } from 'src/app/services/perros.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  templateUrl: 'galeria.page.html',
  styleUrls: ['galeria.page.scss'],
  standalone: true,
  imports: [IonHeader, RouterLink, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList],
})
export class GaleriaPage {
  private perrosService = inject(PerrosService);
  perros = this.perrosService.todas();
  nuevoTitulo = 'Colo-Colo'
}

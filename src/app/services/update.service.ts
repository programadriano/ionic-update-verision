import { Injectable } from '@angular/core';
import { Market } from '@ionic-native/market/ngx';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Versao } from '../models/versao';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(
    private market: Market,
    private appVersion: AppVersion,
    private alertController: AlertController,
    private http: HttpClient) { }

  verificarNovaVersao() {
    this.http.get<Versao>(`${environment.url}versao.json`).subscribe(async (info: Versao) => {
      const versao = await this.appVersion.getVersionNumber();

      if (info.habilitado && info.numeroDaVersao.split('.')[2] > versao.split('.')[2]) {

        const alert = await this.alertController.create({
          header: 'CONFIRMA',
          subHeader: '',
          message: `Tem uma nova versão na loja \n Deseja atualizar?`,
          buttons: [
            {
              text: 'Não',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => { }
            },
            {
              text: 'Sim',
              handler: async () => {
                this.market.open('com.rvappstudios.kids.coloring.book.color.painting');
              }
            }
          ]

        });

        alert.present();

      }
    });
  }
}

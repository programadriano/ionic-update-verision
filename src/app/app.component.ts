import { Component } from '@angular/core';
import { UpdateService } from './services/update.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private updateService: UpdateService) {
    this.updateService.verificarNovaVersao();
  }
}

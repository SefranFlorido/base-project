import { Component } from '@angular/core';
import { AppModule } from '../../../app.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AppModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  legalText: string =
    'Esta web ha sido creada por Sefran Florido. Se tienes alguna duda, sugerencia o petición, contacta con el propietario a través de sus redes sociales';

  constructor() {}

  ngOnInit() {}
}

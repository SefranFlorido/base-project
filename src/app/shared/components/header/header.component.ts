import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNGImportsModule } from '../primeng.module';
import { MENU_ITEMS } from '../../constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimeNGImportsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = MENU_ITEMS;
  }
}

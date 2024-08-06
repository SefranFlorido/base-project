import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LANGUAGE_ITEMS, MENU_ITEMS } from '../../constants';
import { AppModule } from '../../../app.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  menuItems: MenuItem[] = [];
  languageItems: MenuItem[] = [];
  darkMode: boolean = false;

  constructor() {}

  ngOnInit() {
    this.menuItems = MENU_ITEMS;
    this.languageItems = LANGUAGE_ITEMS;
  }

  handleChangeThemeMode(e: any) {
    this.darkMode = e.checked;
    //TODO: change general app mode, use a service
  }
}

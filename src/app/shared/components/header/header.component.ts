import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppModule } from '../../../app.module';
import { CommonService } from '../../../core/services/common.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AppModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[] = [];
  languageItems: MenuItem[] = [];
  darkMode: boolean = false;

  constructor(private commonServices: CommonService) {}

  ngOnInit() {
    this.menuItems = this.commonServices.getMenuItems();
    this.languageItems = this.commonServices.getLanguageItems();
  }

  handleChangeThemeMode(e: any) {
    this.darkMode = e.checked;
    this.commonServices.changeTheme(this.darkMode ? 'dark' : 'light');
  }
}

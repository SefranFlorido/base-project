import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AppModule } from '../../../app.module';
import { Router } from '@angular/router';
import { CommonService } from '../../../core/services/common.service';

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

  constructor(private router: Router, private commonServices: CommonService) {}

  ngOnInit() {
    this.menuItems = this.commonServices.getMenuItems();
    this.languageItems = this.commonServices.getLanguageItems();
  }

  handleChangeThemeMode(e: any) {
    this.darkMode = e.checked;
    //TODO: change general app mode, use a service
  }
}

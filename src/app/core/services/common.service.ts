import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {}

  private dataSource = new BehaviorSubject<any>(null);
  public serviceData = this.dataSource.asObservable();

  private MENU_ITEMS: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () => this.changeRoute(''),
    },
    {
      label: 'Servicios',
      icon: 'pi pi-star',
      command: () => this.changeRoute('services'),
    },
    {
      label: '¿Quién Soy?',
      icon: 'pi pi-id-card',
      items: [
        {
          label: 'Ámbito Profesional',
          icon: 'pi pi-briefcase',
          command: () => this.changeRoute('professional'),
        },
        {
          label: 'Ámbito Personal',
          icon: 'pi pi-user',
          command: () => this.changeRoute('personal'),
        },
      ],
    },
    {
      label: 'Maquetas',
      icon: 'pi pi-folder-open',
      items: [
        { label: 'Artículo', icon: 'pi pi-book' },
        { label: 'Formulario', icon: 'pi pi-align-left' },
        { label: 'Galería', icon: 'pi pi-images' },
        { label: 'APIs', icon: 'pi pi-server' },
        { label: 'Cajón desastre', icon: 'pi pi-box' },
      ],
    },
    {
      label: 'Contacto',
      icon: 'pi pi-address-book',
      command: () => this.changeRoute('contact'),
    },
  ];

  private LANGUAGE_ITEMS: MenuItem[] = [
    {
      label: 'ES',
      icon: 'c-icons es-icon',
      command: () => {
        this.changeLanguage('es');
      },
    },
    {
      label: 'EN',
      icon: 'c-icons en-icon',
      command: () => {
        this.changeLanguage('en');
      },
    },
  ];

  getMenuItems() {
    return this.MENU_ITEMS;
  }
  getLanguageItems() {
    return this.LANGUAGE_ITEMS;
  }

  changeLanguage(lang: string) {
    this.dataSource.next({ lang });
  }

  changeRoute(path: string) {
    this.router.navigate([path]);
  }

  changeTheme(themeStyle: string) {
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = `${themeStyle}-theme.css`;
    }
  }
}

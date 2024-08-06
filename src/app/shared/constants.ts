import { changeLanguage } from '../core/services/services';

export const MENU_ITEMS = [
  { label: 'Inicio', icon: 'pi pi-home' },
  { label: 'Servicios', icon: 'pi pi-star' },
  {
    label: '¿Quién Soy?',
    icon: 'pi pi-id-card',
    items: [
      { label: 'Ámbito Profesional', icon: 'pi pi-briefcase' },
      { label: 'Ámbito Personal', icon: 'pi pi-user' },
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
  { label: 'Contacto', icon: 'pi pi-address-book' },
];

export const LANGUAGE_ITEMS = [
  {
    label: 'ES',
    icon: 'c-icons es-icon',
    command: () => {
      changeLanguage('es');
    },
  },
  {
    label: 'EN',
    icon: 'c-icons en-icon',
    command: () => {
      changeLanguage('en');
    },
  },
];

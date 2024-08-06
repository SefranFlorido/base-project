import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SpeedDialModule } from 'primeng/speeddial';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    MenubarModule,
    ToggleButtonModule,
    InputSwitchModule,
    SpeedDialModule,
    ButtonModule,
  ],
  exports: [
    MenubarModule,
    ToggleButtonModule,
    InputSwitchModule,
    SpeedDialModule,
    ButtonModule,
  ],
  providers: [],
})
export class PrimeNGImportsModule {}

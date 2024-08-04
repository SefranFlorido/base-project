import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PrimeNGImportsModule } from './primeng.module';

@NgModule({
  declarations: [],
  imports: [
    PrimeNGImportsModule,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    PrimeNGImportsModule,
    FooterComponent,
    HeaderComponent
  ],
})
export class ComponentsModule {}

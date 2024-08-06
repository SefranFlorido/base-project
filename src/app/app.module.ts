import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrimeNGImportsModule } from './shared/components/primeng.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, PrimeNGImportsModule],
  exports: [CommonModule, FormsModule, PrimeNGImportsModule],
})
export class AppModule {}

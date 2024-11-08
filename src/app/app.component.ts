import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from './core/services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'Sefran Florido';
  private commonServiceSubscription!: Subscription;

  constructor(
    private translate: TranslateService,
    private commonService: CommonService
  ) {
    this.setAppLang(this.translate.getBrowserLang()!);
  }

  ngOnInit() {
    this.commonServiceSubscription = this.commonService.serviceData.subscribe(
      (data) => {
        if (data) {
          if (data.lang) {
            this.setAppLang(data.lang);
          }
        }
      }
    );
  }

  setAppLang(lang: string = 'es') {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  ngOnDestroy() {
    this.commonServiceSubscription.unsubscribe();
  }
}

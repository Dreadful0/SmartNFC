import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CookieModule } from 'ngx-cookie';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { NgJhipsterModule } from 'ng-jhipster';
import locale from '@angular/common/locales/en';

import * as moment from 'moment';
import { NgbDateAdapter, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from 'app/shared/util/datepicker-adapter';

import { fontAwesomeIcons } from './icons/font-awesome-icons';

@NgModule({
  imports: [
    HttpClientModule,
    CookieModule.forRoot(),
    NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-' }),
    NgJhipsterModule.forRoot({
      // set below to true to make alerts look like toast
      alertAsToast: false,
      alertTimeout: 5000
    })
  ],
  providers: [
    Title,
    {
      provide: LOCALE_ID,
      useValue: 'en'
    },
    { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter },
    DatePipe
  ]
})
export class SmartNfcCoreModule {
  constructor(iconLibrary: FaIconLibrary, private dpConfig: NgbDatepickerConfig) {
    registerLocaleData(locale);
    iconLibrary.addIconPacks(fas);
    iconLibrary.addIcons(...fontAwesomeIcons);
    this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
  }
}

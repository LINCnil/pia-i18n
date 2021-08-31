import { CommonModule, registerLocaleData } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PiaTranslateLoader } from './pia-translate-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

import localeBG from '@angular/common/locales/bg';
import localeEN from '@angular/common/locales/en';
import localeCS from '@angular/common/locales/cs';
import localeDA from '@angular/common/locales/da';
import localeDE from '@angular/common/locales/de';
import localeEL from '@angular/common/locales/el';
import localeES from '@angular/common/locales/es';
import localeET from '@angular/common/locales/et';
import localeFI from '@angular/common/locales/fi';
import localeFR from '@angular/common/locales/fr';
import localeHR from '@angular/common/locales/hr';
import localeHU from '@angular/common/locales/hu';
import localeIT from '@angular/common/locales/it';
import localeLT from '@angular/common/locales/lt';
import localeNB from '@angular/common/locales/nb';
import localeNL from '@angular/common/locales/nl';
import localePL from '@angular/common/locales/pl';
import localePT from '@angular/common/locales/pt';
import localeRO from '@angular/common/locales/ro';
import localeSL from '@angular/common/locales/sl';
import localeSV from '@angular/common/locales/sv';
import localeLV from '@angular/common/locales/lv';
import { TranslateService } from '@ngx-translate/core';

registerLocaleData(localeBG, 'bg');
registerLocaleData(localeEN, 'en');
registerLocaleData(localeCS, 'cz');
registerLocaleData(localeDA, 'dk');
registerLocaleData(localeDE, 'de');
registerLocaleData(localeEL, 'el');
registerLocaleData(localeES, 'es');
registerLocaleData(localeET, 'et');
registerLocaleData(localeFI, 'fi');
registerLocaleData(localeFR, 'fr');
registerLocaleData(localeHR, 'hr');
registerLocaleData(localeHU, 'hu');
registerLocaleData(localeIT, 'it');
registerLocaleData(localeLT, 'lt');
registerLocaleData(localeNL, 'nl');
registerLocaleData(localeNB, 'no');
registerLocaleData(localePL, 'pl');
registerLocaleData(localePT, 'pt');
registerLocaleData(localeRO, 'ro');
registerLocaleData(localeSL, 'sl');
registerLocaleData(localeSV, 'sv');
registerLocaleData(localeLV, 'lv');

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: PiaTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [TranslateService]
})
export class PiaI18nModule {
  static forRoot(): ModuleWithProviders<PiaI18nModule> {
    return {
      ngModule: PiaI18nModule
    };
  }
}

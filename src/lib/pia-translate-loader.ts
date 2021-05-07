import cz from './assets/i18n/cz.json';
import de from './assets/i18n/de.json';
import dk from './assets/i18n/dk.json';
import el from './assets/i18n/el.json';
import en from './assets/i18n/en.json';
import es from './assets/i18n/es.json';
import et from './assets/i18n/et.json';
import fi from './assets/i18n/fi.json';
import fr from './assets/i18n/fr.json';
import hr from './assets/i18n/hr.json';
import hu from './assets/i18n/hu.json';
import it from './assets/i18n/it.json';
import lt from './assets/i18n/lt.json';
import nl from './assets/i18n/nl.json';
import no from './assets/i18n/no.json';
import pl from './assets/i18n/pl.json';
import pt from './assets/i18n/pt.json';
import ro from './assets/i18n/ro.json';
import sl from './assets/i18n/sl.json';
import sv from './assets/i18n/sv.json';
import lv from './assets/i18n/lv.json';
import bg from './assets/i18n/bg.json';

import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class PiaTranslateLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      switch (lang) {
        case 'cz':
          observer.next(cz);
          break;
        case 'de':
          observer.next(de);
          break;
        case 'dk':
          observer.next(dk);
          break;
        case 'el':
          observer.next(el);
          break;
        case 'en':
          observer.next(en);
          break;
        case 'es':
          observer.next(es);
          break;
        case 'et':
          observer.next(et);
          break;
        case 'fi':
          observer.next(fi);
          break;
        case 'fr':
          observer.next(fr);
          break;
        case 'hr':
          observer.next(hr);
          break;
        case 'hu':
          observer.next(hu);
          break;
        case 'it':
          observer.next(it);
          break;
        case 'lt':
          observer.next(lt);
          break;
        case 'nl':
          observer.next(nl);
          break;
        case 'no':
          observer.next(no);
          break;
        case 'pl':
          observer.next(pl);
          break;
        case 'pt':
          observer.next(pt);
          break;
        case 'ro':
          observer.next(ro);
          break;
        case 'sl':
          observer.next(sl);
          break;
        case 'sv':
          observer.next(sv);
          break;
        case 'lv':
          observer.next(lv);
          break;
        case 'bg':
          observer.next(bg);
          break;
        default:
          observer.next(fr);
      }
      observer.complete();
    });
  }
}

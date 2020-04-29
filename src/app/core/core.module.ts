import { NgModule, InjectionToken, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CrudService } from './services/crud.service';
import { NotFoundModule } from './not-found';

export const API_ENDPOINT = new InjectionToken<string>('apiEndpoint', {
  providedIn: 'root',
  factory: () => environment.baseApiUrl
});

export const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

const coreServices: any[] = [
  {
    provide: externalUrlProvider,
    useValue: (route: ActivatedRouteSnapshot) => {
      const externalUrl = route.paramMap.get('externalUrl');
      window.open(externalUrl, '_self');
    },
  },
  CrudService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NotFoundModule,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        coreServices
      ]
    };
  }
}

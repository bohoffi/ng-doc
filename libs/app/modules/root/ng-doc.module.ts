import {OverlayModule} from '@angular/cdk/overlay';
import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgDocSearchEngine} from '@ng-doc/app/classes';
import {NgDocNavbarModule, NgDocSidebarModule} from '@ng-doc/app/components';
import {NgDocRootModule} from '@ng-doc/app/components/root';
import {NG_DOC_THEME} from '@ng-doc/app/tokens';
import {
	NgDocBooleanControlModule,
	NgDocNumberControlModule,
	NgDocStringControlModule,
	NgDocTypeAliasControlModule,
} from '@ng-doc/app/type-controls';

@NgModule({
	imports: [
		HttpClientModule,
		OverlayModule,
		/* Type controls */
		NgDocStringControlModule,
		NgDocNumberControlModule,
		NgDocBooleanControlModule,
		NgDocTypeAliasControlModule,
	],
	exports: [NgDocRootModule, NgDocNavbarModule, NgDocSidebarModule],
})
export class NgDocModule {
	static forRoot(): ModuleWithProviders<NgDocModule> {
		return {
			ngModule: NgDocModule,
			providers: [
				{provide: NgDocSearchEngine, useValue: new NgDocSearchEngine()},
				{provide: NG_DOC_THEME, useValue: {id: 'night', path: 'assets/themes/night.css'}, multi: true}
			],
		};
	}
}

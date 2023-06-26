import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './app-shared.module';
import { LoaderComponentModule } from '@components';

// Services
import { ApiService } from '@services';

@NgModule({
	declarations: [AppComponent],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		HttpClientModule,
		LoaderComponentModule,
		SharedModule,
	],
	providers: [ApiService, RouterModule],
	bootstrap: [AppComponent],
})
export class AppModule {}

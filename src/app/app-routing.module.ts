import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { HomeViewComponent, OrderViewComponent } from '@views';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeViewComponent,
	},
	{
		path: 'order/:id',
		pathMatch: 'full',
		component: OrderViewComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

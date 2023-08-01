import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Bundles
import { MaterialBundle } from '@imports';

// Components
import { OrderViewComponent } from './index.component';

// Modules
import { LogoModule, OrderStatusModule } from '@components';

@NgModule({
    declarations: [OrderViewComponent],
    imports: [CommonModule, LogoModule, MaterialBundle, OrderStatusModule],
    exports: [OrderViewComponent],
})
export class OrderViewModule {}

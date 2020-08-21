import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'

import { NgModule } from '@angular/core';

const modules: any[] = [
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})

export class AngularMaterialModule {}

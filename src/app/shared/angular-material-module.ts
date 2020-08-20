import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

const modules: any[] = [
    MatCardModule,
    MatToolbarModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})

export class AngularMaterialModule {}

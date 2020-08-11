import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

const modules: any[] = [
    MatCardModule
];

@NgModule({
    imports: [...modules],
    exports: [...modules]
})

export class AngularMaterialModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClarityModule } from "clarity-angular";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: '', component: HomeComponent }
]

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        ClarityModule.forChild(),
        CommonModule,
    ],
    exports: [
        RouterModule,
    ],
    providers: [

    ],
})

export class HomeModule { }
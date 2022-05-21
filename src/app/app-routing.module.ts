import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent }
];

/* Ici, on dit à Angular que les routes de ce fichier seront les routes à la racine de l'application,
   et on réexporte le routeur configuré. */
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
import { Routes } from '@angular/router';
import { MydeoComponent } from './mydeo/mydeo.component';
import { HomeComponent } from './home/home.component';
import { CitronellaComponent } from './citronella/citronella.component';
import { BenessereComponent } from './benessere/benessere.component';
import { NegozioComponent } from './negozio/negozio.component';
import { TermsComponent } from './terms/terms.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "mydeo", component: MydeoComponent},
    {path: "citronella", component: CitronellaComponent},
    {path: "benessere", component: BenessereComponent},
    {path: "negozio", component: NegozioComponent},
    {path: "termini", component: TermsComponent}
];

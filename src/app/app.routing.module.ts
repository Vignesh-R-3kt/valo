import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './components/main-body/agents/agents.component';
import { MapsComponent } from './components/main-body/maps/maps.component';
import { WeaponsComponent } from './components/main-body/weapons/weapons.component';
import { BundlesComponent } from './components/main-body/bundles/bundles.component';

const routes: Routes = [
    {
        path: "", redirectTo: 'agents', pathMatch: 'full'
    },
    {
        path: 'agents', component: AgentsComponent
    },
    {
        path: 'maps', component: MapsComponent
    },
    {
        path: 'weapons', component: WeaponsComponent
    },
    {
        path: 'bundles', component: BundlesComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
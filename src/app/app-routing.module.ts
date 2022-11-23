import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './features/pokelist/pokelist.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'pokelist',
        pathMatch: 'full',
    },
    {
        path: 'pokelist',
        children: [
            {
                path: '',
                component: PokelistComponent,
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

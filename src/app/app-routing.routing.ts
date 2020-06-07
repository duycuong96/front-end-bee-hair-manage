import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:  [
      {
        path: '',
        loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
      }
    ]
  },
];

export const AppRoutingRoutes = RouterModule.forRoot(routes);

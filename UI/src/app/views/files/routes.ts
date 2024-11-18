import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', // Default path for this module
    data: {
      title: 'files'
    },
    children: [
      {
        path: 'exp-fee-head',
        loadComponent: () => import('./exp-fee-head/exp-fee-head.component').then(m => m.ExpFeeHeadComponent),
        data: {
          title: 'Exp Fee Head'
        }
      },
      {
        path: 'create-staff',
        loadComponent: () => import('./create-staff/create-staff.component').then(m => m.CreateStaffComponent),
        data: {
          title: 'Create Staff'
        }
      }
    ]
  }
];

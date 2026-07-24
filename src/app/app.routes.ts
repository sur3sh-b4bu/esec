import { Routes } from '@angular/router';
import { Panel } from './layout/side-bar/panel/panel';
import { DisplayPage } from './layout/display-page/display-page';

export const routes: Routes = [
    {
        path: 'panel',
        component: Panel
    },
    {
        path: '',
        component: DisplayPage
    }
];

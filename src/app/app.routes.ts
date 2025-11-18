import { Routes } from '@angular/router';
// @ts-ignore
import { Home } from './home/home';
// @ts-ignore
import { Page1 } from './page1/page1';
// @ts-ignore
import { Page2 } from './page2/page2';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'page1', component: Page1 },
  { path: 'page2', component: Page2 },
];

import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: 'dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: 'orders', title: 'Orders', icon: 'query_builder', class: '' },
  { path: 'categories', title: 'Categories', icon: 'sort', class: '' },
  { path: 'tags', title: 'Tags', icon: 'label_outline', class: '' },
  { path: 'billing', title: 'Billing', icon: 'attach_money', class: '' },
  { path: 'user', title: 'Profile', icon: 'person', class: '' },
  { path: '/app/auth/logout', title: 'Logout', icon: 'directions_run', class: 'logout' }
];

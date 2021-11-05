import { NavbarItem } from '../models/navbar-item.model';

export const NAVBAR_CONFIG: NavbarConfig = {
  public: [
    {
      title:'Books',
      route:'home',
      id:'home'
    }
  ]
};

type NavbarConfig = { public: NavbarItem[] };

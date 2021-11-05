import { NavbarItem } from '../models/navbar-item.model';

export const NAVBAR_CONFIG: NavbarConfig = {
  public: [
    {
      title:'Books',
      route:'books',
      id:'books'
    }
  ]
};

type NavbarConfig = { public: NavbarItem[] };

import { MenuItem, Shop } from "../../../types";

export class PartySize {
  public shop: Shop;

  public menu: MenuItem[];

  constructor(shop: Shop, menu: MenuItem[]) {
    this.shop = shop;
    this.menu = menu;
  }
}

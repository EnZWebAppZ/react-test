export class Product {
  id: number;
  name: string;
  price: number;
  qty_s: number;
  qty_m: number;
  qty_l: number;
  qty_xl: number;
  created_at: string;
  updated_at: string;
  thumbnail_1: string;
  thumbnail_2: string;
  thumbnail_3: string;
  description: string;
  price_en: number;
  hello: string;
  removed_at: string;

  constructor(
    id: number = 0,
    name: string = '',
    price: number = 0,
    qty_s: number = 0,
    qty_m: number = 0,
    qty_l: number = 0,
    qty_xl: number = 0,
    created_at: Date | null = null,
    updated_at: Date | null =  null,
    thumbnail_1: string = '',
    thumbnail_2: string = '',
    thumbnail_3: string = '',
    description: string = '',
    price_en: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.qty_s = qty_s;
    this.qty_m = qty_m;
    this.qty_l = qty_l;
    this.qty_xl = qty_xl;
    this.created_at =
      (created_at === undefined || created_at == null) ? '' : created_at.toLocaleString();
    this.updated_at =
      (updated_at === undefined || updated_at == null) ? '' : updated_at.toLocaleString();
    this.thumbnail_1 = thumbnail_1;
    this.thumbnail_2 = thumbnail_2;
    this.thumbnail_3 = thumbnail_3;
    this.description = description;
    this.price_en = price_en;
  }
}

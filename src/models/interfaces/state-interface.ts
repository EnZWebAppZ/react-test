import { Product } from '../product-model';
import { Column } from '../column-model';
export interface State {
  name: string;
  columns: Column[];
  data: Product[];
}

import * as React from 'react';
import { Product } from '../models/product-model';
import { Column } from '../models/column-model';
import { State } from '../models/interfaces/state-interface';

import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';

import {
  Grid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-bootstrap4';

type Props = {
  namer: string;
};

const column: Column[] = Object.keys(
  new Product(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined)
  ).map(key => {
  return new Column(key, key.charAt(0).toUpperCase() + key.slice(1));
});

export class Grider extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state);
    state = {
      name: 'React',
      columns: column,
      data: [
        new Product(
          5,
          'Test Product',
          1700,
          4,
          5,
          5,
          5,
          new Date('2018-01-01 00:01:02'),
          new Date('2018-01-01 00:01:02'),
          'https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg',
          'https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg',
          'https://joannelht.files.wordpress.com/2013/01/clothing-accessories.jpg',
          'test',
          0.5151
        )
      ]
    };
    this.state = state;
    console.log(column);
    console.log(this.props.namer);
    console.log(state.data);
  }

  render() {
    return (
      <Grid rows={this.state.data} columns={this.state.columns}>
        <Table />
        <TableHeaderRow />
      </Grid>
    );
  }
}

export default Grider;

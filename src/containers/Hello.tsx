import * as React from 'react';

interface Props {
  name: number;
}

//export default ({ name }: Props) => <h1>Hello {name}!</h1>;
export class Hello extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    console.log(props.name);
  }
  render() {
    return <h1>Wrong Type -> {this.props.name}!</h1>;
  }
}

export default Hello;

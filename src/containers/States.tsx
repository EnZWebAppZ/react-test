import * as React from 'react';

interface PropsState {
  date: Date;
}

//export default ({ name }: Props) => <h1>Hello {name}!</h1>;
export class States extends React.Component<PropsState> {
  constructor(props: PropsState) {
    super(props);
    console.log(props.date);
  }
  render() {
    return(
      <React.Fragment>
       <h1>Prop State is : {this.props.date.toLocaleDateString()}!</h1>
      </React.Fragment>
   );
  }
}

export default States;

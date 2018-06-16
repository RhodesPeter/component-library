import React from 'react';
import { render } from 'react-dom';

const MyFirstComponent = () => {
  return (
    <div id="my-first-component">
      <MyTitle title="one" color="yellow"/>
      <MyTitle title="two" color="green"/>
      <MyTitle title="three" color="yellowGreen"/>
      <MyTitle title="four" color="greenYellow"/>
    </div>
  )
};

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={ {color: props.color} }>{props.title}</h1>
    </div>
  );
};

render(<MyFirstComponent/>, document.getElementById('app'));

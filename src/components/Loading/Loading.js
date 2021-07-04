import React from 'react';
import { Spinner, DoubleBounce1, DoubleBounce2 } from './Loading.styles';

const Loading = () => (
  <Spinner>
    <DoubleBounce1 />
    <DoubleBounce2 />
  </Spinner>
);

export default Loading;

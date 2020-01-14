import React from 'react';
import ReactDOM from 'react-dom';

import CubeDraftPage from 'components/CubeDraftPage';

const wrapper = document.getElementById('react-root');
const element = (
  <CubeDraftPage {...reactProps} />
);
if (wrapper) {
  if (wrapper.children.length === 0) {
    ReactDOM.render(element, wrapper);
  } else {
    ReactDOM.hydrate(element, wrapper);
  }
}

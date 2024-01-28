import React from 'react';
import {RemoveScroll} from 'react-remove-scroll';
function MapEmbed() {
  return (
    <div>
      <h1 className="heading">Real Time Traffic Updates</h1>
      <div>
      <removeScrollBar>
        <iframe
          title="Embedded Map"
          width="1500"
          height="850"
          loading="lazy"
          className="no-scroll"
          allowFullScreen
          src="https://www.embed-map.com/m.html?id=1890"

        ></iframe>
        </removeScrollBar>
      </div>
    </div>
  );
}

export default MapEmbed;
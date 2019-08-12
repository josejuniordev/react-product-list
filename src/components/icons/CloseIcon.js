import React from "react";

const CloseIcon = props => (
  <svg width="1em" height="1em" {...props}>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        d="M2 14L14 2M2 2l12 12"
      />
    </g>
  </svg>
);

export default CloseIcon;

import React from 'react';
import { ReactLenis } from 'lenis/react';

function SmoothScrolling({ children }) {
  // lenis options for a butter-smooth feel
  const lenisOptions = {
    lerp: 0.1, // Smoothness of the scroll: lower is smoother but heavier
    duration: 1.5, // Time for one scroll step
    smoothWheel: true, // Enables smooth scrolling for mouse wheels
    syncTouch: true, // Syncs touch scroll with the standard scroll behavior (useful for mobile)
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;

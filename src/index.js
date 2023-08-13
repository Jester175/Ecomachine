import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber'
import { Spinner } from './components/Spinner';

import './index.css';
import { Experience } from './Experience';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Canvas
    shadows
    gl={{ antialias: true }}
    camera={{ far: 200, near: 0.1, fov: 45, position: [-1.3, 0.4, 0] }}
  >
    <Suspense fallback={<Spinner />}>
      <Experience />
    </Suspense>
  </Canvas>
);

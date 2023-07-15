import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls} from '@react-three/drei';

const  App = () => {
  const [size, setSize] = useState([1,1,1])
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{display: 'flex', gap: 5, flexDirection: 'column', width: '200px' }}>
        <input 
          type='number' 
          placeholder='height' 
          onChange={(e) => {
            let arr = [...size]
            arr[0] = e.target.value
            setSize(arr)
          }}
        />
        <input 
          type='number' 
          placeholder='width' 
          onChange={(e) => {
            let arr = [...size]
            arr[1] = e.target.value
            setSize(arr)
          }}
        />
        <input 
          type='number' 
          placeholder='depth' 
          onChange={(e) => {
            let arr = [...size]
            arr[2] = e.target.value
            setSize(arr)
          }}
        />
      </div>
      <Canvas>
        <ambientLight intensity={0.1} />
        <OrbitControls />
        <mesh>
          <boxGeometry args={size} color='blue'/>
          <meshStandardMaterial />
        </mesh>
        </Canvas>
    </div>
  );
}

export default App;
import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const MyModel = () => {
  const ref = useRef();
  const url = './models/robot/phantoms-transformed.glb'; // Update with your model path

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, (gltf) => {
      // Assuming the loaded model has a structure similar to this:
      const { nodes, materials } = gltf.scene;

      // Set the geometry and material of the mesh
      ref.current.geometry = nodes.YourGeometryName.geometry; // Replace with actual geometry name
      ref.current.material = materials.YourMaterialName; // Replace with actual material name

      // Optional: set additional properties like position or rotation
      ref.current.position.set(0, 0, 0);
      ref.current.rotation.set(0, 0, 0);
    });
  }, [url]);

  return (
    <mesh ref={ref} castShadow receiveShadow>
      {/* You can also include children or other props here */}
    </mesh>
  );
};

const App = () => (
  <Canvas shadows>
    <MyModel />
  </Canvas>
);

export default MyModel;

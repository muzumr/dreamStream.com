/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 badMan.glb --transform 
*/

import React, { useRef, useLayoutEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import { SkeletonUtils } from 'three-stdlib';
import { useGraph } from '@react-three/fiber';

export function Robot(props) {
  const group = useRef();
  const { scene } = useGLTF('./models/robot/badMan-transformed.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const scroll = useScroll();
  const tl = useRef();

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 2, ease: 'power1.inOut' } });

    tl.current
      .to(group.current.rotation, { y: -1 }, 2)
      .to(group.current.position, { x: 1 }, 2)
      .to(group.current.rotation, { y: 1 }, 6)
      .to(group.current.position, { x: -1 }, 6)
      .to(group.current.rotation, { y: 0 }, 11)
      .to(group.current.rotation, { x: 1 }, 11)
      .to(group.current.position, { x: 0 }, 11)
      .to(group.current.rotation, { y: 0 }, 13)
      .to(group.current.rotation, { x: -1 }, 13)
      .to(group.current.position, { x: 0 }, 13)
      .to(group.current.rotation, { y: 0 }, 16)
      .to(group.current.rotation, { x: 0 }, 16)
      .to(group.current.position, { x: 0 }, 16)
      .to(group.current.rotation, { y: 0 }, 20)
      .to(group.current.rotation, { x: 0 }, 20)
      .to(group.current.position, { x: 0 }, 20);
  }, []);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.001} // Adjusted the scale to make it smaller.
      position={[0, -0.5, 0]} // Adjust position to center the robot better.
      rotation={[0, 6.3, 0]} // Adjusted to face forward towards the screen.
    >
      <group name="Sketchfab_Scene">
        <group name="RootNode">
          <group name="Empty" position={[-0.21, 0.16, 0.37]} />
          <group name="Kosti" position={[-0.21, 0.16, 0.37]} rotation={[-Math.PI / 2, 0, 0]} scale={200}>
            <group name="Object_7">
              <primitive object={nodes._rootJoint} />
              <skinnedMesh
                name="Object_10"
                geometry={nodes.Object_10.geometry}
                material={materials.Material}
                skeleton={nodes.Object_10.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./models/robot/badMan-transformed.glb');

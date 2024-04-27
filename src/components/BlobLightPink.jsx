import { MeshDistortMaterial } from "@react-three/drei";

const BlobLightPink = () => {

  return (
    <>
      <group>
          <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={.9}
              transparent
              distort={.5}
              speed={1}
              color={"#FFEDF4"}
            />
          </mesh>
      </group>
    </>
  )
};

export default BlobLightPink;

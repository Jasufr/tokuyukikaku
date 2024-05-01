import { MeshDistortMaterial } from "@react-three/drei";

const BlobGreen = () => {

  return (
    <>
      <group>
          <mesh position={[0, 0, 0]} scale={[1, 1, 1]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={.9}
              transparent
              distort={.5}
              speed={1.2}
              color={"#2FAD41"}
            />
          </mesh>
      </group>
    </>
  )
};

export default BlobGreen;

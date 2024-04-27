import { MeshDistortMaterial } from "@react-three/drei";

const BlobDarkPink = () => {

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
              color={"#ED0066"}
            />
          </mesh>
      </group>
    </>
  )
};

export default BlobDarkPink;

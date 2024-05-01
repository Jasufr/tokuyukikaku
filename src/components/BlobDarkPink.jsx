import { MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const BlobDarkPink = () => {
  const { viewport } = useThree()
  return (
    <>
      <group>
        <mesh
          // {...props}
          // position={[0, 0, 0]}
          // scale={[1, 1, 1]}
          scale={(viewport.width / 5)}
        >
          <sphereGeometry />
          <MeshDistortMaterial
            opacity={.9}
            transparent
            distort={0.4}
            speed={0.5}
            color={"#ED0066"}
          />
        </mesh>
      </group>
    </>
  )
};

export default BlobDarkPink;

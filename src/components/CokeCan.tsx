import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const metalMaterial = new THREE.MeshStandardMaterial({
    roughness: 0.3,
    metalness: 1,
    color: "#bbbbbb",
});

export function CokeCan({ cokeTaste }: { cokeTaste: string }) {
    const { nodes } = useGLTF("/can/Soda-can.gltf");
    const label = useTexture(`/labels/${cokeTaste}.png`);
    label.flipY = false;
    return (
        <group dispose={null} scale={2} rotation={[0, -Math.PI, 0]}>
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.cylinder as THREE.Mesh).geometry}
                material={metalMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}>
                <meshStandardMaterial
                    roughness={0.25}
                    metalness={0.7}
                    map={label}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Tab as THREE.Mesh).geometry}
                material={metalMaterial}
            />
        </group>
    );
}

useGLTF.preload("/can/Soda-can.gltf");

import { Float } from "@react-three/drei";
import { CokeCan } from "./CokeCan";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";

type FloatingCanProps = {
    cokeTaste: string;
    children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
    ({ cokeTaste, children, ...props }, ref) => {
        return (
            <group ref={ref} {...props}>
                <Float>
                    <CokeCan cokeTaste={cokeTaste} />
                </Float>
            </group>
        );
    }
);

export default FloatingCan;

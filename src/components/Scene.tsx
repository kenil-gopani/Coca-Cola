import { useRef } from "react";

import { Environment } from "@react-three/drei";
import FloatingCan from "./FloatingCan";
import { Group } from "three";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Scene = () => {
    const canRef = useRef<Group>(null);
    const canTwoRef = useRef<Group>(null);
    const canThreeRef = useRef<Group>(null);
    const canGroupRef = useRef<Group>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(max-width: 1240px)", () => {
            if (
                !canRef.current ||
                !canTwoRef.current ||
                !canThreeRef.current ||
                !canGroupRef.current
            )
                return;
            // gsap.set(canRef.current.rotation, { z: -0.25 });
            gsap.set(canRef.current.position, { z: 0.5 });
            gsap.set(canTwoRef.current.position, { y: -5 });
            gsap.set(canThreeRef.current.position, { y: -5 });

            const canTimeline = gsap.timeline({
                defaults: {
                    duration: 5,
                    ease: "back.out(2)",
                },
            });
            canTimeline.from(canRef.current.position, { y: 5, x: 1 }, 1);

            const lastSectionMobileTimeline = gsap.timeline({
                defaults: {
                    delay: 0.1,
                },
                scrollTrigger: {
                    trigger: "#fifth-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            lastSectionMobileTimeline
                .to(canRef.current.position, { z: -2 }, 0)
                .to(canRef.current.rotation, { z: 0.25, y: -0.5 }, 0)
                .to(
                    canTwoRef.current.position,
                    {
                        y: 2.9,
                        x: 0.75,
                        z: -2.4,
                    },
                    0
                )
                .to(canTwoRef.current.rotation, { z: -0.25, y: -2.5 }, 0)
                .to(
                    canThreeRef.current.position,
                    {
                        y: 2.8,
                        x: -0.75,
                        z: -3.2,
                    },
                    0
                )
                .to(canThreeRef.current.rotation, { z: 0.25, y: -2 }, 0);
        });

        mm.add("(min-width: 1241px", () => {
            if (
                !canRef.current ||
                !canTwoRef.current ||
                !canThreeRef.current ||
                !canGroupRef.current
            )
                return;
            gsap.set(canRef.current.rotation, { z: -0.25 });
            gsap.set(canRef.current.position, { z: 0.5 });
            gsap.set(canTwoRef.current.position, { y: -5 });
            gsap.set(canThreeRef.current.position, { y: -5 });

            const canTimeline = gsap.timeline({
                defaults: {
                    duration: 5,
                    ease: "back.out(2)",
                },
            });
            canTimeline.from(canRef.current.position, { y: 5, x: 1 }, 1);

            const scrollTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#second-section",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
            });

            scrollTimeline
                .to(canGroupRef.current.rotation, { y: Math.PI * -1.5 }, 0)
                .to(canRef.current.rotation, { y: -2.25 }, 0)
                .to(canRef.current.position, { z: 1.25 }, 0);

            const moveToThirdSection = gsap.timeline({
                defaults: {
                    delay: 0.1,
                },
                scrollTrigger: {
                    trigger: "#third-section",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
            });

            moveToThirdSection
                .to(canRef.current.position, { z: -1.25, ease: "none" }, 0)
                .to(canRef.current.rotation, { x: -0.35, ease: "none" }, 0);

            const moveToLastSection = gsap.timeline({
                defaults: {
                    delay: 0.1,
                },
                scrollTrigger: {
                    trigger: "#fourth-section",
                    start: "top bottom",
                    end: "top top",
                    scrub: true,
                },
            });

            moveToLastSection
                .to(canRef.current.position, { z: 1, ease: "none" }, 0)
                .to(canRef.current.rotation, { x: 0, ease: "none" }, 0);

            const reverseScrollTimeline = gsap.timeline({
                defaults: {
                    delay: 0.1,
                },
                scrollTrigger: {
                    trigger: "#fifth-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
            reverseScrollTimeline
                .to(canGroupRef.current.rotation, { y: Math.PI }, 0)
                .to(canRef.current.rotation, { y: 0, z: -0.25 }, 0)
                .to(canRef.current.position, { y: 0.4, z: -0.5 }, 0);

            const showSecondAndThirdCanTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: "#fifth-section",
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: true,
                },
            });

            showSecondAndThirdCanTimeline
                .to(canTwoRef.current.position, { y: 0.2, x: 1.25, z: 0.25 }, 0)
                .to(canTwoRef.current.rotation, { y: -0.65, z: 0.2 }, 0)
                .to(
                    canThreeRef.current.position,
                    { y: 0.2, x: -1.25, z: -0.75 },
                    0
                )
                .to(canThreeRef.current.rotation, { y: -0.65, z: 0.2 }, 0);
        });
    });

    return (
        <group ref={canGroupRef}>
            <FloatingCan ref={canRef} cokeTaste="vanilla" />
            <FloatingCan ref={canTwoRef} cokeTaste="original" />
            <FloatingCan ref={canThreeRef} cokeTaste="zero" />
            <Environment
                files="/hdr/lebombo_1k.hdr"
                environmentIntensity={1.25}
            />
        </group>
    );
};

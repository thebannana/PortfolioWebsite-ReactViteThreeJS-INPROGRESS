import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../Components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../Components/CanvasLoader.jsx";
import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";


const Hero = () => {
    const controls = useControls('HackerRoom', {
        positionX:{
            value:2.5,
            min:-10,
            max:10
        },
        positionY:{
            value:2.5,
            min:-10,
            max:10
        },
        positionZ:{
            value:2.5,
            min:-10,
            max:10
        },
        rotationX:{
            value:0,
            min:-10,
            max:10
        },
        rotationY:{
            value:0,
            min:-10,
            max:10
        },
        rotationZ:{
            value:0,
            min:-10,
            max:10
        },
        scale:{
            value:1,
            min:0,
            max:10
        }
    })
    const isMobile = useMediaQuery({maxWidth:768});
    const isTablet = useMediaQuery({minWidth:768,maxWidth:1024});
    const isSmall = useMediaQuery({maxWidth:440});

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, my name is Denis<span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Building products & brands</p>
                <div className="w-full h-full absolute inset-0">
                    <Leva/>
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader/>}>
                        <PerspectiveCamera makeDefault={true} position={[0,0,30]}/>
                        <HackerRoom
                            // scale={0.07}
                            // position={[0,0,0]}
                            // rotation={[0,0,0]}
                            position={[0.9,-8.7,-10]}
                            rotation={[0.4,3.2,0]}
                            scale={isMobile ? 0.07 : 0.1}/>
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.1} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
export default Hero

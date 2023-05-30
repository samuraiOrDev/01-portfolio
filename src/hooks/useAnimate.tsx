import { useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
type AnimateHeroBanner = {
  translateX?: number;
  translateY?: number;
  opacity: number;
  transition: {
    duration: number;
    delay: number;
    ease: number[];
  };
};
type AnimateInitialState = {
  translateX?: number;
  translateY?: number;
  opacity: number;
};
export interface RefUseAnimate {
  ref: (node?: Element | null | undefined) => void;
}
export const useAnimate = (animateHeroBanner: AnimateHeroBanner, animateInitialState: AnimateInitialState ) => {
  const controls = useAnimation();
  const [ ref, inView ]= useInView({triggerOnce: false});
  useEffect(() => {
    inView
      ? controls.start(animateHeroBanner)
      : controls.start(animateInitialState);
  }, [controls, inView]);
  return [ ref, controls ];
};

import { easeIn } from "framer-motion";

export const bounceVariant = {
    hidden: {
        scale: 0,
        opacity: 0,
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 10,
            bounce: 0.5,
        },
    },
};


export const inViewVariant = {
    hidden: {
        opacity: 0,
        translateY: "100px",
    },
    inView: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 0.6,
            easings: easeIn,
        },
    }
}
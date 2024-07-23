import {motion, useScroll, useTransform} from "framer-motion";

import styles from "./page.module.scss";

export default function Home() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2000], [0, -1000]);
    const opacity = useTransform(scrollY, [0, 1000], [1, 0]);
    const opacity2 = useTransform(scrollY, [0, 1000], [0, 1]);

    return (
        <main className={styles.main}>
            <motion.div
                className={styles.card1}
                style={{
                    opacity: opacity,
                    y: y
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10%',
                    width: '100px',
                    height: '50vh',
                    backgroundColor: 'red',
                    opacity: opacity2,
                    y: y
                }}
            />
        </main>
    );
}

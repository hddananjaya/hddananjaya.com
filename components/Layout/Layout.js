import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';
import { motion } from 'framer-motion';



const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.navBarHolder}>
        <div className={styles.mainContainer}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.mainContainer} ${styles.contentArea}`}>
        <motion.div
          animate={{
            opacity: 1,
            y: 0,
            x: 0
          }}
          initial={{
            opacity: 0,
            y: -100
          }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default Layout;
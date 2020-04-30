import styles from './Navbar.module.css';
import { useRouter } from "next/router";
import Link from 'next/link';
import {
  FaGithub,
  FaWordpress,
  FaLinkedinIn,
  FaEnvelope
} from 'react-icons/fa';


const routes = [
  // {
  //   path: '/',
  //   navTitle: 'About',
  // },
  {
    path: '/',
    navTitle: 'Projects',
  },
  {
    path: '/infosec',
    navTitle: 'InfoSec',
  }
];

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <div className={styles.profile}>
          <img className={styles.proImg} src="https://secure.gravatar.com/avatar/ef278438f283abdaf37b61f1592ae866?s=160&d=identicon&r=g"></img>
          <h4 className={styles.proName}>HD Dananjaya</h4>
        </div>
      </div>
      <div>
        <ul className={styles.navbar}>
          {
            routes.map((route) => {
              return (
                <Link key={route.path} href={route.path}>
                  <li className={`${styles.navitem} ${router.pathname == route.path ? styles.activeItem : ""}`} >
                    {route.navTitle}
                  </li>
                </Link>
              );
            })
          }
        </ul>
      </div>
      <div className={styles.right}>
        <a href="https://github.com/hddananjaya" target="_blank">
          <FaGithub size={20} className={styles.socialIcon} />
        </a>
        <a href="https://hddananjaya.wordpress.com" target="_blank">
          <FaWordpress size={20} className={styles.socialIcon} />
        </a>
        <a href="https://www.linkedin.com/in/hd-dananjaya/" target="_blank">
          <FaLinkedinIn size={20} className={styles.socialIcon} />
        </a>
        <a href="mailto:akiladananjaya79@gmail.com" target="_blank">
          <FaEnvelope size={20} className={styles.socialIcon} />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
// import Image from "next/image";
import styles from './page.module.css';

import Button from '@/components/button';

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <h1>Home Page</h1>
      <Button type='button' variant='btn-yellow'>
        adfadsfa
      </Button>
    </section>
  );
}

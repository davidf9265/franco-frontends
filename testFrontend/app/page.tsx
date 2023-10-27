// import Box1 from '../components/box1/box1';

import { Box1 } from '@franco-fronts/nextBoxesLib';

import styles from './page.module.css';

export default async function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Box1>Hello</Box1>
        </div>
      </div>
    </div>
  );
}

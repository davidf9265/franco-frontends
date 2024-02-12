// import Box1 from '../components/box1/box1';

import { Box1 } from '@franco-fronts/nextBoxesLib';

// import { Box1 } from '../../dist/nextBoxesLib';

// import { Box1 } from '@francoorg/boxeslib';

// import { Box2 } from '@francoorg/box2';

import { Box2 } from '@francoorg/box2';
import styles from './page.module.css';

export default async function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Box2>Hello</Box2>
        </div>
      </div>
    </div>
  );
}

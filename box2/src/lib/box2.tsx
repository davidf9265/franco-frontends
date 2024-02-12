// import styles from './box2.module.css';

// /* eslint-disable-next-line */
// export interface Box2Props {}

// export function Box2(props: Box2Props) {
//   return (
//     <div className={styles['container']}>
//       <h1>Welcome to Box2!</h1>
//     </div>
//   );
// }

// export default Box2;

import styles from './box2.module.css';

export interface Box2Props {
  children: React.ReactNode;
}

export function Box2(props: Box2Props) {
  return (
    <div className={styles['box']}>
      <div className={styles['card']}>
        <div className={styles['card-header']}>
          <h1>A box!</h1>
        </div>
        <div className={styles['card-body']}>
          <div className={styles['row']}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Box2;

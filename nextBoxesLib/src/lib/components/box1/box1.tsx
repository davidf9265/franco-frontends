import styles from './box1.module.css';

export interface Box1Props {
  children: React.ReactNode;
}

export function Box1(props: Box1Props) {
  return (
    <div className={styles.box}>
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

export default Box1;

import styles from './nextBoxesLib.module.css';

/* eslint-disable-next-line */
export interface NextBoxesLibProps {}

export function NextBoxesLib(props: NextBoxesLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NextBoxesLib!</h1>
    </div>
  );
}

export default NextBoxesLib;

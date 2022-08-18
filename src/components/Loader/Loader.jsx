import styles from './Loader.module.css';
import { FallingLines } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={styles.item}>
      <FallingLines ariaLabel="loading-indicator" width={20} />
    </div>
  );
}

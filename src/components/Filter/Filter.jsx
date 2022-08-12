import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterItems, getFilterValue } from 'redux/contactsSlice';

export default function Filter() {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(filterItems(e.currentTarget.value));
  };

  return (
    <div>
      <p className={styles.filter__text}>Find contacts by name</p>
      <input className={styles.filter} onChange={changeFilter} value={filter} />
    </div>
  );
}

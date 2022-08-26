import { useSelector, useDispatch } from 'react-redux';
import { filterItems, getFilterValue } from 'redux/filterSlice';
import { InputAdornment, TextField } from '@mui/material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function Filter() {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterItems(e.target.value));
  };

  return (
    <div>
      <TextField
        value={filter}
        onChange={changeFilter}
        label="Find contacts by name"
        variant="filled"
        sx={{ width: 400 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddIcCallIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

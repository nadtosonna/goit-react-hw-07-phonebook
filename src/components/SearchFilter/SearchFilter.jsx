import { AiOutlineFileSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-actions';
import { getFilter } from '../../redux/selectors';
import css from './SearchFilter.module.css';

export const SearchFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    const handleChange = (event) => {
        const { value } = event.target;
        dispatch(setFilter(value));
    }

    return (
        <div className={css.filter}>
            <input
                className={css.input}
                type="text"
                name="search"
                value={filter}
                onChange={handleChange}
                placeholder="Enter contact name..."
                required
            />
            <label htmlFor="search" className={css.label}>Search contacts</label>
            <AiOutlineFileSearch size={36} />
        </div>
    )
}
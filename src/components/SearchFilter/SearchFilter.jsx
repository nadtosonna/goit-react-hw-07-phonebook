import { AiOutlineFileSearch } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-slice';
import { getFilter } from '../../redux/selectors';
import css from './SearchFilter.module.css';

export const SearchFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    
    const handleSearchFilter = event => {
        dispatch(filterContacts(event.target.value))
    }

    return (
        <div className={css.filter}>
            <input
                className={css.input}
                type="text"
                name="search"
                value={filter}
                onChange={handleSearchFilter}
                placeholder="Enter contact name..."
                required
            />
            <label htmlFor="search" className={css.label}>Search contacts</label>
            <AiOutlineFileSearch size={36} />
        </div>
    )
}
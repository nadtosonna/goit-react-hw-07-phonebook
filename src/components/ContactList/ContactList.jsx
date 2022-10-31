import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, removeContact }) => {
    const filter = useSelector(getFilter);

    const filterContacts = () => {
        return (
            contacts && contacts.filter(contact =>
                contact.name.toLowerCase()
                    .includes(filter.toLowerCase()) || contact.number.includes(filter))
        );
    };

    const filteredContacts = filterContacts();

    const elements = filteredContacts?.map(({ id, name, number, avatar }) => (
        <li key={id} id={id} className={css.item}>
            <img src={avatar} alt="" className={css.img} />
            <p className={css.contact}>{`${name}: ${number}`}</p>
            <button onClick={() => removeContact(id)} className={css.delBtn}>
                <AiOutlineMinusCircle size={30} />
            </button>
        </li>
    ));

    return (
        <ul className={css.contactList}>
            {elements}
        </ul>
    );
};
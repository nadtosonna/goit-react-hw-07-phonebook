import { AiOutlineMinusCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-slice';
import css from './ContactList.module.css';
import Avatar from 'react-avatar';

export const ContactList = ({ contacts }) => {

    const dispatch = useDispatch();

    return (
        <ul className={css.contactList}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} id={contact.id} className={css.item}>
                        <Avatar name={contact.name} round={true} size="35"/>
                        <p className={css.contact}>{`${contact.name}: ${contact.number}`}</p>
                        <button onClick={() => {
                            dispatch(deleteContact(contact.id));
                        }} className={css.delBtn}>
                            <AiOutlineMinusCircle size={30} />
                        </button>
                    </li>
                )
            })
        }
        </ul>
    )
};
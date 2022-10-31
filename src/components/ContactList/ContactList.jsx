import { AiOutlineMinusCircle } from 'react-icons/ai';
import css from './ContactList.module.css';
import Avatar from 'react-avatar';

export const ContactList = ({ contacts, removeContact }) => {
    const elements = contacts?.map(({ id, name, number }) => (
        <li key={id} id={id} className={css.item}>
            <Avatar name={name} round={true} size="35" />
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
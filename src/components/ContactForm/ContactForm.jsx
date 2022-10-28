import { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contacts/contacts-slice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const initialState = {
    name: '',
    number: '',
}
    const [state, setState] = useState(initialState);

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleAddContact = contact => {
        dispatch(addContact(contact));
    };

    const handleSubmit = event => {
        event.preventDefault();

        const existingName = contacts.find(contact =>
            contact.name.toLowerCase() === state.name.toLowerCase());
        const existingNumber = contacts.find(contact => contact.number === state.number);

        if (existingName || existingNumber) {
            Notify.failure('This contact is already existing in the phonebook!', {
                position: 'center-top',
                width: '380px',
                distance: '30px',
            });
            return;
        };

        handleAddContact(state);
        setState(initialState);
    };

    const handleChange = event => {
        const { name, value } = event.currentTarget;
        setState((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.wrapper}>
                <div className={css.nameBlock}>
                    <input
                        value={state.name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        className={css.input}
                    />
                    <label htmlFor="name" className={css.label}>Name</label>
                </div>
                <div className={css.numberBlock}>
                    <input
                        value={state.number}
                        onChange={handleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        className={css.input}
                    />
                    <label htmlFor="number" className={css.label}>Number</label>
                </div>
            </div>

            <button type='submit' className={css.addBtn}> <AiOutlinePlusCircle size={30} /> </button>
        </form>
    )
};
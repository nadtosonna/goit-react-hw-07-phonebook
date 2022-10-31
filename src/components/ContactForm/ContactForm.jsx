import { AiOutlinePlusCircle } from 'react-icons/ai';
import css from './ContactForm.module.css';
import useForm from 'shared/hooks/useForm';

const initialState = {
    name: '',
    number: '',
}
export const ContactForm = ({onSubmit}) => {
    const { state, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

    const { name, number } = state;

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <div className={css.wrapper}>
                <div className={css.nameBlock}>
                    <input
                        value={name}
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
                        value={number}
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
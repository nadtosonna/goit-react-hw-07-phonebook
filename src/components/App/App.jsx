import { Loader } from "components/Loader/Loader";
import { Notify } from "notiflix";
import { useFetchContactsQuery, useAddContactMutation, useRemoveContactMutation } from "redux/contacts/contacts-api";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import { Section } from '../Section/Section';
import css from './App.module.css';

export const App = () => {
  const { data = [], isLoading, isSuccess, error } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();
  const [removeContact] = useRemoveContactMutation();

  const onAddContact = (contact) => {
    const isExisting = data.find(item => item.name.toLowerCase() === contact.name.toLowerCase());

    if (isExisting) {
      Notify.failure('This contact is already existing in the phonebook!', {
                position: 'center-top',
                width: '380px',
                distance: '10px',
      });
      return;
    } else {
      addContact(contact);
      Notify.success('Contact ia added in the phonebook!', {
                position: 'center-top',
                width: '380px',
                distance: '10px',
            });
    }
  }

  const onRemoveContact = (id) => {
    removeContact(id);
  }

  return (
      <div className={css.container}>
        <Section title="Phonebook">
           <ContactForm onSubmit={onAddContact} />
        </Section>
        <Section title="Contacts">
          <SearchFilter />
          {isSuccess && data.length > 0 && <ContactList contacts={data} removeContact={onRemoveContact} />}
        </Section>
      {isLoading && <Loader />}
      {error && <p className={css.error}>OOPS! Something went wrong! Please try again later!</p>}
      </div>
    );
}
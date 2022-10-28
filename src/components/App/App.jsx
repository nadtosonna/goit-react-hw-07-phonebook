import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import { Section } from '../Section/Section';
import css from './App.module.css';
import { getContacts, getFilter } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const App = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const contactsToDisplay = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter));
  
  return (
      <div className={css.container}>
        <Section title="Phonebook">
           <ContactForm />
        </Section>
        <Section title="Contacts">
          <SearchFilter />
        {contacts.length > 0 ?
          (<ContactList contacts={contactsToDisplay} />) :
          <p className={css.emptyList}>Your Contact List is empty.</p>}
        </Section>
      </div>
    );
}
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const ContactsView = () => (
  <>
    <h1 className="title">Phonebook</h1>
    <ContactForm />
    <Filter />
    <ContactList />
  </>
);

export default ContactsView;

import { connect } from 'react-redux';

import ContactList from '../ContactList/ContactList';

import {contactsOperations,contactsSelectors } from '../../redux/contacts'


const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

const mapStateToProps = state => ( {
  contactsForList: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

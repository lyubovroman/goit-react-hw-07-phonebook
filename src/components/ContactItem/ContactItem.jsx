import { ContactItemLi, DeleteBtn } from './ContactItem.styled';
import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { getFilteredContacts } from 'redux/filterSlice';
import {getVisibleContacts} from 'redux/selectors'

export const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(getFilteredContacts );

  return getVisibleContacts(contacts, filter).map(({ id, name, number }) => {
    return (
      <ContactItemLi key={id}>
        {name}: {number}
        <DeleteBtn
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </DeleteBtn>
      </ContactItemLi>
    );
  });
};

  // const handleDelete = (id, name) => {
  //   dispatch(deleteContact(id));
  //   Notiflix.Notify.success(`Contact ${name} deleted successfully`);
  // };

//   return getVisibleContacts().map(({ id, name, number }) => {
//     return (
//       <ContactItemLi key={id}>
//         {name}: {number}
//         <DeleteBtn type="button" onClick={() => handleDelete(id, name)}>
//           Delete
//         </DeleteBtn>
//       </ContactItemLi>
//     );
//   });
// };
import * as React from 'react';
import NotesCard from './NotesCard';
import { NotesType } from '../models/notes.model';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { deleteNote } from '../redux/action/notesAction';

interface INotesProps {
  notes: NotesType[];
  setNotes: React.Dispatch<React.SetStateAction<NotesType[]>>;
}

const Notes: React.FC<INotesProps> = () => {
  const { data: notes } = useSelector((state: RootStateOrAny) => state?.mynote);
  const dispatch = useDispatch();
  console.log('notes', notes);

  const handleDelete = (id: string) => {
    dispatch(deleteNote(id));
  };
  return (
    <>
      <div className='mt-5'>
        <h2>Notes</h2>
        {notes &&
          notes.map((note) => (
            <div key={note.id}>
              <NotesCard note={note} handleDelete={handleDelete} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Notes;

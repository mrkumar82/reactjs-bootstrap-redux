import React, { useState, useRef } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { NotesType } from '../models/notes.model';
import { useDispatch } from 'react-redux';
import { addNotes } from '../redux/action/notesAction';
interface INoteFormProps {
  notes: NotesType[];
  setNotes: React.Dispatch<React.SetStateAction<NotesType[]>>;
}

const NoteForm: React.FunctionComponent<INoteFormProps> = ({
  notes,
  setNotes,
}) => {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLTextAreaElement | null>(null);
  const colorRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>('');
  const dispatch = useDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (titleRef.current?.value === '' && descRef.current?.value === '') {
      return setError('There is an error');
    }

    setError('');

    const obj = {
      id: new Date().toString(),
      title: (titleRef.current as HTMLInputElement).value,
      description: (descRef.current as HTMLInputElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: new Date().toString(),
    };
    dispatch(addNotes(obj));

    (titleRef.current as HTMLInputElement).value = '';
    (descRef.current as HTMLInputElement).value = '';
  };
  return (
    <>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' placeholder='Title' ref={titleRef} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={3} ref={descRef} />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Color</Form.Label>
          <Form.Control
            type='color'
            id='colorInput'
            defaultValue='#efefef'
            title='choose your color'
            ref={colorRef}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Button type='submit'>Submit</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default NoteForm;

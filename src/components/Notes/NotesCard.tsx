import * as React from 'react';
import { NotesType } from '../models/notes.model';
import { Card, Button } from 'react-bootstrap';

interface INotesCardProps {
  note: NotesType;
  handleDelete: (id: string) => void;
}

const NotesCard: React.FC<INotesCardProps> = ({ note, handleDelete }) => {
  return (
    <div>
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>{note.date}</Card.Subtitle>
          <Card.Text>{note.description}</Card.Text>
          <Button className='mb-3' onClick={() => handleDelete(note.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NotesCard;

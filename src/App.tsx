import React, { useState } from 'react';

import './App.css';
import { NotesType } from './components/models/notes.model';
import NoteForm from './components/Form';
import Header from './components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Notes from './components/Notes';
import { useSelector } from 'react-redux';

function App() {
  // const [notes, setNotes] = useState<NotesType[]>([
  //   {
  //     id: new Date().toString(),
  //     title: 'This is my first title',
  //     description: 'This is my first description',
  //     color: '#eee',
  //     date: new Date().toString(),
  //   },
  // ]);

  return (
    <div className='App'>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <Notes />
          </Col>
        </Row>
        <Row>
          <NoteForm />
        </Row>
      </Container>
    </div>
  );
}

export default App;

import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';
interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
      <Navbar bg='dark' variant='dark' fixed='top'>
        <Container>
          <Navbar.Brand href='#home'>Brand link</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

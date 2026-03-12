import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Project from '../components/container/project';
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <MainLayout>
        <Container>
          <Project />
        </Container>
      </MainLayout>
    </>
  );
}

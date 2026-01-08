import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Project from '../components/container/project';

export default function Home() {
  return (
    <MainLayout>
      <Container>
       <Project />
      </Container>
    </MainLayout>
  );
}

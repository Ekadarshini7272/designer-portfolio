import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import About from '../components/container/about';

export default function Home() {
  return (
    <MainLayout>
      <Container>
       <About />
      </Container>
    </MainLayout>
  );
}

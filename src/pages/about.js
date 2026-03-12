import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import About from '../components/container/about';
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <MainLayout>
        <Container>
          <About />
        </Container>
      </MainLayout>
    </>
  );
}

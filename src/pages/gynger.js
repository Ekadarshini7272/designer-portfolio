import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Gynger from '../components/L2Pages/Gynger';
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <MainLayout>
        <Container>
          <Gynger />
        </Container>
      </MainLayout>
    </>
  );
}

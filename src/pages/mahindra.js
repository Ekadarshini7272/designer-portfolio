import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Mahindra from '../components/L2Pages/mahindra';
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <MainLayout>
        <Container>
          <Mahindra />
        </Container>
      </MainLayout>
    </>
  );
}

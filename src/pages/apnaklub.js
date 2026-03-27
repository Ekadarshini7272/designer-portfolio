import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Apnaklub from '../components/L2Pages/Apnaklub';
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <MainLayout>
        <Container>
          <Apnaklub />
        </Container>
      </MainLayout>
    </>
  );
}

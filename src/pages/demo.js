import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Demo from '../components/L2Pages/Demo';
import Cursor from "../components/Cursor";
import Loader from "../components/loader";

export default function Home() {
  return (
    <>
      <Loader>
      <Cursor />
      <MainLayout>
        <Container>
          <Demo />
        </Container>
      </MainLayout>
        </Loader>
    </>
  );
}

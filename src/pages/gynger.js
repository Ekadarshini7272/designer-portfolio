import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Gynger from '../components/L2Pages/Gynger';
import Cursor from "../components/Cursor";
import Loader from "../components/loader";

export default function Home() {
  return (
    <>
      <Loader>
      <Cursor />
      <MainLayout>
        <Container>
          <Gynger />
        </Container>
      </MainLayout>
        </Loader>
    </>
  );
}

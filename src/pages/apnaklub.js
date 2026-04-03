import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Apnaklub from '../components/L2Pages/Apnaklub';
import Cursor from "../components/Cursor";
import Loader from "../components/loader";

export default function Home() {
  return (
    <>
        <Loader>
      <Cursor />
      <MainLayout>
        <Container>
          <Apnaklub />
        </Container>
      </MainLayout>
       </Loader>
    </>
  );
}

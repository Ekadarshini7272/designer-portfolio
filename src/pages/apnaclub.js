import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Apnaclub from '../components/L2Pages/Apnaclub';
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <MainLayout>
        <Container>
          <Apnaclub />
        </Container>
      </MainLayout>
    </>
  );
}

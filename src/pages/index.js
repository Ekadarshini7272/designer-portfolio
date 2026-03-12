import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import HomeContainer from '../components/container/HomeContainer';
import Cursor from "../components/Cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <MainLayout>
        <Container>
          <HomeContainer />
        </Container>
      </MainLayout>
    </>
  );
}

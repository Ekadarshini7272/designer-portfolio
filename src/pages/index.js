import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import HomeContainer from '../components/container/HomeContainer';
import Cursor from "../components/Cursor";
import Loader from "../components/loader";

export default function Home() {
  return (
    <>
       <Loader>
      <Cursor />
      <MainLayout>
        <Container>
          <HomeContainer />
        </Container>
      </MainLayout>
       </Loader>
    </>
  );
}

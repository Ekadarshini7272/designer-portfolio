import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import About from '../components/container/about';
import Cursor from "../components/Cursor";
// import Loader from "../components/loader";

export default function Home() {
  return (
    <>
      {/* <Loader> */}
      <Cursor />
      <MainLayout>
        <Container>
          <About />
        </Container>
      </MainLayout>
       {/* </Loader> */}
    </>
  );
}

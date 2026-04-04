import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Mahindra from '../components/L2Pages/mahindra';
import Cursor from "../components/Cursor";
// import Loader from "../components/loader";

export default function Home() {
  return (
    <>
      {/* <Loader> */}
      <Cursor />
      <MainLayout>
        <Container>
          <Mahindra />
        </Container>
      </MainLayout>
        {/* </Loader> */}
    </>
  );
}

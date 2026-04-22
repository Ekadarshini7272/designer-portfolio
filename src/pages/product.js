import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Product from '../components/container/product';
import Cursor from "../components/Cursor";
// import Loader from "../components/loader";

export default function Home() {
  return (
    <>
      {/* <Loader> */}
      <Cursor />
      <MainLayout>
        <Container>
          <Product />
        </Container>
      </MainLayout>
       {/* </Loader> */}
    </>
  );
}

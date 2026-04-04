import { Container } from 'react-bootstrap';
import MainLayout from '../layout/MainLayout';
import Project from '../components/container/project';
import Cursor from "../components/Cursor";
// import Loader from "../components/loader";

export default function Home() {
  return (
    <>
      {/* <Loader> */}
      <Cursor />
      <MainLayout>
        <Container>
          <Project />
        </Container>
      </MainLayout>
       {/* </Loader> */}
    </>
  );
}

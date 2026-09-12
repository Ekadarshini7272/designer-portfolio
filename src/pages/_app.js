import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import useInteractionSound from '../hooks/useInteractionSound';

export default function App({ Component, pageProps }) {
  useInteractionSound();

  return <Component {...pageProps} />;
}

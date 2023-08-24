import Image from 'next/image';
import Navbar from '../components/Navbar';
import MainScreen from '../components/MainScreen/MainScreen';
import Galeria from '../components/Galeria/Galeria';

export default function Home() {
  return (
    <main >
      <MainScreen />
      <Galeria />
      </main>
  );
}

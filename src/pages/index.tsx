import {useState} from 'react';
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import MainHeader from "../components/mainHeader/mainHeader";
import SubMenu from "@/components/subHeader/subHeader";
import MainContent from "@/components/mainContent/mainContent";
import BackDropper from '../components/backDropper/backDropper';
import BackDropper2 from '../components/backDropper/backDropper';
import SetView from '@/components/actions/setViewComponent/setView';
import DeleteView from '@/components/actions/deleteViewComponent/deleteView';

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [showBackDropper, setShowBackDropper] = useState<boolean>(false)
  const [showBackDropper2, setShowBackDropper2] = useState<boolean>(false)

  const toggleBackDropper = () => {
    setShowBackDropper(pre => !pre)
  }

  const toggleBackDropper2 = () => {
    setShowBackDropper2(pre => !pre)
  }

  return (
    <main className={inter.className}>
      {
        showBackDropper && <BackDropper toggleBackDropper={toggleBackDropper} />
      }
      {
        showBackDropper && <SetView toggleBackDropper={toggleBackDropper} />
      }
      {
        showBackDropper2 && <BackDropper2 toggleBackDropper={toggleBackDropper2} />
      }
      {
        showBackDropper2 && <DeleteView toggleBackDropper={toggleBackDropper2} />
      }
      <div className={styles.mainLayout}>
        <Navbar />
        <div className={styles.content}>
          <MainHeader toggleBackDropper={toggleBackDropper} />
          <SubMenu toggleBackDropper={toggleBackDropper2} />
          <MainContent />
        </div>
      </div>
    </main>
  );
};

export default Home;

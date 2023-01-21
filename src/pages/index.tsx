import {useState} from 'react';
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import MainHeader from "../components/mainHeader/mainHeader";
import SubMenu from "@/components/subHeader/subHeader";
import MainContent from "@/components/mainContent/mainContent";
import BackDropper from '../components/backDropper/backDropper'
import SetView from '@/components/actions/setViewComponent/setView';

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [showBackDropper, setShowBackDropper] = useState<boolean>(false)

  const toggleBackDropper = () => {
    setShowBackDropper(pre => !pre)
  }
  return (
    <main className={inter.className}>
      {
        showBackDropper && <BackDropper toggleBackDropper={toggleBackDropper} />
      }
      {
        showBackDropper && <SetView toggleBackDropper={toggleBackDropper} />
      }
      <div className={styles.mainLayout}>
        <Navbar />
        <div className={styles.content}>
          <MainHeader />
          <SubMenu />
          <MainContent toggleBackDropper={toggleBackDropper} />
        </div>
      </div>
    </main>
  );
};

export default Home;

import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Navbar from "../components/navbar/navbar";
import MainHeader from "../components/mainHeader/mainHeader";
import {
  CloseTagIcon,
  FilterIcon,
  FloppyIcon,
  FolderIcon,
  LoudSpeaker2Icon,
  PenIcon,
  PinIcon,
  SortIcon,
  Workflow2Icon,
} from "@/components/icons/icons";
import SubMenu from "@/components/subHeader/subHeader";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={inter.className}>
      <div className={styles.mainLayout}>
        <Navbar />
        <div className={styles.content}>
          <MainHeader />
          <SubMenu />
          <div className={styles.mainContent}></div>
        </div>
      </div>
    </main>
  );
};

export default Home;

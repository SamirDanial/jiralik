import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar/navbar";
import MainHeader from "../components/mainHeader/mainHeader";
import SubMenu from "@/components/subHeader/subHeader";
import MainContent from "@/components/mainContent/mainContent";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={inter.className}>
      <div className={styles.mainLayout}>
        <Navbar />
        <div className={styles.content}>
          <MainHeader />
          <SubMenu />
          <MainContent />
        </div>
      </div>
    </main>
  );
};

export default Home;

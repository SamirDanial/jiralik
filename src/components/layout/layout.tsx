import React ,{ Fragment, useState } from "react";
import styles from "./layout.module.css";
import BackDropper from "../backDropper/backDropper";
import BackDropper2 from "../backDropper/backDropper";
import SetView from "../actions/setViewComponent/setView";
import DeleteView from "../actions/deleteViewComponent/deleteView";
import Navbar from "../navbar/navbar";
import MainHeader from "../mainHeader/mainHeader";
import SubMenu from "../subHeader/subHeader";

const Layout: React.FC<{children: JSX.Element}> = ({children}) => {
  const [showBackDropper, setShowBackDropper] = useState<boolean>(false);
  const [showBackDropper2, setShowBackDropper2] = useState<boolean>(false);

  const toggleBackDropper = () => {
    setShowBackDropper((pre) => !pre);
  };

  const toggleBackDropper2 = () => {
    setShowBackDropper2((pre) => !pre);
  };
  return (
    <Fragment>
      {showBackDropper && <BackDropper toggleBackDropper={toggleBackDropper} />}
      {showBackDropper && <SetView toggleBackDropper={toggleBackDropper} />}
      {showBackDropper2 && (
        <BackDropper2 toggleBackDropper={toggleBackDropper2} />
      )}
      {showBackDropper2 && (
        <DeleteView toggleBackDropper={toggleBackDropper2} />
      )}
      <div className={styles.mainLayout}>
        <Navbar />
        <div className={styles.content}>
          <MainHeader toggleBackDropper={toggleBackDropper} />
          <SubMenu toggleBackDropper={toggleBackDropper2} />
          <main>{children}</main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
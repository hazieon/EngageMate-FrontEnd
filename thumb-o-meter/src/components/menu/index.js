import React, { useEffect } from "react";
import FeatureIcon from "../featureIcons";
import styles from "./menu.module.css";
import useRoleContext from "../../context/roleContext";
import useSocketContext from "../../context/socketContext";
import HandNotify from "../notify";
import { features, coachFeatures } from "./data";

const Menu = () => {
  const result = useRoleContext();
  const role = result[0];
  const context = useSocketContext();
  const socket = context[0];
  const loggedUser = result[2];
  const name = loggedUser?.given_name;
  useEffect(() => {
    socket.emit("mainmenuroom", {
      name: name,
      room: "mainmenu",
    });
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.players}>
          {role === "coach"
            ? coachFeatures.map((item) => {
                return (
                  <section key={item.heading}>
                    <FeatureIcon
                      alt={item.alt}
                      src={item.src}
                      link={item.link}
                      icon={item.icon}
                      heading={item.heading}
                      myClass={item.myClass}
                      id={item.id}
                    />
                  </section>
                );
              })
            : features.map((item) => {
                return (
                  <section key={item.heading}>
                    <FeatureIcon
                      alt={item.alt}
                      src={item.src}
                      link={item.link}
                      icon={item.icon}
                      heading={item.heading}
                      myClass={item.myClass}
                      id={item.id}
                    />
                  </section>
                );
              })}
          <HandNotify />
        </div>
      </div>
    </>
  );
};

export default Menu;

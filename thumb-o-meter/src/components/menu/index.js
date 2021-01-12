import React from "react";
import FeatureIcon from "../featureIcons";
import styles from "./menu.module.css";
import useRoleContext from "../../context/roleContext";
import { features, coachFeatures } from "./data";
import { animate } from "../../animations";

const Menu = () => {
  const result = useRoleContext();
  const role = result[0];
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
        </div>
      </div>
    </>
  );
};

export default Menu;

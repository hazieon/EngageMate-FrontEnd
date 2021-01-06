import React from "react";
import FeatureIcon from "../featureIcons";
import styles from "./menu.module.css";
import useRoleContext from "../../context/roleContext";
import { features, coachFeatures } from "./data";

const Menu = () => {
  const result = useRoleContext();
  const role = result[0];
  return (
    <main>
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
                    />
                  </section>
                );
              })}
        </div>
      </div>
    </main>
  );
};

export default Menu;

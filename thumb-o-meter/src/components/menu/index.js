import React from "react";
import FeatureIcon from "../featureIcons";
import styles from "./menu.module.css";
import useRoleContext from "../../context/roleContext";
import { features, coachFeatures } from "./data";
import { motion } from "framer-motion";
import { animationOne, transistion } from "../../animations";
const Menu = () => {
  const result = useRoleContext();
  const role = result[0];
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transistion={{ duration: 2 }}
    >
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
                    />
                  </section>
                );
              })}
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;

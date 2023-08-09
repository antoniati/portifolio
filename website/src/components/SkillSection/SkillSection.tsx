import React from "react";
import styles from "./SkillSection.module.css";

const technologies = [
  { name: "HTML", percentage: 83 },
  { name: "CSS", percentage: 80 },
  { name: "Javascript", percentage: 75 },
  { name: "React.js", percentage: 72 },
  { name: "Next.js", percentage: 62 },
];

const SkillSection = () => {
  return (
    <div id={styles.skillContainer}>

      <div className={styles.skillSection}>
        {technologies.map((tech) => (
          <div className={styles.skill} key={tech.name}>
            <div className={styles.outer}>
              <div className={styles.inner}>
                <div id={styles.tech}>
                  {tech.name}
                  <span>{tech.percentage}%</span>
                </div>
              </div>
            </div>
            <svg
              className={styles.circleSvg}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id={`GradientColor-${tech.name}`}>
                  <stop offset="0%" stopColor="#4158B1" />
                  <stop offset="100%" stopColor="#5371e8" />
                </linearGradient>
              </defs>
              <circle
                className={styles.circle}
                cx="80"
                cy="80"
                r="70"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 472,
                  strokeDashoffset: (472 * (100 - tech.percentage)) / 100,
                  animation: "anim 2s linear forwards",
                  stroke: `url(#GradientColor-${tech.name})`,
                }}
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;

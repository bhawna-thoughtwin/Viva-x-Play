import React from "react";
import headerImage from "../../../assets/images/headerImage.png";

const PageHeader = ({ title }) => {
  return (
    <header style={styles.header}>
      <h1 style={styles.headerTitle}>{title}</h1>

      <img
        src={headerImage}
        alt="Header Visual"
        style={styles.image}
      />
    </header>
  );
};

const styles = {
  header: {
    width: "100%",
    maxWidth: "1188px",
    height: "266px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 60px",
    background: "linear-gradient(0deg, #025877, #025877)",
    boxShadow: "0 4px 18px rgba(15, 23, 42, 0.06)",
    overflow: "hidden",
    boxSizing: "border-box",
  },

  headerTitle: {
    fontFamily: "SF Pro, -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 600,
    fontSize: "clamp(20px, 2.8vw, 42px)",
    lineHeight: 1.2,
    margin: 0,
    color: "#FFFFFF",
    whiteSpace: "nowrap",
    flex: 1,
    minWidth: 0,
    flexShrink: 1,
  },

  image: {
    height: "200px",
    objectFit: "contain",
    flexShrink: 0,
  },
};

export default PageHeader;
import styles from "./PageContainer.module.css";

const PageContainer = (props) => {
  const divStyle = {
    maxWidth: props.maxWidth ?? styles["page-container"]["max-width"],
    position: props.maxWidth ?? styles["page-container"]["relative"],
    display: props.display ?? styles["page-container"]["flex"],
    flexDirection: props.flexDirection ?? styles["page-container"]["column"],
    justifyContent: props.justifyContent ?? styles["page-container"]["center"],
    margin: props.margin ?? styles["page-container"]["0 auto"],
  };

  return (
    <div className={styles["page-container"]} style={divStyle}>
      {props.children}
    </div>
  );
};

export default PageContainer;

import styles from "./Lightsaber.module.css";
const Lightsaber = (props) => {
  const length = props.length;
  const rotation = props.rotation ? props.rotation : "0";
  const scale = props.scale ? props.scale : "1";
  const transformOrigin = props.transformOrigin
    ? props.transformOrigin
    : "center";

  return (
    <div
      className={styles["light_saber"]}
      style={{
        transform: "rotate(" + rotation + "deg) scale(" + scale + ")",
        transformOrigin: transformOrigin,
      }}
    >
      <div className={styles["back"]}>
        <div
          className={styles["outer_glow"]}
          style={{
            backgroundColor: "#00daff",
            height: length + "%",
          }}
        ></div>
        <div
          className={styles["middle_glow"]}
          style={{
            backgroundColor: "hsl(189deg 82% 89%)",
            height: length + "%",
          }}
        ></div>
        <div
          className={styles["core_glow"]}
          style={{ height: length + "%" }}
        ></div>
        <div className={styles["handle"]}>
          <img
            src="https://codeorum.com/images/article_images/300/20190328T135948_300.png"
            alt="lightsaber"
          />
        </div>
      </div>
    </div>
  );
};

export default Lightsaber;

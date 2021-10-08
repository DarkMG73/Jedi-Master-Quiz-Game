import classes from "./Background.module.css";

function Background(props) {
  return (
    <div className={classes.background}>
      <div class={classes.stars}></div>
      <div class={classes.twinkling}></div>
      <div class={classes.clouds}></div>
      <div class={classes.clouds2}></div>
      {props.children}
    </div>
  );
}

export default Background;

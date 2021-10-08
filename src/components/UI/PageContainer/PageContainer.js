import styles from './PageContainer.module.css'

const PageContainer = (props) => {
  const maxWidthSetting = props.childrem ?? "1200px";
  return <div className={styles['page-container']} className=`max-width=${maxWidthSetting}`>{props.children}</div>;
};

export default PageContainer;

import s from "./styles/Navigation.module.css";
export const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <div className={s.navPages}>Profile</div>
      <div className={s.navPages}>Messages</div>
      <div className={s.navPages}>News</div>
      <div className={s.navPages}>Music</div>
      <div className={s.navPages}>Settings</div>
    </nav>
  );
};

import s from "./styles/Header.module.css";

export const Header = () => {
  return (
    <header>
      <img
        className={s.header_logo}
        src="https://velomir63.ru/components/com_jshopping/files/img_manufs/cube-logo-velomir.jpg"
        alt="logo"
      />
    </header>
  );
};

import style from "./Header.module.css";
import Logo from "../../Atoms/Logo/Logo";

const Header = () => {
  return (
    <div className={style.Main}>
      <div className={style.MiddleSection}>
        <Logo />
        <div className={style.Menu}>
          <p className={style.Item}>محصولات</p>
          <p className={style.Item}>مشتریان</p>
          <p className={style.Item}>قیمت ها</p>
          <p className={style.Item}>آموزش</p>
        </div>
      </div>
      <div className={style.LeftSection}>
        <button className={style.SignIn}>ورود</button>
        <button className={style.SignUp}>ثبت نام</button>
      </div>
    </div>
  );
};

export default Header;

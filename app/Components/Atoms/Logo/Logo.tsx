import style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={style.Main}>
      <img className={style.Logo} src="/Logo/Large.svg" alt="" />
    </div>
  );
};

export default Logo;

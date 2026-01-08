import style from "./page.module.css";
import Logo from "./Components/Atoms/Logo/Logo";
import {
  FaWhatsapp,
  FaAt,
  FaTelegram,
  FaMapMarker,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className={style.Main}>
      <div className={style.FirstRow}>
        <div className={style.FirstRowTextSection}>
          <p className={style.Title}>آینده هوش مصنوعی، فقط با یک کلیک</p>
          <p className={style.Subtitle}>
            ClickPlus دسترسی سریع و ساده به پیشرفته‌ترین ابزارهای هوش مصنوعی متن
            و تصویر — بدون دردسر، بدون محدودیت
          </p>
          <p className={style.Text}>
            هر آنچه یک حرفه ای برای زندگی نیاز دارد را یکجا جمع کرده ایم تا با
            یک کلیک به آن دسترسی داشته باشید.
          </p>
          <div className={style.StartRow}>
            <button className={style.BuyButton}>دیدن پلن‌ها</button>
            <button className={style.StartButton}>
              <p className={style.ButtonText}>شروع رایگان</p>
              <img
                className={style.ArrowIcon}
                src={"./icon/Arrow.svg"}
                alt=""
              />
            </button>
          </div>
          <div className={style.Icons}>
            <div className={style.IconItem}>
              <img
                className={style.IconImg}
                src="/model-icons/ChatGPT.svg"
                alt=""
              />
              <p className={style.IconText}>ChatGPT</p>
            </div>
            <div className={style.IconItem}>
              <img
                className={style.IconImg}
                src="/model-icons/Midjourney.svg"
                alt=""
              />
              <p className={style.IconText}>Midjourney</p>
            </div>
          </div>
        </div>
        <img className={style.Img} src={"/img/cpu.svg"} alt="" />
      </div>
      <div className={style.Edge} />
      <div className={style.DarkPage}>
        <div className={style.DarkPageBoxView}>
          <div className={style.FirstRow}>
            <img className={style.Img} src={"/img/brain.svg"} alt="" />
            <div className={style.Newspaper}>
              <div className={style.NTitle}>به مجله ی خبری ما بپیوندید</div>
              <div className={style.JoinRow}>
                <input type="text" className={style.Inp} placeholder="ایمیل" />
                <button className={style.Join}>پیوستن</button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.Footer}>
          <div className={style.FooterUp}>
            <Logo />
            <p className={style.UpText}>آینده هوش مصنوعی، فقط با یک کلیک</p>
          </div>
          <div className={style.FooterMiddle}>
            <div className={style.MiddleLists}>
              <div className={style.MiddleList}>
                <p className={style.MiddleHeader}>مدل ها</p>
                <p className={style.MiddleItem}>ChatGPT</p>
                <p className={style.MiddleItem}>Midjourney</p>
                <p className={style.MiddleItem}>Nanobenana</p>
                <p className={style.MiddleItem}>Gemini</p>
                <p className={style.MiddleItem}>Github Copilot</p>
              </div>
              <div className={style.MiddleList}>
                <p className={style.MiddleHeader}>منو</p>
                <p className={style.MiddleItem}>A</p>
                <p className={style.MiddleItem}>B</p>
                <p className={style.MiddleItem}>C</p>
                <p className={style.MiddleItem}>D</p>
              </div>
            </div>
            <div className={style.ContactUs}>
              <FaWhatsapp className={style.ConnectionButton} />
              <FaTelegram className={style.ConnectionButton} />
              <FaAt className={style.ConnectionButton} />
              <FaMapMarker className={style.ConnectionButton} />
              <FaPhoneAlt className={style.ConnectionButton} />
            </div>
          </div>
          <div className={style.FooterBottom}>
            <p className={style.BottomText}>
              © 2026 Click Plus. All rights reserved.
            </p>
            <div className={style.BottomLinks}>
              <p className={style.BottomLink}>قوانین و مقررات</p>
              <p className={style.BottomLink}>قوانین و مقررات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import style from "./page.module.css";

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
      <img src="/Seperation/edge.svg" alt="" className={style.Edge} />
      <div className={style.DarkPage}>
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
    </div>
  );
}

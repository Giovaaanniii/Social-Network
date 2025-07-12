import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
export const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.backgroundWrapper}>
        <img
          className={s.backgroundProfile}
          src="https://avatars.mds.yandex.net/i?id=75c9612fa60055a3546514d2f19ed979_l-5084300-images-thumbs&n=13"
          alt="background wallpeper"
        />
      </div>
      <div className={s.profileLogoWrapper}>
        <img
          className={s.profileLogo}
          src="https://polimizd.ru/upload/iblock/149/w5t0hd4rqvzz233nzm58xdm9m31hjbfl.jpg"
          alt="profile_logo"
        />
        <p>about me</p>
      </div>
      <MyPosts />
    </div>
  );
};

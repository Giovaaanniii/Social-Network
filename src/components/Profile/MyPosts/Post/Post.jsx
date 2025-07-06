import s from "./Post.module.css";
export const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.postInfo}>
        <img
          className={s.img}
          src="https://polimizd.ru/upload/iblock/149/w5t0hd4rqvzz233nzm58xdm9m31hjbfl.jpg"
          alt="profile_logo"
        />
        <div>{props.text}</div>
      </div>
      <div className={s.buttons}>
        <div className={s.like}>
          <button>like</button>
          <p>{props.likeCount}</p>
        </div>

        <button>repost</button>
      </div>
    </div>
  );
};

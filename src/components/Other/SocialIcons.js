import classNames from "classnames";

export default function SocialIcons({ className, colored }) {
  return (
    <ul className={`${classNames(className)} social-icons`}>
      <li>
        <a
          style={{ color: colored && "#2463ac" }}
          href="https://www.facebook.com/Yego-Coffee-622262424886062"
        >
          <i className="fab fa-facebook-f" />
        </a>
      </li>
      <li>
        <a
          style={{ color: colored && "#dd34c1" }}
          href="https://www.instagram.com/yegocoffee/"
        >
          <i className="fab fa-instagram" />
        </a>
      </li>
    </ul>
  );
}

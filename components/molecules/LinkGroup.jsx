import Link from "next/link";
import css from "./LinkGroup.module.scss";

export default function LinkGroup({ heading, links }) {
   return (
      <div className={css["container"]}>
         <h3 className={css["heading"]}>{heading}</h3>
         <ul>
            {links.map((link) => {
               return (
                  <li className={css["link-container"]}>
                     <Link href={link.path}>
                        <a className={css["link"]}>{link.title}</a>
                     </Link>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

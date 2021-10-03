import css from "./Sidebar.module.scss";
import { datepickerLinkGroups, dateobjectLinkGroups, generalLinkGroups, pluginsLinkGroups } from "data/sidebar";
import LinkGroup from "components/molecules/LinkGroup";

export default function Sidebar(params) {
   return (
      <div className={css["container"]}>
         <h2>پکیج</h2>
         {generalLinkGroups.map((group) => {
            return <LinkGroup heading={group.heading} links={group.links} />;
         })}
         <h2>Date Object</h2>
         {dateobjectLinkGroups.map((group) => {
            return <LinkGroup heading={group.heading} links={group.links} />;
         })}

         <h2>Datepicker</h2>
         {datepickerLinkGroups.map((group) => {
            return <LinkGroup heading={group.heading} links={group.links} />;
         })}

         <h2>پلاگین‌ها</h2>
         {pluginsLinkGroups.map((group) => {
            return <LinkGroup heading={group.heading} links={group.links} />;
         })}
      </div>
   );
}

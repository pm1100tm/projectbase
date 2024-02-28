import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";

register("ko", koLocale);

export function formatAgo(dateString: string, lang: string = "ko") {
  return format(dateString, lang);
}

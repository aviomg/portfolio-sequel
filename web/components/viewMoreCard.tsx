import Link from "next/link";

type Props = {
  href: string;            // e.g. "/projects"
  label?: string;          // visible text, default: "View all"
  showPlus?: boolean;      // show a big "+" instead of text
  countText?: string;      // optional, e.g. "See 12 projects"
};

export default function ViewMoreCard({
  href,
  label = "View all",
  showPlus = true,
  countText,
}: Props) {
  return (
    <Link
      href={href}
     
      className="flex-1 group shadow-(--shadow) hover:shadow-(--shadow-red-300) hover:bg-red-300/10  flex flex-col px-4 pt-4 pb-0 text-wrap border-viridian border max-sm:!w-full hover:border-red-300"
      aria-label={countText ? `${label}. ${countText}` : label}
    >
      {/* subtle hover background */}
      <div className="
        
        bg-transparent group-hover:bg-red-300/5
        transition-colors
      " />

      {/* center content */}
      <div className="  place-items-center text-center h-full pb-4">
        {showPlus ? (
          <span className="
            text-[42px] leading-none font-serif text-viridian
            group-hover:text-red-300 transition-colors
          ">
            +
          </span>
        ) : (
          <span className="
            text-md font-semibold font-mono-about text-viridian
            group-hover:text-red-300 transition-colors
          ">
            View All
          </span>
        )}

        {countText && (
          <span className="
            mt-1 text-xs text-viridian/70 group-hover:text-red-300/80
            transition-colors
          ">
            {countText}
          </span>
        )}
      </div>
    </Link>
  );
}

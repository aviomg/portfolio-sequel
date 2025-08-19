// components/ExpandableDescription.tsx
import * as React from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

type Props = {
  wordLimit?: number; // default 23
  className?: string; // optional for your text styles
  title:string;
  sub:string | null;
};

export default function ExpandableDescription({  wordLimit = 23, className,title ,sub}: Props) {
  const [open, setOpen] = React.useState(false);
 // const words = React.useMemo(() => description.trim().split(/\s+/), [description]);
 // const head = words.slice(0, wordLimit).join(" ");
  //const tail = words.slice(wordLimit).join(" ");

  // nothing to collapse if short
  if (!sub) {
    return <p className={className}>{title}</p>;
  }

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="inline">
      <p className="font-bold">
        {title}
      
        {/* the trigger is inline and replaces "…" with the rest when opened */}
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center gap-1 align-baseline text-about-primary underline decoration-dotted underline-offset-2 hover:text-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300 rounded-sm"
            aria-label={open ? "Show less" : "Show more"}
          >
            {!open && <span aria-hidden="true">…</span>}
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </CollapsibleTrigger>
        </p>

        {/* show the tail inline when open */}
        <CollapsibleContent asChild>
          <p >
            {/* leading space so it reads naturally after the head */}
            {sub}
            {/* optional “show less” inline control */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-2 text-about-primary underline decoration-dotted underline-offset-2 hover:text-red-300 align-baseline"
            >
              show less
            </button>
          </p>
        </CollapsibleContent>
      
    </Collapsible>
  );
}

// components/ExpandableDescription.tsx
import * as React from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

type Props = {
  className?: string; // optional for your text styles
  title:string;
  sub:string | null;
};
export default function ExpandableDescription({   className,title ,sub}: Props) {
  const normalcl=   "font-mono-about  underline leading-normal text-sm  hover:text-midblue  cursor-pointer flex flex-row gap-x-1 items-center"
  const openedcl="font-mono-about  underline leading-normal text-sm font-bold hover:text-midblue  cursor-pointer flex flex-row gap-x-1 items-center"


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
       <CollapsibleTrigger asChild>
      <div className={open?openedcl:normalcl}>
        <p>{title}</p>
    
        {/* the trigger is inline and replaces "…" with the rest when opened */}
       
        
          
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-200 ${open ? "" : "rotate-180"}`}
              aria-hidden="true"
            />
          
       
        </div>
        </CollapsibleTrigger>

        {/* show the tail inline when open */}
        <CollapsibleContent asChild>
          <p  className="mx-5 leading-relaxed">
            {/* leading space so it reads naturally after the head */}
            {sub}
            {/* optional “show less” inline control */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="ml-2 text-midblue/70 underline decoration-dotted underline-offset-2 hover:text-midblue/60 align-baseline"
            >
              show less
            </button>
          </p>
        </CollapsibleContent>
      
    </Collapsible>
  );
}

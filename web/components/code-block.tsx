import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism.min.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/match-braces/prism-match-braces';
import 'prismjs/plugins/match-braces/prism-match-braces.css';
import 'prismjs/plugins/file-highlight/prism-file-highlight';
import { useHasMounted } from '@/lib/useHasMounted'; // or wherever you put it


export default function CodeBlock({code}:{code:string,language?:string}){
    const hasMounted = useHasMounted();

    useEffect(() => {
        if(hasMounted){
        Prism.highlightAll();}
      }, [hasMounted,code]);
    
    if (!hasMounted) return null;
    
    return(
        <pre className="code-block language-python !bg-neutral-200">
            <code className="language-python">
                {code}
            </code>
        </pre>
    )
    
}
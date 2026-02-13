import matter from "gray-matter";
import {Poem} from "../utils/types"

type IndexEntry={
    id:number,
    filename:string,
    title?:string,
    slug:string,
    archive?:"true"|"false"
};

function baseUrl(){
    const base=process.env.POEMS_BASE_URL

    if (!base) throw new Error("Missing POEMS_BASE_URL in environment");
    return base.replace(/\/$/, ""); // trim trailing slash
}

export async function fetchIndex():Promise<IndexEntry[]>{
    const res=await fetch(`${baseUrl()}/index.json`);
    if (!res.ok) throw new Error(`Failed to fetch index.json: ${res.status}`);
    const data=(await res.json() as IndexEntry[]);
    return data;
}

export async function fetchPoemBySlug(slug:string):Promise<Poem|null>{
    //const allpoems = await fetchAllPoems();
    const index=await fetchIndex();
    const entry = index.find(e=>e.slug===slug);
    if (!entry){
        return null
    }
    else{
        return fetchPoemByFilename(entry);
    }

}

export async function fetchPoemByFilename(entry:IndexEntry):Promise<Poem|null >{
    const filename=entry.filename
    const safeSlug=encodeURIComponent(filename);
    const res = await fetch(`${baseUrl()}/${safeSlug}`);
    if (res.status==400) return null;
    if (res.status==404) return null;
    if (!res.ok) throw new Error(`Failed to fetch poem ${filename}: ${res.status}`);
   
    const raw=await res.text()
    const {data,content} = matter(raw);

    return{
        title:(data.title?? "undefined") as string,
        slug:(data.slug?? entry.slug) as string,
        subtitle:(data.subtitle?? "undefined") as string,
        date:(data.date?? "undefined") as string,
        archive: (data.archive ? "true" : (entry.archive ?? "false")) as "true" | "false",
        content,

    }

}

export async function fetchAllPoems():Promise<Poem[]>{
    const index=await fetchIndex();
    const sorted=[...index].sort((a,b)=>b.id-a.id);
    const poems = await Promise.all(sorted.map((entry)=>fetchPoemByFilename(entry)));
    return poems.filter(Boolean) as Poem[];
}
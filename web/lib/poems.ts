import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { orderedPoems } from "@/utils/data";
import {Poem} from "../utils/types"


const POEMS_DIR = path.join(process.cwd(), "public/poem-files");

//for each poem name in ordered poems, fetch the poem file. 

export function getAllPoems():Poem[]{
    return orderedPoems.map((filename)=>{
        const filepath=path.join(POEMS_DIR,filename);
        const filecontents=fs.readFileSync(filepath,"utf8")
        const {data,content}=matter(filecontents);
        return{
            title: data.title || "undefined",
            slug:data.slug,
            subtitle: data.subtitle || "undefined",
            date: data.date || "undefined",
            archive: data.archive ? "true" : "false",
            content,
        }


    })
}

export function getAllSlugs():string[]{
    return getAllPoems().map((p)=>p.slug)
}

export function getPoemBySlug(slug:string):Poem{
    const poems=getAllPoems();
    const match = poems.find((p)=>p.slug==slug)
    if(!match){
        throw new Error(`Poem not found for slug: ${slug}`)
    }
    return match;
}

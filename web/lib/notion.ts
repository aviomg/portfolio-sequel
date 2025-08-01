import {Client} from '@notionhq/client'

const notion = new Client({auth:process.env.NOTION_TOKEN});

export type Course = {
    id:string,
    title:string,
    description:string,
    notesnames:string[],
    noteslinks:string[]
}

export type CrochetPost = {
    id: string,
    title: string,
    subtitle: string,
    type: string,
}

export type CrochetImage = {
    src:string,
    caption: string | "",
    subcaption: string | "",
}

export type Block = {
    id:string,
    parent_id: string,
    type: string,
    content:string
}

export type PoemNotion = {
    title: string;
    date: string;
    subtitle:string | null;
    content: string[];
    isarchive:boolean;
  };

/*export type Poem = {
   title: string,
   subtitle:string,
   date: string,
   content: string,
   archive:string
 }*/


export async function getCourses(){
    const databaseId = process.env.NOTION_DATABASE_ID!;
    const response = await notion.databases.query({ 
        database_id: databaseId,
        sorts:[
            {
                property:'Order',
                direction:'descending',
            },
        ]
     });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page:any):Course=>({
        id:page.id,
        title:page.properties.Title.title[0]?.plain_text||'',
        description: page.properties.description.rich_text[0]?.plain_text || '',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        notesnames: page.properties.notesnames.multi_select.map((tag:any)=>tag.name),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        noteslinks: page.properties.noteslinks.multi_select.map((tag:any)=>tag.name)
    }))
}

export async function getCrochetPosts() {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_CROCHET_DB_ID!,
      sorts: [{ property: "order", direction: "ascending" }]
    });
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((page: any): CrochetPost => ({
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text || "",
      subtitle: page.properties.subtitle.rich_text[0]?.plain_text || "",
      type: page.properties.type.select?.name || "single",
    }));
  }

  /*export async function getPoems(){
  
    const response = await notion.databases.query({
        database_id:process.env.NOTION_POEM_DB_ID!,
        sorts: [{ property: "order", direction: "ascending" }]
    })

    const poems:PoemNotion[] = [];
    let cursor: string | undefined = undefined;


    for(const page of response.results){
        let isarchive:boolean = false;
        const sel = page.properties.archive.select?.name || "";
        if(sel=="Yes"){
            isarchive = true;
        }
        const blocks = [];
        
        do{
            const res = await notion.blocks.children.list({
                block_id:page.id,
                start_cursor: cursor,
            });
            blocks.push(...res.results);
        } while(cursor);
    

    let title = "";
    let date = "";
    let subtitle=null;
    const content:string[] = [];
    let ind:number = 0;
    let counter:number=1;

    for(const block of blocks){
       if(block.type==="paragraph"){
        const bold = block.paragraph.rich_text[0]?.annotations.bold;
        const italic = block.paragraph.rich_text[0]?.annotations.italic;
       // const bold = annotations.bold;
       if(bold){
        const p = block.paragraph.rich_text[0]?.plain_text || '';
        const headers = p.split("\n");
        title = headers[1];
        date = headers[0];
        continue;}
        if(italic){
            const p = block.paragraph.rich_text[0]?.plain_text || '';
            subtitle = p;
            continue;
        }
       }
       if(block.type==="paragraph"){
        const p = block.paragraph.rich_text[0]?.plain_text || '';
        content.push(p);
       }
       else if(block.type==="numbered_list_item"){
        const p = block.numbered_list_item.rich_text[0]?.plain_text || '';
        content.push(counter.toString() + ". " + p);
        counter+=1;
       }

       else{content.push(block.type + " and ind is " + ind.toString())}
       
      
        ind+=1;
    }
    if(title && date && content.length){
        poems.push({title,date,subtitle, content, isarchive});
    }
    }
    return poems;
 


  }*/
  


export async function getPostImages(postId:string){
    const response = await notion.databases.query({
        database_id:process.env.NOTION_CROCHET_IMG_ID!,
        filter:{
            property:"post-relation",
            relation:{
                contains:postId
            }
        },
        sorts:[
            {property:"order",direction:"ascending"}
        ]

    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return response.results.map((item:any):CrochetImage => ({
        src: item.properties.src.title[0]?.plain_text || "",
        caption: item.properties.caption.rich_text[0]?.plain_text||"",
        subcaption: item.properties.subcaption.rich_text[0]?.plain_text||""
    }));
    
}


//we have a specific page in mind, which we know by the page ids listed in database

/*export async function getPagesContent(pageId:string){
    const blocks = [];
    const response = await notion.blocks.children.list({
          block_id: pageId,
          page_size: 50,
        });
    
        return response.results.map((block:any)=>{
            const btype = block.type;
            
            if(btype=="paragraph"){
                return block.paragraph?.rich_text[0]?.plain_text || '';

            }
            else if(btype=="heading_2"){
                return block.heading_2?.rich_text[0]?.plain_text || '';

            }
        
});// "hasmore": "hasnomore";

    //return blocks[0].type;

}
*/

  
  
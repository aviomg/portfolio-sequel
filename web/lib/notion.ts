import {Client} from '@notionhq/client'

const notion = new Client({auth:process.env.NOTION_TOKEN});

export type Course = {
    id:string,
    title:string,
    description:string,
    notesnames:string[],
    noteslinks:string[]
}
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

    return response.results.map((page:any):Course=>({
        id:page.id,
        title:page.properties.Title.title[0]?.plain_text||'',
        description: page.properties.description.rich_text[0]?.plain_text || '',
        notesnames: page.properties.notesnames.multi_select.map((tag:any)=>tag.name),
        noteslinks: page.properties.notesnames.multi_select.map((tag:any)=>tag.name)
    }))
}

export async function getCrochetPosts() {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      sorts: [{ property: "Order", direction: "descending" }]
    });
  
    return response.results.map((page: any) => ({
      id: page.id,
      title: page.properties.title.title[0]?.plain_text || "",
      subtitle: page.properties.subtitle.rich_text[0]?.plain_text || "",
      iscarousel: page.properties.type.select?.name || "single"
    }));
  }

  export async function getImagesForPost(postId: string) {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Post",
        relation: {
          contains: postId
        }
      },
      sorts: [
        {
          property: "Order",
          direction: "ascending"
        }
      ]
    });
  
    return response.results.map((item: any) => ({
      src: item.properties["src-path"].rich_text[0]?.plain_text || "",
      caption: item.properties.caption.rich_text[0]?.plain_text || "",
      subcaption: item.properties.subcaption.rich_text[0]?.plain_text || ""
    }));
  }
  
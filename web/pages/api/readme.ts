import type { NextApiRequest, NextApiResponse } from 'next';

const GITHUB_API='https://api.github.com';
const OWNER='aviomg'
const DEFAULT_BRANCH='main'
const ALLOWED_REPOS=new Set(['studio-keys','bitmap-generator','swipe-share-team-20']);



export default async function handler(req:NextApiRequest,res:NextApiResponse){
    try{
        const repo= (req.query.repo as string)||'';
        if(!repo || !ALLOWED_REPOS.has(repo)){

        }
        const headers:Record<string,string>={
            Accept:'application/vnd.github+json',
            'User-Agent':'nextjs-readme-min',
        };
        if(process.env.GITHUB_TOKEN){
            headers.Authorization=`Bearer ${process.env.GITHUB_TOKEN}`;
        }

        const url=`${GITHUB_API}/repos/${OWNER}/${repo}/readme?ref=${encodeURIComponent(DEFAULT_BRANCH)}`;
        const r = await fetch(url,{headers});
        if(!r.ok){
            const text = await r.text();
            return res.status(r.status).send(text);
        }

        const data = await r.json() as { content?:string; encoding?:string};
        const markdown=
            data.encoding==='base64' && data.content
            ? Buffer.from(data.content,'base64').toString('utf-8')
            :'';
        
        res.setHeader('Cache-Control','s-maxage=120');
        
        return res.status(200).json({markdown});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch(e:any){
        return res.status(500).json({error:e?.message || 'Internal Error'});
    }
    }

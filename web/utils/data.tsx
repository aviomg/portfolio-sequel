
export const projects = [
 
  {name:"Bitmap Generator",
    description:"A tool designed to help students in COMP 541 (Digital Logic) create sprites and bitmap memory files.",
    link:"/projects/bitmap-generator",
    target_blank:false,
    tech:["Nextjs","Digital Logic","System Verilog"],
    id:9,
    featured:true,
    repo:'bitmap-generator',
  },
  {name:"Studio Keys",
    description: " A Python-based tool designed to enable the easy retrieval and recovery of UI/UX designs created with the (now) defunct Invision prototyping tool.",
    link:"/projects/studio-keys",
    target_blank:false,
    tech:["Python","Flask","GCS","Render","Tailwind"],
    id:8,
    featured:true,
    repo:'studio-keys'
},
{name: "Train Planner",
  description:"Designed a full, working CPU in SystemVerilog, implemented on an FPGA circuit. Includes I/O integration (VGA, acclerometer, keyboard, buttons, LED, sound) and memory-mapping; I also wrote a 'train track planner' game in MIPS assembly (1,600+ lines) to demonstrate the processor functionality. Click to watch my project demo!",
  mini_description:"Designed a full, working CPU in SystemVerilog, implemented on an FPGA circuit. I also wrote a 'train track planner' game in MIPS assembly to demonstrate the processor functionality. Click to watch my project demo!",
  link:"/projects/train-planner",
  target_blank:false,
  tech:["System Verilog","MIPS Assembly","Vivado","C","Nexys A7"],
  id:10,
  featured:true,
  repo:'train-planner'
},
{name: "Portfolio (Classic)",
  description:"The first edition  of my personal site, built in the traditional HTML/CSS/JS stack, before I upgraded & expanded it using modern frameworks. This project solidified my understanding of the core logic at play in web browsers, and a true appreciation of how far we've come today, with frameworks that make web dev practically intuititve (like React and Next).",
  mini_description:"The first edition  of my personal site, built in the traditional HTML/CSS/JS stack.",
  link:"/projects/portfolio",
  target_blank:false,
  tech:['HTML','CSS','JS','DOM Manipulation'],
  id:7,
  featured:true,
  repo:'portfolio'

},
  {name:"SwipeShare",
    description:"a community-driven platform where college students can request or donate unused meal swipes for campus dining halls.",
    link:"https://github.com/comp426-25s/final-project-team-20",
    target_blank:true,
    tech:["Nextjs","React","Supabase","Realtime","TSX","Shadcn","Figma"],
    id:6,
    featured:true
  },
    {name:"CSXL Student Showcase Board",
      description:"My team's final project for COMP 590 involved designing and implementing a feature for the UNC CSXL website that allows students to showcase their projects and explore others' work in a centralized, interactive feed. Click to watch our demo video!",
      link:"https://youtu.be/5HTkijZrJAc?si=a7blwTyL7nJWt4zG",
      target_blank:true,
      tech:["Angular","FastAPI","SQLAlchemy","Kubernetes"],
      id:5,
      featured:false
  },
  {name:"Pokédex",
    description:"      a Pokédex app to display information about Pokemon, moves, and items. Built using Next.js and the Pokemon API, deployed live to the internet via Vercel. ",
          link:"https://a05-pokedex-avikumar.vercel.app/",
          target_blank:true,
          tech:["Nextjs","React Query","Tailwind","Vercel"],
          id:4,
          featured:false
      },
      {name:"Wordle",
        description:"A recreation of wordle using React.js. Exercise to become familiar with the framework.",
            link:"https://a04-wordle-avikumar.vercel.app/",
            target_blank:true,
              tech:["React"],
              id:3,
              featured:false
          },
          {name:"Fairly Odd Calculator",
            description:"A little exercise to practice using typescript, arrow and higher order functions, and my favorite colors.",
            link:"https://a02-calculator-avikumar.vercel.app/",
            target_blank:true,
            tech:["TypeScript"],
            id:1,
            featured:false
          },
          {name:"Pixel Art Maker",
            description:"Create pixel art on a canvas that persists on page reload, with functionality to download paintings as pngs. exercise to practice using event listeners.",
                link:"https://a03-pixel-art-maker-nathanflinchum.vercel.app/",
                target_blank:true,
                  tech:["TypeScript"],
                  id:2,
                  featured:false
              },
              {name:"Obsidian Index Generator",
                description:"A simple script that enables the 'graph view' for an obsidian vault to be built from folder hierarchy rather than backlinks.",
                link:"/projects/index-generator",
                target_blank:false,
                tech:['Python'],
                id:10,
                featured:false
              }
       

  
  ]
  
  export const courses = [
    {name:"COMP 560: Artificial Intelligence", description:"Coming Soon (Spring 2025)", notesnames:null, noteslinks:null},
    {name:"COMP 541: Digital Logic",description:"Coming Soon (Spring 2025)",notesnames:null, noteslinks:null},
    {name:"COMP 426: Modern Web Programming",description:"Coming Soon (Spring 2025)", notesnames:null,noteslinks:null},
    {name:"COMP 550: Algorithms and Analysis", description:"Key Topics: Problem-solving paradigms, Computational complexity, Algorithm design", notesnames:["notes","code"], noteslinks:["/test","/test2"]},
    {name:"COMP 435: Computer Security Concepts", description:"Key Topics: The CIA triad; Cryptography; Software, Network, and OS security", notesnames:null,noteslinks:null},
    {name:"COMP 311: Computer Organization",description:"Key Topics: Assembly Programming, Microprocessor and CPU Design, Combinational and Sequential Logic",notesnames:["notes"],noteslinks:["/test"]},
  ]


  export const orderedPoems = 
  ['heading-home.md','jersey-summer.md','twenty-two--I-am-s.md', 'exercise.md', 'thursday-evening-stream-of-consciousness.md', 'widen-your-eyes.md', 'routine.md', 'I-m-starting-to-forget-can.md', 'untitled.md', '---feet-from-my-tower.md', 'for-guilty-pleasures.md', 'water-fountain.md', 'calendar.md', 'canvas.md', 'Hands-of-the-clock.md', 'and-i-feel-like-childhood.md', 'sitting-on-craige-deck-talking.md', 'Haiku--0.md', 'Haiku--1.md', 'Haiku--2.md', 'maybe-i-don-t-mind-the.md', 'nyc.md', 'ENGL----Poetry-Workshop-Prompt.md', 'writer-s-block--April----.md']
  
  /*  <div class="widget">
    <h1 class="widget-title"></h1>
    <p class="widget-content"></p>
    <div class="flex gap-1">
    <a href="./notes/comp550.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
    <a href="./notes/code.html" class="widget-notes"><pre class="code-block language-python max-w-fit !bg-transparent !py-0 !mr-1 !text-viridian !px-0"><code class="code-notes">code</code></pre></a>
    </div>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 435: Computer Security Concepts</h1>
    <p class="widget-content">Key Topics: The CIA triad; Cryptography; Software, Network, and OS security</p>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 311: Computer Organization</h1>
    <p class="widget-content">Key Topics: Assembly Programming, Microprocessor and CPU Design, Combinational and Sequential Logic</p>
    <a href="./notes/comp311.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 590: Foundations of Software Engineering</h1>
    <p class="widget-content">Key Topics: Agile Project Management, Full-stack & Production-grade Development, Technical Communication, 
      Automation and Code Review</p>
      <a href="./notes/comp590.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 455: Models of Languages and Computation</h1>
    <p class="widget-content">Key Topics: Automata, Computability, and Complexity theories; Reducibility; Time and Space Complexity</p>
      <a href="./notes/comp455.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
  
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 301: Foundations of Programming</h1>
    <p class="widget-content">Key Topics: Object-Oriented Programming, Exception handling, Software Testing, Design Patterns </p>
    <a href="./notes/comp301.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 211: Systems Fundamentals</h1>
    <p class="widget-content">Key Topics: Systems Programming (C), Compilation system, Physical/Virtual memory, OS basics </p>
    <a href="./notes/comp211.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>

  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 210: Data Structures and Analysis</h1>
    <p class="widget-content">Key Topics: Fundamental Data structures, Big-O Notation and Algorithm Analysis</p>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 283: Discrete Structures</h1>
    <p class="widget-content">Key Topics: Combinatorics; Sets, tuples, etc.; Logic and Proof Techniques</p>
  </div>
*/

  //title, subtitle, iscarousel, captions (empty list if not carousel), srcs,
  /*          {src:"../assets/crochet/4a.webp",caption:"a headband I made for my bhabi (brother's wife)",subcap:"it ended up being way too small (lol) but my neice got some use out of it."},
  {src:"../assets/crochet/4b.webp",caption:"a headband I made for my bhabi (brother's wife)",subcap:"it ended up being way too small (lol) but my neice got some use out of it."},
  {src:"../assets/crochet/5a.webp",caption:"my first hat! for my then-8-month niece"},
  {src:"../assets/crochet/6a.webp",caption:"a lavender"},
  {src:"../assets/crochet/6b.webp",caption:"a lavender"},
  {src:"../assets/crochet/7a.webp",caption:"fingerless gloves for my cousin"},
  {src:"../assets/crochet/7b.webp",caption:"fingerless gloves for my cousin"},
  {src:"../assets/crochet/7c.webp",caption:"fingerless gloves for my cousin"},
  {src:"../assets/crochet/8b.webp",caption:"hat pour moi"},
  {src:"../assets/crochet/8c.webp",caption:"hat pour moi"},
*/

/* <PostWidget title="birthday gift for my roommate" 
            subtitle="lots of fun, enjoyed the challenge of having to emulate the very specific shape of a cat. could not add facial features because i knew that i would butcher it"
            captions={[]}
            iscarousel={false}
            srcs={["/crochet/cat.jpeg"]} /> */

export const crochetposts = [
  {title:"birthday gift for my roommate",
    subtitle:"lots of fun, enjoyed the challenge of having to emulate the very specific shape of a cat. could not add facial features because i knew that i would butcher it",
    iscarousel:false,
    captions:[],
    srcs:["/crochet/cat.jpeg"],
    subcaps:[]
  },
  {
    title:"my most recent tapestry: moonlight (working title)",
    subtitle:"finished on february 4, 2025.",
    iscarousel:false,
    captions:[],
    subcaps:[],
    srcs:["/crochet/moonlight.jpeg"]
  },
  {
    title:"ch 1: beginner (June-August 2023)",
    subtitle:"finding my footing, staining my socks, a whole lot of granny squares and more.",
    iscarousel:true,
    captions:[ "some random squares",
                "some random squares",
                "first time trying my hand at tapestry crochet",
                "a hat for my naani, modeled on my sister and I.",
                "a hat for my naani, modeled on my sister and I.",
                "a headband I made for my bhabi (brother's wife)",
],
  subcaps:["","","","","","it ended up being way too small (lol) but my neice got some use out of it."],
    srcs:["/crochet/3a.webp",
          "/crochet/3b.webp",
          "crochet/1a.webp",
          "/crochet/2a.webp",
          "/crochet/2b.webp",
          "/crochet/4a.webp",
          "/crochet/4b.webp",
          "/crochet/5a.webp",
          "/crochet/6a.webp",
          "/crochet/6b.webp",
          "/crochet/7a.webp",
          "/crochet/7b.webp",
          "/crochet/7c.webp",
          "/crochet/8b.webp",
          "/crochet/8c.webp"
]},

]
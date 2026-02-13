import os

#neeed to generate the slugs from the poem titles

def parse_first_section(firstsection): #returns title, date subtitle
  #  print(firstsection)
    if(len(firstsection)==1):
        return firstsection[0],"",""
    elif(len(firstsection)==2):
        return firstsection[1],firstsection[0],""
    else:
        title = firstsection[1]
        date  = firstsection[0]
        subtitle = firstsection[2]
        return title,date,subtitle
    
    



with open("web/public/nyc.txt","r", encoding="utf-8") as f:
    data = f.read()

poems = data.split("\n\n\n")
print(len(poems))
mds = []

created_files=[]

os.makedirs("./web/public/poem-files",exist_ok=True)

haikucounter = 0;
for i,poem in enumerate(poems):
    lines = poem.split("\n");
    #print(lines)
    #print("\n")
    if(lines[0]=='' and lines[1]==''): 
       # print(f"poem number:{i} ")
       # print(lines[0:4])
       # print("\n")
        del(lines[0])
        del(lines[0])
        #print(lines)
    elif(lines[0] == ""):
        #print(i)
        del(lines[0])
      #  print(lines[0])
    content = ""
    firstsection = []
    for j,line in enumerate(lines):
        
        if(lines[j]==''):
            content = lines[j+1:len(lines)]
            break
        else:
            firstsection.append(lines[j])
   # print(firstsection)
    #print("\n")
    title, date, subtitle = parse_first_section(firstsection)
  #  print(content )
    '''
    frontmatter=["---"]
    if title:
        frontmatter.append(f'title: {title}')
    if date:
        frontmatter.append(f'date: {date}')
    if subtitle:
        frontmatter.append(f'subtitle: {subtitle}')
    frontmatter.append("---")

    md_content="\n".join(frontmatter) + "\n" + "\n".join(content)
    mds.append(md_content)

    print(f"poem number {i}")
    '''
    split = title.split(" ");
    title_words = []
   # print(f"split is {split}")
    for word in split:
     #   print(f"on word {word}")
     #   print(f"title words is {title_words}")
        if len(title_words)<=4:
            if word != "":
                curr_word = []      #for each char, check if  a letter or number. if it is a letter, add it to curr_word.
                                    #if not, continue
                for letter in word:
             #       print(f"letter is {letter}")
                    if (0x41 <= ord(letter) <= 0x5A) or (0x61<=ord(letter)<=0x7A):              #if a letter, append it
             #           print("appending letter!")
                        curr_word.append(letter)
                    else:
                        curr_word.append('-');
                if curr_word[len(curr_word)-1] == "-":
                    del(curr_word[len(curr_word)-1])        #if last letter is a dash, remove it
            #        print("deleting last")
                                        #if not, append a "-"
            #    print(f"curr word is {curr_word}")
                curr_word_combined = ''.join(curr_word)
           #     print(f"combined is {curr_word_combined}")

           #     print(f"pre-append title words: {title_words}")
                title_words.append(curr_word_combined)      #join all the letters of the word back together, and append it to title_words
          #      print(f"post-append title words: {title_words}")

#allowed: 41-5A, 61-7A

                #title_words.append(word)
    #print(title_words)
    slug =  "-".join(title_words)
    frontmatter=["---"]
    if title:
        frontmatter.append(f'title: {title}')
    if date:
        frontmatter.append(f'date: {date}')
    if subtitle:
        frontmatter.append(f'subtitle: {subtitle}')

    if "Haiku" not in title_words:
            frontmatter.append(f'slug: {slug}')
    else:
            frontmatter.append(f'slug: Haiku--{haikucounter}')
    frontmatter.append("---")

    md_content="\n".join(frontmatter) + "\n" + "\n".join(content)
    mds.append(md_content)

    print(f"poem number {i}")

    filename = slug           
    #print("-".join(title_words))

    if("Haiku" in title_words):
        filename = f"Haiku--{haikucounter}"
        haikucounter+=1
    
    with open(f"./web/public/poem-files/{filename}.md","w", encoding="utf-8") as f:
        f.write(md_content)
    


    
    created_files.append(filename + ".md")

print(created_files)

#either first two lines full. in which case the liens 0,1 are date, title
#or only one line used
    
  #  print(f"title: {title} \n date:{date} \n subtitle:{subtitle}\n")

   # print(f"line 0: {lines[0]}")
   # print(f"line 1: {lines[1]}")
   # print("\n")






#print(f"path is {os.path.abspath("./public/poem-files")}")
#for i,md in enumerate(mds):
 #   with open(f"./web/public/poem-files/section_{i+1}.md","w", encoding="utf-8") as f:
  #      f.write(md)


import frontmatter
import os
import json


folderpath=r"/Users/avikumar/Desktop/portfolio-sequel/web/public/poem-files"
dict1=[]

orderedPoems = ['horsefly.md','loose-ends-forever.md','heading-home.md','collecting-dolls.md','the-heights.md','twenty-two--I-am-s.md', 'exercise.md', 'thursday-evening-stream-of-consciousness.md', 'widen-your-eyes.md', 'routine.md', 'I-m-starting-to-forget-can.md', 'untitled.md', '---feet-from-my-tower.md', 'for-guilty-pleasures.md', 'water-fountain.md', 'calendar.md', 'canvas.md', 'Hands-of-the-clock.md', 'and-i-feel-like-childhood.md', 'sitting-on-craige-deck-talking.md', 'Haiku--0.md', 'Haiku--1.md', 'Haiku--2.md', 'maybe-i-don-t-mind-the.md', 'nyc.md', 'ENGL----Poetry-Workshop-Prompt.md', 'writer-s-block--April----.md']

counter=len(orderedPoems)-1
for i in range(0,len(orderedPoems)):
    filename=orderedPoems[i]
    for root,dirs,files in os.walk(folderpath):
       # print(f"filename is {filename}.")
        if filename in files:
            print(f"filename {filename} found in files")
            fullpath=os.path.join(folderpath,filename)
            post=frontmatter.load(fullpath)
            entry={}
            entry['id'] = counter
            entry['filename']=filename
            entry['title']=post['title']
            entry['slug']=post['slug']
            if 'date' in post:
                entry['date'] = post['date']
            entry['archive'] = "false"
            if 'archive' in post:
                entry['archive'] = "true"
            if 'subtitle' in post:
                entry['subtitle']=post['subtitle']
            dict1.append(entry)
    
        else:
            print(f"filename {filename} not found in files")
    counter-=1


with open("index.json","w") as f:
    json.dump(dict1,f)
    

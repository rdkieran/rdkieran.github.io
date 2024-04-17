# Making a Website III: The Search for World

*April 10, 2024*

![here lies comics, the lives I had made](/img/blog/making_a_website_iii/hes-dead-jim.png)

![](/img/blog/making_a_website_iii/)
> I have a comic to keep making, coding to keep learning, and blogs to keep writing. I need to do some kind of write up for my Audio Sequencer project, which I'll also try to find a silly narrative style for.

&mdash; *Making a Website II: Wrath of World*

*U.S.S. Website. Robbie's personal log. With most of the CSS and JavaScript worked out, I almost want to use this website. Yet I feel uneasy and I wonder why. Perhaps it's the emptiness of this layout. Most of the decoration has been stripped back. The star-dotted void of space and my fun signatures are resting in archival folders I made for them. My Website feels like a house with all the children gone. No, more empty than even that. The death of my creativity is like an open wound. It seems that I have left the noblest part of myself back there ...in those archived folders.*

## One Year Later...

![](/img/blog/making_a_website_iii/new-site-main.png)
&mdash; right after my last post, I did this

An unsettling change has taken place since the last installment in this series. I'm using Edge now. On top of that, I've been at my new job for about a year. Working full time has dramatically changed my outlook on life and personal development.

My ideas for comics and projects still appear to me as night terrors, looming in my peripheral vision. I turn my face to the pillow and shut them out, pretend I don't see them waiting. I've been half awake for a long time, and the ghosts of those unfulfilled plans lurk at the foot of my bed.

## Work sucks, I know

![](/img/blog/making_a_website_iii/new-site-blog.png)
&mdash; building this site burnt me out, so I went simple

When I started my job in June of last year, I was making this website. Sometime after *Making a Website II: The Wrath of World*, I decided I didn't actually like the old layout, and decided to strip it down to the essentials, so that I could work on stuff like styling for mobile without worrying about visuals.

But I stopped there. I gutted the thing and left it on the table, untended page placeholders and out-of-date copyright signatures exposed to the air. I had my hands full with my new full-time job, trying to figure out how to work a database backend off of half a year's coding experience.

Sitting down to finish this website never felt like a priority, and increasingly, neither did making my comic. My life became the job, and outside of the job I found various ways to switch my brain off, therefore neglecting my hobbies and projects to a state of decay.

I did bits here and there. Tried out my Morrowind menu idea, forced ChatGPT to make me some crap code until I got burnt out and decided nobody was going to look at this site anyway. It, like my comic, was my personal retreat, where I was sure no one would try to find me.

## I miss making comics

![](/img/blog/making_a_website_iii/new-site-comic.png)
&mdash; *OCtober* is the biggest pile of crap I've ever made, but it's here

My comics turned inside out or gathered dust while my spare creative energy at the end of each work day was poured into writing lore, with no art to accompany it. Art takes time, writing is fast, so I was working with pure ideas.

My creative to-do pile grew exponentially as my fingers raced across the keyboard, creating material at rates far faster than the rate of comic production.

I came up with factions, history, races, meta concepts, big ideas with no basis in artwork at all. Where before every idea came from the making of the comic, I was increasinly starting with the idea, and then failing to realise it visually. I'd started working backwards, and it was failing me.

But making a big connected universe demands a bit of coordination. I can't just throw canon around and expect selective ret-conning to clean up after me. I needed to plan my stories, write them, understand my point and my trajectory before getting lost in the weeds of the page-to-page action.

For some reason this rational approach doesn't work for me. I like the weeds. I lose sight of the detail when I try too hard to focus on the big picture, gaze fixed on the horizon instead of the footfalls in my direct path.

The march toward that distant mark on the horizon is endless. I'm sick of it. I just want to enjoy the walk, wherever it leads me.

## Let's sort this shit out

![](/img/blog/making_a_website_iii/website-2.png)
&mdash; my site as of April 2024 looks fine, time to work out the innards

So then, let's just walk. First, let's settle where I am first. Set up camp, pour out a cup of tea from the thermos, get the lay of the land. What risks and challenges lay ahead of me?

I point at the horizon again. A website with a Comic and a Blog, but also a Lore Wiki. The first two I had, although I hadn't dressed them up quite as well as I'd liked.

What would be the best move? Add new functionality? No, not until what I have is put in good order, from a technical perspective.

### Technical Updates

- I'd like to find some way to automatically _**interpret my markdown files as HTML with JavaScript**_, so that I don't have to keep two sources update whenever I make changes to my writing.
- Additionally, I'd like to figure out how to _**use databases to store page, comic, and blog info**_.
- Develop the main page. Store some _**simple menus for locating the most recent update**_. This could be connectd to the database update.

The database could hold references to files, which then feeds into the markdown interpreter for the blogs, and also the comic pages. Right now, my Rarebit comic template keeps data for each page inside of that comic's JavaScript file. This seems like something I could avoid, keeping all page data in one file or database object.

Before I get into database stuff though, I need to work out how to run each page from the markdown files rather than HTML. To do that, I'll probably need to have HTML templates for each page, referenced by a JavaScript file that also pulls and interprets the Markdown.

I don't want to reinvent the wheel like I usually try to. If I'm going to stand a chance at making a career as a developer, I need to learn how to use open-source tools, instead of spending days trying to make everything from scratch. I need to level up a bit, so I'll try to use shortcuts where I can.

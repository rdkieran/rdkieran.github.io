latest = 100
comic  = 400
blog   = 300
wiki   = 200

order = ["latest","wiki","blog","comic"]

while True:
    z = 100
    
    for i in order:
        if i == "latest":
            latest = z
        elif i == "comic":
            comic = z
        elif i == "blog":
            blog = z
        elif i == "wiki":
            wiki = z

        z += 100
    
    print("Latest: "+str(latest)+"\nComic: "+str(comic)+"\nBlog:  "+str(blog)+"\nWiki:  "+str(wiki))
    print(order)

    window = input("\nselect window:\nWindow: ")
    print()

    if window == "latest": #latest
        order.remove("latest")
        order.append("latest")
    elif window == "comic": #comic
        order.remove("comic")
        order.append("comic")
    elif window == "blog": #blog
        order.remove("blog")
        order.append("blog")
    elif window == "wiki": #wiki
        order.remove("wiki")
        order.append("wiki")
    
for i in range (49):
    filename = "img\\comics\\space_story_2\\pg{}.png".format(i+1)
    href = "<img src=\"{}\">".format(filename)

    print(href)
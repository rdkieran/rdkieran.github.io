import os

x=0
directory='comics\\rat-boy-diaries\\img\\comics\\holidays\\'

for path in os.listdir(directory):
    x+=1
    filename = "pg2_"+str(x)+".png"
    os.rename(directory+path,directory+filename)
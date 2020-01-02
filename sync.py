import subprocess
from os import path

sourcedir = "PATH/TO/YOUR/NETWORK/DIRECTORY"
targetdir = "PATH/TO/YOUR/LOCAL/MUSIC/LIBRARY"


out = subprocess.check_output(['dirsync', sourcedir, targetdir, '-v']).splitlines()
dirs = []


#Sucht den relativen Pfad des kopierten Ordners und isoliert diesen
for line in out:
    #zu "Music\\ ändern"
    splitLine = line.decode().split("\\")
    if len(splitLine) != 3:
        out.remove(line)
    else:
        dirs.append("/" + (splitLine[2].split(" to")[0]))
   
#doppelte Pfade werden rausgefiltert
dirs = set(dirs)
for directory in dirs:
    print(directory)

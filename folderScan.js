
var iTunesApp = WScript.CreateObject("iTunes.Application");
var shell = WScript.CreateObject("WScript.Shell");
var execute = shell.Exec("PATH/TO/THE/SYNC.EXE");

var paths = [];
while(!execute.Stdout.atEndOfStream) {
    paths.push(execute.Stdout.ReadLine());
}

for(var i = 0; i < paths.length; i++) {
iTunesApp.LibraryPlaylist.AddFile('ROOT/DIRECTORY/TO/YOUR/MUSIC/LIBRARY' + paths[i]);
}


var iTunesApp = WScript.CreateObject("iTunes.Application");
var shell = WScript.CreateObject("WScript.Shell");
var execute = shell.Exec("C:/Users/maxme/Documents/Scripts/iTunesSync/master.exe");

var paths = [];
while(!execute.Stdout.atEndOfStream) {
    paths.push(execute.Stdout.ReadLine());
}

for(var i = 0; i < paths.length; i++) {
iTunesApp.LibraryPlaylist.AddFile('C:/Users/maxme/Music/iTunes/iTunes Media/Music' + paths[i]);
}

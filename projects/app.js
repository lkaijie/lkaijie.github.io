
var vscode = document.getElementById('vsicon');
var github1s = document.getElementById('github1s');
var github = document.getElementById('github');
var youtube = document.getElementById('youtube');
var invert = document.getElementById('inver');
var yticon = document.getElementById('youtube-icon');


vscode.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default behavior of the button click event
    github1s.classList.toggle('hidden');
    github.classList.add('hidden');
    youtube.classList.add('hidden');
});

invert.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default behavior of the button click event
    github.classList.toggle('hidden');
    github1s.classList.add('hidden');
    youtube.classList.add('hidden');
});

yticon.addEventListener('click', function(event) {
    event.preventDefault(); // prevent the default behavior of the button click event
    youtube.classList.toggle('hidden');
    github.classList.add('hidden');
    github1s.classList.add('hidden');
});
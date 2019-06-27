/*
Author => Vivek Mishra
****Starting of Song.js
name,genre,music,lyrics,album => String
artists,singers =>Array
isClassical=>Boolean
*/
//Inialising Function as a constructor

function songConstructor(name,artists,genre,music,lyrics,isClassical,album,singers){
	this.name = name;
	this.artists = artists;
	this.genre = genre;
	this.music = music;
	this.lyrics = lyrics;
	this.isClassical = isClassical;
	this.album = album;
	this.singers = singers;
	this.showType = function(){
		if(this.isClassical){
			console.log('this is classical music');
		}else{
			 console.log('this is modern music');
		}
	}
	this.sayArtistsNames = function() {
		for(var i = 0;i<this.artists.length;i++){
			console.log('Artist '+parseInt(i+1)+': '+this.artists[i]);
		}
	
	}
	this.saySingersNames = function() {
                for(var i = 0;i<this.singers.length;i++){
                        console.log('Singer '+parseInt(i)+': '+this.singers[i]);
                }

        }
}
//Initialsing array
var singers = ['A R Rahman', 'Sukhwinder Singh', 'Tanvi', 'Mahalakshmi Iyer', 'Vijay Prakash'];
var artists = ['Anil Kapoor', 'Irrfan Khan', 'Dev Patel', 'Freida Pinto'];

var songOne = new songConstructor('Jai Ho',artists,'Bolywood','A R Rahman','Gulzaar',false,'Slumdog Millionaire');

songOne.showType(); 
songOne.sayArtistsNames();
//Integer Initialization
var lengthOfArtists = songOne.artists.length;
console.log('Total no of artists: '+lengthOfArtists);

//****-----End OF File -----****


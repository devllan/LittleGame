// CODELAB: Register service worker.
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
	  // Registration was successful
	  console.log('ServiceWorker registration successful with scope: ', registration.scope);
	}).catch(function(err) {
	  // registration failed :(
	  console.log('ServiceWorker registration failed: ', err);
	});
}

const WordOfToday = {
	getWord: (date) => {
		let start = new Date("2019-05-01 00:00:00") * 1;
		let days = Math.floor( (date*1 - start)/1000/3600/24 );
		if( days < 0 ){
			days = 0;
		}
		days = days % DB.length;
		return DB[days];
	},
	template: function _(data){
		if( !_.template ){
			let source = document.getElementById("template-wordoftheday").innerHTML;
			_.template = Handlebars.compile(source);
		}
		
		let html = _.template(data);
		let x=document.createElement("temp");
		x.innerHTML = html;
		return x.firstElementChild;
	},
	getOneDay: (day) =>{
		const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 	'Oct', 'Nov', 'Dec'];
		let month = MONTH_SHORT[day.getMonth()];
		let date = day.getDate();
		if( date < 10 ){
			date = "0" + date;
		}
		let w = WordOfToday.getWord(day);
		let d = WordOfToday.template({
			month: month,
			day: date,
			source: w.text,
			translation: w.translation,
			link: w.link,
			examples: w.examples
		});
		return d;
	}
}
function onReady(){
	
	//generate words from 20190501 to now, local timezone
	let today = new Date();
	//update today's word
	document.getElementById("wod-of-today").replaceWith(
		WordOfToday.getOneDay(today)
	);
	for(let i = 1;i < 15;i ++){
		let day = new Date(1*today - 24*3600*1000*i);
		var box = document.getElementsByClassName("mdl-grid")[0];
		box.append(WordOfToday.getOneDay(day));	
	}
	
}

window.onload = function(){
	onReady();
}
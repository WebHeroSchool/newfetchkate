let body = document.body;
let url = window.location.toString();
			const getNameFromUrl = (url) => {
			  let getUrl = url.split('=');
			  let name = getUrl[1]; //
			  if(name == undefined) {
			  name = 'katerinaSaranM';
			  }
			return name;
			}
			
			fetch(`https://api.github.com/users/${getNameFromUrl(url)}`)
				.then(res => res.json())
				.then(json => {
					console.log(json.avatar_url);
					console.log(json.name);
					console.log(json.bio);
					console.log(json.html_url);

					const date = document.getElementById('date');
					let preloader = document.getElementById('preloader');
					setTimeout(function() {
						preloader.classList.add('hidden');}, 2000);
			
					let photo = new Image();
					photo.src = json.avatar_url;
					document.body.append(photo);
			
					let name  = document.getElementsByTagName('a');
					if (json.name != null) {
						(name[0]).innerHTML = json.name;
					} else {
						name.innerHTML = "_" ;
					}
					document.body.append(name[0]);
					(name[0]).href = json.html_url;
					
					let bio = document.getElementsByTagName('p');
					if (json.bio != null) {
						bio[0].innerHTML = json.bio;
					} else {
						bio.innerHTML = "_";
					}
					document.body.append(bio[0]);
					
				})
				.catch(err => alert('_')); 

				let apiLink = requestUrl();

				let currentDate = new Date();
				
				const getDate = new Promise((resolve, reject) => {
					setTimeout(() => currentDate ? resolve(date.innerHTML = currentDate.toDateString()) : reject('не удалось получить'), 2000);
				})

				const renderCard = function(obj) {
					userAva.src = obj.avatar_url;
					userLink.innerHTML = obj.login;
				}
				fetch(apiLink)

				  Promise.all([getDate])
				  .then(() => fetch(apiLink))
				  .then(res => res.json())
				  .then(obj => newUser => Object.assign({}, obj))
				  .then(newUser => renderCard(newUser))
				  .catch(err => console.log(err));

			
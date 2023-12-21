// smooth scroll
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});

document.addEventListener("DOMContentLoaded", () => {

	
	const leetcodeElement = document.getElementById("leetcode-qsns");
	const githubElement = document.getElementById("github-repos");
	const codechefElement = document.getElementById("codechef-stars");
	  
	fetch('https://leetcode-api-faisalshohag.vercel.app/user9015Y')
	  .then(response => {
		if (!response.ok) {
		  throw new Error('Network response was not ok');
		}
		return response.json();
	  })
	  .then(data => {
		console.log(data); 
		var totalSolved = data.totalSolved;
		leetcodeElement.innerHTML = `<h2>${totalSolved}</h2><p>Leetcode Questions</p>`;
	  })
	  .catch(error => {
		leetcodeElement.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
	  });

	fetch(`https://api.github.com/users/dayitachaudhuri`, {
	})
	.then(response => {
		if (!response.ok) {
		throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => {
		const numberOfRepos = data.public_repos;
		githubElement.innerHTML = `<h2>${numberOfRepos}</h2><p>Github Repositories</p>`;

	})
	.catch(error => {
		githubElement.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
	});

	fetch(`https://codeforces.com/api/user.info?handles=dayita_c`)
	.then(response => {
		if (!response.ok) {
		throw new Error('Network response was not ok');
		}
		return response.json();
	})
	.then(data => {
		const userRating = data.result[0].rating;
		codechefElement.innerHTML = `<h2>${userRating}</h2><p>Codeforces Rating</p>`;
	})
	.catch(error => {
		codechefElement.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
	});

  });
  
  
  
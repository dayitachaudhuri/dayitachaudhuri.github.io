document.addEventListener("DOMContentLoaded", () => {

	const leetcodeElement = document.getElementById("leetcode-qsns");
	const githubElement = document.getElementById("github-repos");
	const codechefElement = document.getElementById("codechef-stars");

    //=======================================================================
	// Leetcode Data
	//=======================================================================
    
	fetch('https://leetcode-api-faisalshohag.vercel.app/user9015Y')
	  .then(response => {
		if (!response.ok) {
		  throw new Error('Network response was not ok');
		}
		return response.json();
	  })
	  .then(data => {
		console.log(data); 
		const totalSolved = data.totalSolved;
        const easySolved = data.easySolved;
        const mediumSolved = data.mediumSolved;
        const hardSolved = data.hardSolved;
		leetcodeElement.innerHTML = `<h2>${totalSolved}</h2><p>Leetcode Questions</p>`;

		// Leetcode Chart

		const chart = {
			labels: ['Easy', 'Medium', 'Hard'],
			datasets: [{
			  data: [easySolved, mediumSolved, hardSolved],
			  backgroundColor: [ 'skyblue', 'deepskyblue', 'blue']
			}]
		  };
		  const ctx = document.getElementById('leetPieChart').getContext('2d');
		  const leetPieChart = new Chart(ctx, {
			type: 'pie',
			data: chart
		  });
	  })
	  .catch(error => {
		leetcodeElement.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
	  });

    //=======================================================================
    // Github Data
	//=======================================================================

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
		githubElement.innerHTML = `<h2>49*</h2><p>Github Repositories</p>`;
	});

	//=======================================================================
    // CP Data
	//=======================================================================
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
  
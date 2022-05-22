
// start this is button to top 
let topbtn = document.getElementById("topbtn");
window.onscroll = function () {
    if (window.scrollY >= 800) {
        topbtn.style.display = "block";
    } else {
        topbtn.style.display = "none";
    }
};

topbtn.onclick = function () {
    window.scrollTo({
        left:0,
        top: 0,
        behavior: 'smooth',
    });

};
// end start this is button to to











// start fetch repositries on github by username

//main varibles
let theinput = document.querySelector(".get-repos input");
let getbutton = document.querySelector(".get-button");
let repedata=document.querySelector(".show-data");

window.onload = function () {
    theinput.focus();
};

getbutton.onclick = function () {
    getrepo();
};


// function get repos 

function getrepo() {
    if (theinput.value == "") {
        repedata.innerHTML = "<span>please write the github username </span>";
        
    }
    else {
        fetch(`https://api.github.com/users/${theinput.value}/repos`)
            .then(response => response.json())
            
            .then((repostries) => {
                repedata.innerHTML = '';
//loop on repositries
                repostries.forEach(repo => {

                    //create main div
                    let maindiv = document.createElement("div");

                    //create repo name
                    let reponame = document.createTextNode(repo.name);
                    //apend the text to main div
                    maindiv.appendChild(reponame);

// create repo url
                    let repourl = document.createElement('a');

                    //create the url text 
                    let urltext = document.createTextNode('visit');

                    //apend the url text to url
                    repourl.appendChild(urltext);
                    
                    //add the hypertext reference "href"
                    repourl.href = `http://github.com/${theinput.value}/${repo.name}`;

                    //open the link in new tap
                    repourl.setAttribute('target', '_blank');

                    //apend url to the main div
                    maindiv.appendChild(repourl);

                    //create stars count span

                    let starspan = document.createElement('span');

                    //create stars text
                    let startext = document.createTextNode(` stars ${repo.stargazers_count}`);

                    //add the startext to starspan
                    starspan.appendChild(startext);
                    
                    //add starscount to the main div
                    maindiv.appendChild(starspan);

                    //add class name to the main div

                    maindiv.className = 'repo-box';

                    //append the main div to container
                    repedata.appendChild(maindiv);

                });
                

            });
    
    
    }
}


// end fetch repositries on github by username
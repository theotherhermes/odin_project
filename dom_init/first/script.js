const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red_p = document.createElement('p');
red_p.classList.add('red_p');
red_p.textContent = "Hey I’m red!";
red_p.style.cssText = "color: red;"

container.appendChild(red_p);

const nodeDiv = document.createElement("div");
const nodeP = document.createElement("p");
nodeP.textContent = "Yeaaahh";

container.appendChild(nodeDiv);
nodeDiv.appendChild(nodeP);

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert("Hello World");
});
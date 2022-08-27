const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is glorious text-content!';

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.cssText = 'color: red';

const h3 = document.createElement('h3');
h3.textContent = "I'm a blue h3!";
h3.style.cssText = 'color: blue'

const newDiv = document.createElement('div');
newDiv.style.border = '2px solid black';
newDiv.style.backgroundColor = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const p2 = document.createElement('p');
p2.textContent = "ME TOO!";

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const best_btn = document.querySelector('#best_btn');
best_btn.addEventListener('click', () => {
    alert("Hello World");
})
best_btn.addEventListener('click', function (e) {
    console.log(e);
});
best_btn.addEventListener('click', function (e) {
    console.log(e.target);
});
best_btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})


container.appendChild(content);
container.appendChild(para);
container.appendChild(h3);
container.appendChild(newDiv);

newDiv.appendChild(h1);
newDiv.appendChild(p2);
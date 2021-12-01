import './less/index.less'

// Your code goes here!
const logoHead = document.querySelector('.logo-heading');

const mousePink = () => {
    logoHead.style.backgroundColor = 'pink';
}

logoHead.addEventListener('mouseover', mousePink)

const mouseOut = () => {
    logoHead.style.backgroundColor = '';
}

logoHead.addEventListener('mouseout', mouseOut);

const images = document.querySelectorAll('.img-content img')

const bigger = (event,img) => {
    img.style.width = '60%';
}

images.forEach(img => {
    img.addEventListener('dblclick', (event) => bigger(event,img))
});

const header = document.querySelector('header');

const scroll = () => {
    header.style.backgroundColor = 'blue';
}

document.addEventListener('wheel', scroll);

const paras = document.querySelector('.intro img');

const opac = () => {
    paras.style.opacity = '10%';
}

paras.addEventListener('click', opac)

const foot = document.querySelector('footer p');

const footBorder = () => {
    foot.style.border = '4px solid red';
}

document.addEventListener('keydown', footBorder);

const footUnborder = () => {
    foot.style.border = '';
}
document.addEventListener('keyup', footUnborder);
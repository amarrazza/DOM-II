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

import createRender from '../src/createRender.js';

const
    inputMarkdown = localStorage.getItem('inputMarkdown'),
    inputElement = document.querySelector('.app__input'),
    render = createRender({
        outputElement: document.querySelector('.app__output'),
        lineElementClassName: 'app__output__line'
    });

if(inputMarkdown){
    inputElement.value = inputMarkdown;
    render(inputMarkdown);
}

inputElement.addEventListener('input', () => {
    const inputMarkdown = inputElement.value;
    localStorage.setItem('inputMarkdown', inputMarkdown);
    render(inputMarkdown);
});
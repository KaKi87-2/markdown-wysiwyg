import createRender from '../src/createRender.js';
import generateCss from '../src/generateCss.js';

const
    inputMarkdown = localStorage.getItem('inputMarkdown'),
    inputElementClassName = 'app__input',
    inputElement = document.querySelector(`.${inputElementClassName}`),
    outputElementClassName = 'app__output',
    outputLineElementClassName = 'app__output__line',
    render = createRender({
        outputElement: document.querySelector(`.${outputElementClassName}`),
        outputLineElementClassName
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

const css = new CSSStyleSheet();
css.replaceSync(generateCss({
    inputElementClassName,
    outputElementClassName
}));
document.adoptedStyleSheets.push(css);
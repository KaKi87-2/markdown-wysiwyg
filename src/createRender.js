import parseMarkdown from './parseMarkdown.js';

export default ({
    outputElement,
    lineElementClassName,
    getItemElementClassName = style => `${lineElementClassName}__item${style ? `--${style}` : ''}`,
}) => markdown => {
    const result = parseMarkdown(markdown);
    outputElement.innerHTML = '';
    for(const line of result){
        const lineElement = document.createElement('p');
        lineElement.classList.add(lineElementClassName);
        for(const item of line){
            const itemElement = document.createElement('span');
            itemElement.classList.add(getItemElementClassName(), ...item.styles.map(style => getItemElementClassName(style)));
            itemElement.classList.toggle(getItemElementClassName('markup'), item.isMarkup);
            itemElement.textContent = item.content;
            lineElement.appendChild(itemElement);
        }
        outputElement.appendChild(lineElement);
    }
};
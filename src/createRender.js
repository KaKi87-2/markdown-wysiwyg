import { highlightText } from 'https://cdn.jsdelivr.net/npm/@speed-highlight/core/dist/index.js';

import parseMarkdown from './parseMarkdown.js';

export default ({
    outputElement,
    lineElementClassName,
    getItemElementClassName = style => `${lineElementClassName}__item${style ? `--${style}` : ''}`,
}) => async markdown => {
    const result = parseMarkdown(markdown);
    outputElement.innerHTML = '';
    let lastCodeblockLanguage;
    for(const line of result){
        const lineElement = document.createElement('p');
        lineElement.classList.add(lineElementClassName);
        for(const item of line){
            const itemElement = document.createElement('span');
            itemElement.classList.add(getItemElementClassName(), ...item.styles.map(style => getItemElementClassName(style)));
            itemElement.classList.toggle(getItemElementClassName('markup'), item.isMarkup);
            if(item.styles.includes('codeblockLanguage'))
                lastCodeblockLanguage = item.content;
            if(item.styles.includes('codeblock') && !item.isMarkup)
                itemElement.innerHTML = await highlightText(item.content, lastCodeblockLanguage, true, { hideLineNumbers: true });
            else
                itemElement.textContent = item.content;
            lineElement.appendChild(itemElement);
        }
        outputElement.appendChild(lineElement);
    }
};
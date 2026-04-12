import createRender from './createRender.js';

export default ({
    inputElement,
    outputElementClassName,
    outputLineElementClassName = `${outputElementClassName}__line`,
    getOutputLineItemElementClassName,
    fontFamily = 'monospace',
    fontSize
}) => {
    let isAutoRender = false;
    const
        outputElement = document.createElement('div'),
        {
            top,
            left,
            width,
            height
        } = inputElement.getBoundingClientRect(),
        style = window.getComputedStyle(inputElement),
        marginTop = parseFloat(style.marginTop) || 0,
        borderTop = parseFloat(style.borderTopWidth) || 0,
        paddingTop = parseFloat(style.paddingTop) || 0,
        marginLeft = parseFloat(style.marginLeft) || 0,
        borderLeft = parseFloat(style.borderLeftWidth) || 0,
        paddingLeft = parseFloat(style.paddingLeft) || 0,
        paddingRight = parseFloat(style.paddingRight) || 0,
        borderRight = parseFloat(style.borderRightWidth) || 0,
        paddingBottom = parseFloat(style.paddingBottom) || 0,
        borderBottom = parseFloat(style.borderBottomWidth) || 0,
        render = createRender({
            outputElement,
            outputLineElementClassName,
            getOutputLineItemElementClassName
        }),
        getInputValue = () => inputElement.tagName === 'TEXTAREA' ? inputElement.value : inputElement.innerText;
    if(!fontSize)
        fontSize = style.fontSize;
    outputElement.classList.add(outputElementClassName);
    Object.assign(outputElement.style, {
        position: 'absolute',
        top: `${top + marginTop + borderTop + paddingTop + window.scrollY}px`,
        left: `${left + marginLeft + borderLeft + paddingLeft + window.scrollX}px`,
        width: `${width - paddingLeft - paddingRight - borderLeft - borderRight}px`,
        height: `${height - paddingTop - paddingBottom - borderTop - borderBottom}px`,
        boxSizing: 'border-box',
        zIndex: '1000',
        fontFamily,
        fontSize,
        lineHeight: style.lineHeight
    });
    Object.assign(inputElement.style, {
        fontFamily,
        fontSize
    });
    inputElement.addEventListener('input', () => isAutoRender && render(getInputValue()));
    document.body.appendChild(outputElement);
    return {
        start: () => {
            isAutoRender = true;
            render(getInputValue());
        },
        stop: () => isAutoRender = false
    };
};
export default ({
    inputElementClassName,
    outputElementClassName,
    outputLineElementClassName = `${outputElementClassName}__line`,
    getOutputLineItemElementClassName = style => `${outputLineElementClassName}__item${style ? `--${style}` : ''}`
}) => /*language=CSS*/ `
    .${inputElementClassName},
    .${outputElementClassName} {
        --onedark-red: #E06C75;
        --onedark-green: #98C379;
        --onedark-yellow: #E5C07B;
        --onedark-dark-yellow: #D19A66;
        --onedark-blue: #61AFEF;
        --onedark-purple: #C678DD;
        --onedark-cyan: #56B6C2;
        --onedark-foreground: #ABB2BF;
        --onedark-background: #282C34;
        --onedark-comment-grey: #5C6370;
        --onedark-special-grey: #3B4048;
    }

    .${inputElementClassName} {
        color: transparent !important;
        caret-color: var(--onedark-foreground) !important;
        background: transparent !important;
    }

    .${inputElementClassName}::selection {
        color: transparent !important;
        background-color: rgba(255, 255, 255, 0.1) !important;
    }
    
    .${outputElementClassName} {
        box-sizing: border-box;
        pointer-events: none;
        white-space: pre-wrap;
    }

    .${outputLineElementClassName}:empty:before {
        content: ' ';
    }
    
    .${outputLineElementClassName}__item--markup {
        color: var(--onedark-comment-grey);
    }
    
    .${getOutputLineItemElementClassName('bold')} {
        font-weight: bold;
    }
    
    .${getOutputLineItemElementClassName('italic')} {
        font-style: italic;
    }
    
    .${getOutputLineItemElementClassName('strikethrough')} {
        text-decoration: line-through;
    }
    
    .${getOutputLineItemElementClassName('hyperlinkText')} {
        color: var(--onedark-blue);
    }
    
    .${getOutputLineItemElementClassName('hyperlinkAddress')} {
        text-decoration: underline;
    }
    
    .${getOutputLineItemElementClassName('code')},
    .${getOutputLineItemElementClassName('codeblock')}:not(.${getOutputLineItemElementClassName('markup')}) {
        background-color: var(--onedark-special-grey);
    }
    
    .${getOutputLineItemElementClassName('code')} {
        border-radius: 0.1rem;
        outline: 1px solid var(--onedark-special-grey);
    }
    
    .${getOutputLineItemElementClassName('codeblock')}:not(.${getOutputLineItemElementClassName('markup')}) {
        display: inline-block;
        box-shadow: -2px 0 0 0 var(--onedark-special-grey), 2px 0 0 0 var(--onedark-special-grey);
    }
`;
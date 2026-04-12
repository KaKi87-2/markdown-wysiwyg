export default ({
    inputElementClassName,
    outputElementClassName,
    lineElementClassName = `${outputElementClassName}__line`,
    getItemElementClassName = style => `${lineElementClassName}__item${style ? `--${style}` : ''}`
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
        pointer-events: none;
        white-space: pre;
    }

    .${lineElementClassName}:empty:before {
        content: ' ';
    }
    
    .${lineElementClassName}__item--markup {
        color: var(--onedark-comment-grey);
    }
    
    .${getItemElementClassName('bold')} {
        font-weight: bold;
    }
    
    .${getItemElementClassName('italic')} {
        font-style: italic;
    }
    
    .${getItemElementClassName('strikethrough')} {
        text-decoration: line-through;
    }
    
    .${getItemElementClassName('hyperlinkText')} {
        color: var(--onedark-blue);
    }
    
    .${getItemElementClassName('hyperlinkAddress')} {
        text-decoration: underline;
    }
    
    .${getItemElementClassName('code')},
    .${getItemElementClassName('codeblock')}:not(.${getItemElementClassName('markup')}) {
        background-color: var(--onedark-special-grey);
    }
    
    .${getItemElementClassName('code')} {
        border-radius: 0.1rem;
        outline: 1px solid var(--onedark-special-grey);
    }
    
    .${getItemElementClassName('codeblock')}:not(.${getItemElementClassName('markup')}) {
        display: inline-block;
        box-shadow: -2px 0 0 0 var(--onedark-special-grey), 2px 0 0 0 var(--onedark-special-grey);
    }
`;
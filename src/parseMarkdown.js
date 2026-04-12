import { tokenize } from 'markdown-tokens';

const
    styledFormatting = [
        'bold',
        'italic'
    ],
    unstyledFormatting = [
        'strikethrough',
        'hyperlinkText',
        'hyperlinkAddress',
        'code'
    ],
    multilineUnstyledFormatting = [
        'codeblock',
        'quote'
    ];

export default text => {
    const
        lines = tokenize(text),
        currentMultilineStyles = new Set(),
        result = [];

    for(const line of lines){
        const lineResult = [];
        let currentStyles = new Set();
        for(const item of line){
            if(styledFormatting.includes(item.formattingStart))
                currentStyles.add(item.formattingStart);
            if(unstyledFormatting.includes(item.formattingEnd))
                currentStyles.delete(item.formattingEnd);
            if(multilineUnstyledFormatting.includes(item.formattingEnd))
                currentMultilineStyles.delete(item.formattingEnd);
            if(item.formattingMetadata)
                currentStyles.add(item.formattingMetadata);
            lineResult.push({
                content: item.content,
                isMarkup: !!(item.formattingStart || item.formattingEnd || item.formattingMetadata),
                styles: [...currentStyles, ...currentMultilineStyles]
            });
            if(multilineUnstyledFormatting.includes(item.formattingStart))
                currentMultilineStyles.add(item.formattingStart);
            if(unstyledFormatting.includes(item.formattingStart))
                currentStyles.add(item.formattingStart);
            if(styledFormatting.includes(item.formattingEnd))
                currentStyles.delete(item.formattingEnd);
        }
        result.push(lineResult);
    }

    return result;
};
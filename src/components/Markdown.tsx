import { Markdown as GrommetMarkdown, Paragraph, MarkdownExtendedProps } from "grommet";
import styled from 'styled-components';

export function Markdown({ children }: { children: string }) {
    //@ts-ignore not sure why this is giving a TS error?
    return (<GrommetMarkdown components={{ p: styled(Paragraph)`max-width: 100%;` }}>{children}</GrommetMarkdown>);
}
import './article.css'
import { LoremIpsum } from 'react-lorem-ipsum';

interface ArticleProps {
    date: string;
    articleHeader: string;
    loremLength: number
    photoSrc: string
    photoAlt: string;
}

export default function Article({ date, articleHeader, loremLength, photoSrc, photoAlt }: ArticleProps) {
    return (
        <article>
            <time dateTime={date}>{date}</time>
            <h2>{articleHeader}</h2>
            <img src={photoSrc} alt={photoAlt} />
            <LoremIpsum p={1} avgWordsPerSentence={loremLength} />

            <div className="articleCont"><a href="">Continues...</a></div>
        </article>
    )
}
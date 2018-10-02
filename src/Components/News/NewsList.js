import React from 'react';

import styles from './News.scss';

export class NewsList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.news.map((news) => 
                    <li key={news.id} className={styles.item}>
                        <h2 className={styles.title}>{news.title}</h2>
                        {/* <p>{news.text}</p> */}
                        {news.text.map((line) => 
                            <p className={styles.text}>{line}</p>
                        )}
                        <p className={styles.date}>{news.date}</p>
                    </li>
                )}
            </ul>
        )
    }
}
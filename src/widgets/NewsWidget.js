import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiKey = 'r300O6771I0qRuuHRm47-X4eq3cLrbW29flutuDEW6c'; // Replace with your actual API key from News Catcher API

export default function NewsWidget() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      try {
        const response = await axios.get(
          `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=business`,
          {
            headers: {
              'x-api-key': apiKey
            }
          }
        );
        setHeadlines(response.data.articles.slice(0, 5).map((article) => article.title));
      } catch (error) {
        console.log(error);
      }
    };

    fetchHeadlines();
  }, []);

  return (
    <div>
      <h2>News Headlines</h2>
      {headlines.length > 0 ? (
        <ul>
          {headlines.map((headline, index) => (
            <li key={index}>{headline}</li>
          ))}
        </ul>
      ) : (
        <p>Loading headlines...</p>
      )}
    </div>
  );
}



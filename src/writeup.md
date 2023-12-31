# News widget

The News Widget in the Planner App utilizes the News Catcher API to retrieve the latest news headlines from a variety of sources.
This API allows the widget to fetch real-time news data every 2 minutes, ensuring that users stay informed with the most recent developments.

The code for the News Widget is implemented using React. It leverages the Axios library to make HTTP requests to the News Catcher API. By specifying the API endpoint and providing the necessary API key, the widget retrieves a collection of news articles.

Upon fetching the data, the widget extracts the headlines from the articles and stores them in the component's state using the useState hook provided by React. This state allows the widget to manage and update the headlines dynamically.

The News Widget limits the number of headlines displayed to 5, providing a concise overview of the latest news.

The News Catcher API is a powerful news aggregation service that collects news articles from a wide range of sources. It offers a comprehensive selection of news content across various categories and topics. By integrating this API into the Planner App, users can access diverse news articles and stay updated on global events, technology advancements, business trends, and more.

Using the News Widget is straightforward. Simply click on add widgets and select the news widget to add it to the planner. It automatically fetches the latest news headlines and displays them in a user-friendly format. The widget shows a maximum of five headlines, ensuring a concise overview of the current news. 

The News Widget not only enhances productivity but also keeps users informed and updated on the latest events and developments. By integrating news functionality directly into the planner app, users can efficiently manage their tasks and stay connected with the world at the same time.

Overall, the News Widget offers a valuable feature that enriches the Planner App experience, providing users with timely news updates and seamless access to important information, all within a single, convenient interface.

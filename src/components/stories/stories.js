import React, { Component } from "react";

import ApiService from "./../../services/service";
const LoadingIndicator = (props) => {
  return (
    <h1>
      Hey some async call in progress ! (no enough time to implement spinner )
      please wait till the data is fetched{" "}
    </h1>
  );
};
class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listNews: [],
      isLoading: true,
    };
    this.listStories();
  }

  async listStories() {
    const listIds = await ApiService.ApiGet("showstories.json?print=pretty");
    let array = [];
    for (let id of listIds.data) {
      let news = await ApiService.ApiGet("item/" + id + ".json?print=pretty");
      array.push(news.data);
    }
    this.setState({ listNews: array, isLoading: false });
  }

  render() {
    return (
      <div>
        <h4>{this.state.isLoading ? <LoadingIndicator /> : "Stories"}</h4>
        <ul>
          {this.state.listNews.map((item) => {
            return (
              <li key={item.id}>
                <h3>Storie by : {item.by}</h3>
                <p>{item.title}</p>
                <a href={item.url}>{item.url}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Story;

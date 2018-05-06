import React from "react";
import ArticlesList from "../components/articles-list";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { BreakTimer } from "./break-timer";

export class NewsArticles extends React.Component {
  constructor(props) {
    super(props);

    // this.renderBreakComponent = this.renderBreakComponent.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(actions.getArticles());

    if (this.props.onBreak) {
      this.breakTimer = setInterval(() => {
        if (this.props.breakTimeRemaining > 0) {
          this.props.dispatch(actions.decrementBreakTimer());
        } else {
          clearInterval(this.breakTimer);
          this.props.dispatch(actions.stopBreakTimer());
        }
      }, 1000);
    }
  }

  componentWillUnmount() {
    if (this.props.breakTimer) {
      clearInterval(this.breakTimer);
    }
  }

  render() {
    return (
      <div>
        <BreakTimer
          breakTimeRemaining={this.props.breakTimeRemaining}
          breakTimeTotal={this.props.breakTimeTotal}
        />
        <ArticlesList articles={this.props.articles} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(`map state in new articles called`);
  return {
    articles: state.articles,
    onBreak: state.onBreak,
    breakTimeRemaining: state.breakTimeRemaining,
    breakTimeTotal: state.breakTimeTotal
  };
};

export default connect(mapStateToProps)(NewsArticles);

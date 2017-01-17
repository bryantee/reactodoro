import React, { PropTypes } from 'react'
import ArticlesList from '../components/articles-list';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

export class NewsArticles extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // AJAX
    this.props.dispatch(actions.getArticles());
  }

  render () {
    return (
      <div>
        <ArticlesList articles={this.props.articles} />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  articles: state.articles
});

export default connect(mapStateToProps)(NewsArticles);

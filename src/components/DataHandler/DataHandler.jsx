import React from 'react';

class DataHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(this.props.url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ data, isLoading: false });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  }

  render() {
    const { data, isLoading, error } = this.state;
    const { render } = this.props;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return render(data);
  }
}

export default DataHandler;

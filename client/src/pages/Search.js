import React, { Component } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SubmitBtn from "../components/SubmitBtn";
import Card from "../components/Card";
import { Grid, Cell } from "react-foundation";
import { Link } from "react-router-dom";
import Button from "../components/Link";
import Alert from "../components/Alert";
import API from "../utils/API";
import "./style.css";

class Search extends Component {
  state = {
    title: "",
    bookList: [],
    termSearched: true,
    updateBook: false,
    savedBookTitle: "",
  };

  searchBooksByTitle = () => {
    
    API.searchbyTitle(this.state.title)
      .then(res => {
        this.setState({ bookList: res.data.items });
      })
      .catch(error => console.log(error));
  };

  handleInputChange = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    if (this.state.title) {
      this.setState({ termSearched: false });
      this.searchBooksByTitle();
    }
  };

  saveBookToDB = data => {
    API.addBook(data)
      .then(res => {
        this.setState({ savedBookTitle: res.data.title });
        this.notify();
      })
      .catch(error => console.log(error));
  };

  removeNotification = () => {
    this.setState({ updateBook: false });
  };

  notify = () => {
    API.notifyUser(() => {
      this.setState({ updateBook: true });
    });
    setTimeout(this.removeNotification, 3000);
  };

  render() {
    return (
      <div>
        <Header title="Google Books Search" />

        <Link to="/books">
          <Button label={"Library"} />
        </Link>
        <div className="search-container">
          <Grid className="display">
            <h2 className="sub-title">Search Books</h2>
          </Grid>

          <Grid className="display search-form">
            <form>

                <SearchBar
                    name="title"
                    value={this.state.title}
                    onChange={this.handleInputChange}                                        
                    placeholder={
                    this.state.termSearched
                        ? "Search by book title..."
                        : "Book title Required"
                    }
                />
  
                <SubmitBtn label="Search" onClick={this.handleSubmit} />

            
              
            </form>
          </Grid>
          {this.state.updateBook ? (
            <Alert
              heading="Book saved"
              message={`"${this.state.savedBookTitle}" has been added to your library.`}
            />
          ) : null}

          <Grid>
            {this.state.bookList.map(book => {
              let result = {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors
                  ? book.volumeInfo.authors.join(", ").toString()
                  : "Author unavailable.",
                image: book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : "../images/default.png",
                description: book.searchInfo
                  ? book.searchInfo.textSnippet
                  : "No description available.",
                link: book.volumeInfo.previewLink,
              };
              return (
                <Grid className="display2" key={book.id}>
                  <Cell small={10} large={10}>
                    <Card
                      title={result.title}
                      authors={result.authors}
                      image={result.image}
                      description={result.description}
                      link={result.link}
                      btnType="Save"
                      handler={() => this.saveBookToDB(result)}
                    />
                  </Cell>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Search;

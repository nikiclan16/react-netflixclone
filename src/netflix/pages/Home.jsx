import { makeStyles } from "@material-ui/core";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Row } from "../../components/Row";
import requests from "../../Requests";

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title="DOCUMENTARIES MOVIES"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default Home;

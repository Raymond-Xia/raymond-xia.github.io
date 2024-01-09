import ListGroup from "./components/ListGroup";
import Button from "react-bootstrap/Button";
import Tree from "./assets/tree.jpg";
import Image from "react-bootstrap/Image";

function Home() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <Image src={Tree} alt="Tree" fluid />
      <div className="jumbotron">
        <h1 className="display-4">Welcome to Raymond's Website!</h1>
        <p className="lead">
          Here you can find cool things about me and my technical skills.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {/* <Button variant="primary">Lit</Button> */}
    </>
  );
}

export default Home;

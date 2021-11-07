import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

function App() {
  return (
    <>
      <NavBar />
      <div  className="container">
        <h1> Hi</h1>
        <h1 className="text-primary">I'm Deise Kinsk. </h1>
        <h1>I am looking for an opportunity for a developer entry-level job.</h1>
        <DataTable />
      </div>
      
      <Footer />
    </>
  );
}

export default App;

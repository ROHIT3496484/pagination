import React from 'react';
import {Poostpagination} from './Component/Pagination/Poostpagination';





function App() {
  /**const [val, setVal] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchval = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setVal(data.products);
    }
  };

  useEffect(() => {
    fetchval();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = val.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);**/

  return (
    <div className="App">
      {/**<h1>Pagination</h1>
      <div className="product-grid">
        {currentItems.length > 0 &&
          currentItems.map((mp) => (
            <span key={mp.id}>
              <img src={mp.thumbnail} alt={mp.title} />
              <p>{mp.title}</p>
            </span>
          ))}
      </div>
      <Page
        itemsPerPage={itemsPerPage}
        totalItems={val.length}
        paginate={paginate}
        currentPage={currentPage}
      />**/}
      <Poostpagination/>
    </div>
  );
}

export default App();
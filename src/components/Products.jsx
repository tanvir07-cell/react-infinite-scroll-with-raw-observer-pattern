import { useEffect, useRef, useState } from "react";
import observer from "../../concept/observer";
import "../../concept/subscriber";

const Products = () => {
  const loadingRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); // Start from page 1

  useEffect(() => {
    async function fetchData(page) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
        );
        const data = await response.json();
        if (data.length === 0) {
          setHasMore(false);
        }
        setProducts((prevProducts) => [...prevProducts, ...data]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }


    if(!products.length){
      fetchData(page);
    }

    console.log(loadingRef.current?.getBoundingClientRect(),window.innerHeight)

    const handleScroll = () => {
      if (loadingRef.current && hasMore && loadingRef.current.getBoundingClientRect().top < window.innerHeight){
        observer.notify("found", page);
        setPage((prevPage) => prevPage + 1);
        fetchData(page+1);
      }
    };
    

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [page, hasMore,products]);

  return (
    <div>
      <p>Total : {products?.length}</p>
      <h1>Products</h1>
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.title}</h3>
          <p>{product.body}</p>
        </div>
      ))}
      {hasMore && <h3 ref={loadingRef}>Loading...</h3>}
    </div>
  );
};

export default Products;


import { useState } from 'react'
import { Link } from "react-router-dom";
const Produtos = () => {
  const [products, setProducts] = useState(['Pão']);
  
  const [selected, setSelected] = useState(0);
  const [newProducts, setNewProducts] = useState('');
  const isDisabled = !newProducts;
  
  const updateNewProduct = (event) => setNewProducts(event.target.value);
  const updateSelected = (event) => setSelected(Number(event.target.value));
  
  const create = () => setProducts([ ...products, newProducts ]);
  
  const update = () => setProducts([
    ...products.slice(0, selected),
    newProducts,
    ...products.slice(selected + 1)
  ]);
  
  const remove = () => {
    setProducts([
      ...products.slice(0, selected),
      ...products.slice(selected + 1)
    ]);
    setNewProducts('');
  };
  
  return (
    <div className ="container" >
      <select onChange={updateSelected} size={5}>
        {products.map((product, i) => (
          <option value={i} key={i}>{product}</option>
        ))}
      </select>
      
      <label>New Product:<input value={newProducts} onChange={updateNewProduct} /></label>
      
      <div className ="buttons">
        <button onClick={create} disabled={isDisabled}>create</button>
        <button onClick={update} disabled={isDisabled}>update</button>
        <button onClick={remove}>delete</button>
        <Link to="/dashboard">Página inicial</Link>
      </div>
    </div>
  );
};



export default Produtos;

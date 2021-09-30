import './styles.css'
import { useState } from 'react'
import { Link } from "react-router-dom";
const Usuarios = () => {
  const [person, setPerson] = useState(['Natan']);
  
  const [selected, setSelected] = useState(0);
  const [newPerson, setNewPerson] = useState('');
  const isDisabled = !newPerson;
  
  const updateNewProduct = (event) => setNewPerson(event.target.value);
  const updateSelected = (event) => setSelected(Number(event.target.value));
  
  const create = () => setPerson([ ...person, newPerson ]);
  
  const update = () => setPerson([
    ...person.slice(0, selected),
    newPerson,
    ...person.slice(selected + 1)
  ]);
  
  const remove = () => {
    setPerson([
      ...person.slice(0, selected),
      ...person.slice(selected + 1)
    ]);
    setNewPerson('');
  };
  
  return (
    <div className="container">
      <select onChange={updateSelected} size={5}>
        {person.map((product, i) => (
          <option value={i} key={i}>{product}</option>
        ))}
      </select>
      
      <label>New Person:<input value={newPerson} onChange={updateNewProduct} /></label>
      
      <div className="buttons">
        <button onClick={create} disabled={isDisabled}>create</button>
        <button onClick={update} disabled={isDisabled}>update</button>
        <button onClick={remove}>delete</button>
        <Link to="/dashboard">Página inicial</Link>
      </div>
    </div>
  );
};

export default Usuarios;
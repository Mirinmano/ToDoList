import AddItems from "./AddItems";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from 'react';
import SearchItem from "./SearchItem";

function App() {

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  useEffect(() => {
    JSON.parse(localStorage.getItem('todo_list'))
  }, [items])

  const addItem = (item) => {
    const id = items.length ? (items[items.length - 1].id + 1) : 1;
    const addNewItem = {id, checked:false, item};
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  function handleCheck(id){
    const listItems = items.map((item) => item.id===id?
              {...item, checked:!item.checked} : item);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  function handleDelete(id){
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App"> 
      <Header title="TO DO LIST"/>
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
        items = {items.filter(item => (item.item)
          .toLowerCase().includes(search.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <AddItems 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;

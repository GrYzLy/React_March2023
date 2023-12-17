import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom"

const Items = [
    'Lorem Ipsum',
    'Ipsum Dipsum',
    'Foo Bar',
    'A little black cat',
    'A lazy fox',
    'A jumping dog'
  ];

  const doSearch = term => {
    if(!term)
        return Items
    
    return Items.filter(
        item => item.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1)
    
  }
const  Search = (props) => {
    
    const query = new URLSearchParams(useLocation().search)
    console.log(query.get('q'))

    const returned = doSearch(query.get('q'))

return (
    <div>
        <h1>Search!
        </h1>
        <ul>
            {returned.map(item => (<li>{item}</li>))}
        </ul>
    </div>)
}




export default Search;

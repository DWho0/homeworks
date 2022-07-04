import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import {Row} from 'react-materialize'

const App = () => (
  <div className='container'>
    <Row><AddTodo /></Row>
    
    <VisibleTodoList />
    <Row><Footer /></Row>
  </div>
)

export default App
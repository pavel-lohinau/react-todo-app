import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.css';

export default class TodoList extends Component {

    static defaultProps = {
        deleteTodoId: 0
    }

    static propTypes = {
        deleteTodoId: PropTypes.oneOfType([PropTypes.func, PropTypes.number])
    }

    deleteTodo = (id) => {
        this.props.deleteTodoId(id);
    }

    template = (name, onClick) =>{
        return <div className={this.props.className} onClick={onClick}>
                <span className={'blue-text text-darken-2'}>{name}</span>
            </div>
    }

    render() {
        const { array } = this.props;
        const todoList = array.length !== 0 ? array.map(x => {
            return this.template(x.name, () => { this.deleteTodo(x.id) })}) : this.template('You don\'t have any todo\'s');
        return (
            <Fragment>
               {todoList}
            </Fragment>
        )
    }
}
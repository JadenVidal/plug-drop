import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd';
import PortBay from './PortBay'
import PlugBay from './PlugBay'


const init ={
    ports: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

const updateState = (state,action, value) => {
    const [rack, port] = action.id.split("|")
    const ports = state.ports.slice()
    console.log({action})
    ports[rack][port] = value
    return Object.assign({}, state, {ports})
}

const reducer = (state = init, action) => {
    switch(action.type) {
        case "CONNECT":
            return updateState(state, action, "A")
        case "DISCONNECT":
            return updateState(state, action, null)
        default:
            return state
    }
}

const store = createStore(reducer)

const App = () => {
    return(
        <main>
            <PortBay />
            <PlugBay />
        </main>
    )
}

const AppWithDragDrop = DragDropContext(HTML5Backend)(App)

ReactDOM.render(
    <Provider store={store}>
        <AppWithDragDrop />
    </Provider>, document.getElementById('root'))
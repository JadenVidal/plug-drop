import React from 'react'
import { DragSource } from 'react-dnd'

class Plug extends React.Component {
    render() {
        return this.props.connectDragSource(<div className="h2 w2 ma1 ba bg-purple br-100 mv2">{this.props.children}</div>)
    }
}

const plugSource = {
    beginDrag: (props) => {
        return {}
    },
    endDrag: (props) => {
        if(!props.id) return
            props.onDisconnect(props.id)
        
    }
}

const collect = (connect, monitor) => ({
    connectDragSource: connect.dragSource()
})

export default DragSource('plug', plugSource, collect)(Plug)
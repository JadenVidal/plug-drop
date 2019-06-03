import React from 'react'
import { DropTarget } from 'react-dnd'
import Plug from './Plug'
import Note from './Note'

class Port extends React.Component {
    render() {
        return (
            this.props.port
            ? <Plug id={this.props.id} onDisconnect={this.props.onDisconnect}>
                <Note note="C" rack_address={this.props.id} />
              </Plug>
            : this.props.connectDropTarget(<div className="h2 w2 ba b--red br-100 mv2"></div>)
        )
    }
}

const dropSource = {
    drop: (props) => {
        props.onConnect(props.id)
    }
}

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget()
    }
}

export default DropTarget('plug', dropSource, collect)(Port) 
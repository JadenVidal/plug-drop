import React from 'react'
import { connect } from 'react-redux'
import actions from './actions'
import Port from './Port'

class PortBay extends React.Component {
    render() {
        return (
            <section className="ba b--blue br3 w5 center mt6 flex justify-center">
                {this.props.ports.map((rack, rack_index) => {
                    return <div key={rack_index} className="mh2">{
                        rack.map((port, port_index) => {
                            return <Port key={port_index} id={`${rack_index}|${port_index}`} onConnect={this.props.CONNECT} onDisconnect={this.props.DISCONNECT} port={port}/> 
                        })
                    }</div>
                })}
            </section>
            
        )
    }
}

const mapStateToProps = state => ({
    ports: state.ports
})
export default connect(mapStateToProps, actions)(PortBay)
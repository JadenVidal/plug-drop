import React from 'react'
import Plug from './Plug'

class PlugBay extends React.Component {
    render() {
        return <section className="ba b--green w5 br3 center mt2 flex justify-center">
            <Plug />
        </section>
    }
}

export default PlugBay
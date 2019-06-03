export default dispatch => ({
    CONNECT: port_id => dispatch({type: "CONNECT", id: port_id}),
    DISCONNECT: port_id => dispatch({type: "DISCONNECT", id: port_id})
})
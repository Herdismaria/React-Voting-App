import Server from 'socket.io';

export default function startServer() {
  const io = new Server().attach(8090);

  store.subscribe(
    () => io.emit('state', store.getState().toJS())
  );
}
/*We are now publishing the whole state to everyone whenever any changes occur. This may end up causing a lot of data transfer. One could think of various ways of optimizing this (e.g. just sending the relevant subset, sending diffs instead of snapshots...), but this implementation has the benefit of being easy to write, so we'll just use it for our example app.*/


/* We can listen to 'connection' events on our Socket.io server. We get one each time a client connects. In the event listener we can emit the current state right away */
/*What we can do is simply have our clients emit 'action' events that we feed directly into our Redux store */
io.on('connection', (socket) => {
  socket.emit('state', store.getState().toJS());
  socket.on('action', store.dispatch.bind(store));
});

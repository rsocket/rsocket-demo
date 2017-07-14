const {
  RSocketClient,
  Utf8Encoders,
} = require('rsocket-core');
const RSocketWebSocketClient = require('rsocket-websocket-client').default;

function addMessage(message) {
  var ul = document.getElementById("messages");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  ul.appendChild(li);
}

function main() {
  const url = __WS_URL__;

  // Create an instance of a client
  const client = new RSocketClient({
    setup: {
      // ms btw sending keepalive to server
      keepAlive: 60000,
      // ms timeout if no keepalive response
      lifetime: 180000,
      // format of `data`
      dataMimeType: 'binary',
      // format of `metadata`
      metadataMimeType: 'binary',
    },
    transport: new RSocketWebSocketClient({
      url,
      debug: true, // print frames to console
      lengthPrefixedFrames: false,
    }, Utf8Encoders),
  });

  // Open the connection
  client.connect().subscribe({
    onComplete: socket => {
      socket.onClose().catch(error => console.error(error));

      socket.requestStream({
        data: 'reactive',
        metadata: 'metadata goes here',
      }).subscribe({
        onComplete: () => console.log('complete'),
        onError: error => console.error(error),
        onNext: payload => {
          console.log(payload.data);
          addMessage(payload.data);
        },
        onSubscribe: subscription => {
          subscription.request(100);
        },
      });
    },
    onError: error => console.error(error),
    onSubscribe: cancel => {/* call cancel() to abort */}
  });
}

document.addEventListener('DOMContentLoaded', main);

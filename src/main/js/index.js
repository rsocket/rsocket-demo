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
      keepAlive: 60000,
      lifetime: 180000,
      dataMimeType: 'binary',
      metadataMimeType: 'binary',
    },
    transport: new RSocketWebSocketClient({
      url,
      debug: true,
    }, Utf8Encoders),
  });

  // Open the connection
  client.connect().subscribe({
    onComplete: socket => {
//       socket.onClose().catch(error => console.error(error));

      socket.requestStream({
        data: 'peace',
        metadata: null,
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

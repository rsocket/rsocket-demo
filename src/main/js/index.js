import {RSocketClient, JsonSerializers} from 'rsocket-core';
import RSocketWebSocketClient from 'rsocket-websocket-client';

function addMessage(message) {
  var ul = document.getElementById("messages");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  if (ul.childNodes.length == 0) {
    ul.appendChild(li);
  } else {
    if (ul.childNodes.length > 19) {
      ul.removeChild(ul.lastChild);
    }
    ul.insertBefore(li, ul.firstChild);
  }
}

function main() {
  const url = __WS_URL__;

  // Create an instance of a client
  const client = new RSocketClient({
    setup: {
      keepAlive: 60000,
      lifetime: 180000,
      dataMimeType: 'application/json',
      metadataMimeType: 'application/json',
    },
    transport: new RSocketWebSocketClient({url: url}),
  });

  // Open the connection
  client.connect().subscribe({
    onComplete: socket => {
      socket.requestStream({
        data: null,
        metadata: null,
      }).subscribe({
        onComplete: () => console.log('complete'),
        onError: error => console.error(error),
        onNext: payload => {
          addMessage(payload.data);
        },
        onSubscribe: subscription => {
          subscription.request(10000000);
        },
      });
    },
    onError: error => console.error(error),
    onSubscribe: cancel => {/* call cancel() to abort */}
  });
}

document.addEventListener('DOMContentLoaded', main);

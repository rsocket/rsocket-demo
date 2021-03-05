import {RSocketClient, JsonSerializers} from 'rsocket-core';
import RSocketWebSocketClient from 'rsocket-websocket-client';
const { Flowable } = require('rsocket-flowable');

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
  const url = location.origin.replace(/^http/, 'ws') + "/rsocket";

  // Create an instance of a client
  const client = new RSocketClient({
    setup: {
      keepAlive: 60000,
      lifetime: 180000,
      dataMimeType: 'application/json',
      metadataMimeType: 'message/x.rsocket.routing.v0',
    },
    transport: new RSocketWebSocketClient({url: url}),
  });

  const stream = Flowable.just({
    data: '{"join": {"name": "Web"}}',
    metadata: String.fromCharCode('chat/web'.length) + 'chat/web',
  });

  // Open the connection
  client.connect().subscribe({
    onComplete: socket => {
      socket.requestChannel(stream).subscribe({
        onComplete: () => console.log('complete'),
        onError: e => console.error(e),
        onNext: payload => {
          addMessage(payload.data);
        },
        onSubscribe: subscription => {
          subscription.request(10000000);
        },
      });
    },
    onError: e => console.error(e),
    onSubscribe: cancel => {/* call cancel() to abort */}
  });
}

document.addEventListener('DOMContentLoaded', main);
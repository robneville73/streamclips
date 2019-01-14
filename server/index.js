const SockJS = require('sockjs-client');

const url = `http://127.0.0.1:59651/api`;
let connectionStatus = 'disconnected';
var nextRequestId = 1;
var socket;
var requests = {};
var sources = [];
var clipSources = {};


var request =  function(resourceId, methodName, ...args) {
  let id = nextRequestId++;
  let requestBody = {
    jsonrpc: '2.0',
    id,
    method: methodName,
    params: { resource: resourceId, args }
  };
  let outerRequests = requests;
  
  return new Promise((resolve, reject) => {
    outerRequests[requestBody.id] = {
      body: requestBody,
      resolve,
      reject,
      completed: false
    };
    console.debug(requestBody);
    socket.send(JSON.stringify(requestBody));
  });

   
};

var messageHandler = function(data) {
  let message = JSON.parse(data);
  let request = requests[message.id];

  if (request) {
    if (message.error) {
      request.reject(message.error);
    } else {
      request.resolve(message.result);
    }
    delete requests[message.id];
  }
};

var connectionHandler = function() {
  connectionStatus = 'connected';
  request('SourcesService', 'getSources').then(srcs => {
    sources = srcs;
    sources.forEach(source => {
      if (source.name.indexOf('sc_') >= 0) {
        clipSources[source.sourceId] = { name: source.name };
      }
    });
    request('ScenesService', 'activeScene').then(items => {
      console.debug(items.nodes);
      items.nodes.forEach(i => {
        if (clipSources.hasOwnProperty(i.sourceId)) {
          clipSources[i.sourceId].resourceId = i.resourceId;
        }
      });
      hideClipSource('sc_crap');
    });
  });
};

var connect = function() {
  if (connectionStatus !== 'disconnected') return;
  connectionStatus = 'pending';
  socket = new SockJS(url);

  socket.onopen = () => {
    console.log('opened SLOBS API connection...');
    connectionHandler();
  }

  socket.onmessage = (e) => {
    messageHandler(e.data);
    //console.log(e.data.toString(), 'response');
  }

  socket.onclose = (e) => {
    connectionStatus = 'disconnected';
    console.log('close', e);
  }
};

var hideClipSource = function(name) {
  console.debug(`Hiding ${name}`);
  for (const sourceId in clipSources) {
    if (clipSources[sourceId].name === name) {
      console.debug(clipSources[sourceId].resourceId, 'scene item is');
      request(clipSources[sourceId].resourceId, "setVisibility", false);
    }
  }
};

connect();






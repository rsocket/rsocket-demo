/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var validateFormat = process.env.NODE_ENV !== "production" ? function (format) {} : function (format) {
  if (format === undefined) {
    throw new Error('invariant(...): Second argument must be a string.');
  }
};
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


/* eslint-disable max-len, no-bitwise */ Object.defineProperty(
  exports,
  '__esModule',
  {value: true}
);
exports.MAX_VERSION = (exports.MAX_TTL = (exports.MAX_STREAM_ID = (exports.MAX_RESUME_LENGTH = (exports.MAX_REQUEST_N = (exports.MAX_REQUEST_COUNT = (exports.MAX_MIME_LENGTH = (exports.MAX_METADATA_LENGTH = (exports.MAX_LIFETIME = (exports.MAX_KEEPALIVE = (exports.MAX_CODE = (exports.FRAME_TYPE_OFFFSET = (exports.FLAGS_MASK = (exports.ERROR_EXPLANATIONS = (exports.ERROR_CODES = (exports.FLAGS = (exports.FRAME_TYPE_NAMES = (exports.FRAME_TYPES = (exports.CONNECTION_STREAM_ID = undefined))))))))))))))))));
exports.isIgnore = isIgnore;
exports.isMetadata = isMetadata;
exports.isComplete = isComplete;
exports.isNext = isNext;
exports.isRespond = isRespond;
exports.isResumeEnable = isResumeEnable;
exports.isLease = isLease;
exports.isResumePositionFrameType = isResumePositionFrameType;
exports.getFrameTypeName = getFrameTypeName;
exports.createErrorFromFrame = createErrorFromFrame;
exports.getErrorCodeExplanation = getErrorCodeExplanation;
exports.printFrame = printFrame;
var _forEachObject = __webpack_require__(20);
var _forEachObject2 = _interopRequireDefault(_forEachObject);
var _sprintf = __webpack_require__(21);
var _sprintf2 = _interopRequireDefault(_sprintf);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
const CONNECTION_STREAM_ID = (exports.CONNECTION_STREAM_ID = 0);
const FRAME_TYPES = (exports.FRAME_TYPES = {
  CANCEL: 0x09, // Cancel Request: Cancel outstanding request.
  ERROR: 0x0b, // Error: Error at connection or application level.
  EXT: 0x3f, // Extension Header: Used To Extend more frame types as well as extensions.
  KEEPALIVE: 0x03, // Keepalive: Connection keepalive.
  LEASE: 0x02, // Lease: Sent by Responder to grant the ability to send requests.
  METADATA_PUSH: 0x0c, // Metadata: Asynchronous Metadata frame
  PAYLOAD: 0x0a, // Payload: Payload on a stream. For example, response to a request, or message on a channel.
  REQUEST_CHANNEL: 0x07, // Request Channel: Request a completable stream in both directions.
  REQUEST_FNF: 0x05, // Fire And Forget: A single one-way message.
  REQUEST_N: 0x08, // Request N: Request N more items with Reactive Streams semantics.
  REQUEST_RESPONSE: 0x04, // Request Response: Request single response.
  REQUEST_STREAM: 0x06, // Request Stream: Request a completable stream.
  RESERVED: 0x00, // Reserved
  RESUME: 0x0d, // Resume: Replaces SETUP for Resuming Operation (optional)
  RESUME_OK: 0x0e, // Resume OK : Sent in response to a RESUME if resuming operation possible (optional)
  SETUP: 0x01, // Setup: Sent by client to initiate protocol processing.
}); // Maps frame type codes to type names
const FRAME_TYPE_NAMES = (exports.FRAME_TYPE_NAMES = {});
(0, _forEachObject2.default)(FRAME_TYPES, (value, name) => {
  FRAME_TYPE_NAMES[value] = name;
});
const FLAGS = (exports.FLAGS = {
  COMPLETE: 0x40, // PAYLOAD, REQUEST_CHANNEL: indicates stream completion, if set onComplete will be invoked on receiver.
  FOLLOWS: 0x80, // (unused)
  IGNORE: 0x200, // (all): Ignore frame if not understood.
  LEASE: 0x40, // SETUP: Will honor lease or not.
  METADATA: 0x100, // (all): must be set if metadata is present in the frame.
  NEXT: 0x20, // PAYLOAD: indicates data/metadata present, if set onNext will be invoked on receiver.
  RESPOND: 0x80, // KEEPALIVE: should KEEPALIVE be sent by peer on receipt.
  RESUME_ENABLE: 0x80, // SETUP: Client requests resume capability if possible. Resume Identification Token present.
}); // Maps error names to codes
const ERROR_CODES = (exports.ERROR_CODES = {
  APPLICATION_ERROR: 0x00000201,
  CANCELED: 0x00000203,
  CONNECTION_CLOSE: 0x00000102,
  CONNECTION_ERROR: 0x00000101,
  INVALID: 0x00000204,
  INVALID_SETUP: 0x00000001,
  REJECTED: 0x00000202,
  REJECTED_RESUME: 0x00000004,
  REJECTED_SETUP: 0x00000003,
  RESERVED: 0x00000000,
  RESERVED_EXTENSION: 0xffffffff,
  UNSUPPORTED_SETUP: 0x00000002,
}); // Maps error codes to names
const ERROR_EXPLANATIONS = (exports.ERROR_EXPLANATIONS = {});
(0, _forEachObject2.default)(ERROR_CODES, (code, explanation) => {
  ERROR_EXPLANATIONS[code] = explanation;
});
const FLAGS_MASK = (exports.FLAGS_MASK = 0x3ff); // low 10 bits
const FRAME_TYPE_OFFFSET = (exports.FRAME_TYPE_OFFFSET = 10); // frame type is offset 10 bytes within the uint16 containing type + flags
const MAX_CODE = (exports.MAX_CODE = 0x7fffffff); // uint31
const MAX_KEEPALIVE = (exports.MAX_KEEPALIVE = 0x7fffffff); // uint31
const MAX_LIFETIME = (exports.MAX_LIFETIME = 0x7fffffff); // uint31
const MAX_METADATA_LENGTH = (exports.MAX_METADATA_LENGTH = 0xffffff); // uint24
const MAX_MIME_LENGTH = (exports.MAX_MIME_LENGTH = 0xff); // int8
const MAX_REQUEST_COUNT = (exports.MAX_REQUEST_COUNT = 0x7fffffff); // uint31
const MAX_REQUEST_N = (exports.MAX_REQUEST_N = 0x7fffffff); // uint31
const MAX_RESUME_LENGTH = (exports.MAX_RESUME_LENGTH = 0xffff); // uint16
const MAX_STREAM_ID = (exports.MAX_STREAM_ID = 0x7fffffff); // uint31
const MAX_TTL = (exports.MAX_TTL = 0x7fffffff); // uint31
const MAX_VERSION = (exports.MAX_VERSION = 0xffff); // uint16
/**
 * Returns true iff the flags have the IGNORE bit set.
 */ function isIgnore(
  flags
) {
  return (flags & FLAGS.IGNORE) === FLAGS.IGNORE;
}
/**
                                                                               * Returns true iff the flags have the METADATA bit set.
                                                                               */ function isMetadata(
  flags
) {
  return (flags & FLAGS.METADATA) === FLAGS.METADATA;
}
/**
                                                                                                                                                                   * Returns true iff the flags have the COMPLETE bit set.
                                                                                                                                                                   */ function isComplete(
  flags
) {
  return (flags & FLAGS.COMPLETE) === FLAGS.COMPLETE;
}
/**
                                                                                                                                                                                                                                                       * Returns true iff the flags have the NEXT bit set.
                                                                                                                                                                                                                                                       */ function isNext(
  flags
) {
  return (flags & FLAGS.NEXT) === FLAGS.NEXT;
}
/**
                                                                                                                                                                                                                                                                                                                               * Returns true iff the flags have the RESPOND bit set.
                                                                                                                                                                                                                                                                                                                               */ function isRespond(
  flags
) {
  return (flags & FLAGS.RESPOND) === FLAGS.RESPOND;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                * Returns true iff the flags have the RESUME_ENABLE bit set.
                                                                                                                                                                                                                                                                                                                                                                                                                */ function isResumeEnable(
  flags
) {
  return (flags & FLAGS.RESUME_ENABLE) === FLAGS.RESUME_ENABLE;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Returns true iff the flags have the LEASE bit set.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */ function isLease(
  flags
) {
  return (flags & FLAGS.LEASE) === FLAGS.LEASE;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Returns true iff the frame type is counted toward the implied
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * client/server position used for the resumption protocol.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */ function isResumePositionFrameType(
  type
) {
  return type === FRAME_TYPES.CANCEL ||
    type === FRAME_TYPES.ERROR ||
    type === FRAME_TYPES.PAYLOAD ||
    type === FRAME_TYPES.REQUEST_CHANNEL ||
    type === FRAME_TYPES.REQUEST_FNF ||
    type === FRAME_TYPES.REQUEST_RESPONSE ||
    type === FRAME_TYPES.REQUEST_STREAM ||
    type === FRAME_TYPES.REQUEST_N;
}
function getFrameTypeName(type) {
  const name = FRAME_TYPE_NAMES[type];
  return name != null ? name : toHex(type);
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * Constructs an Error object given the contents of an error frame. The
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * `source` property contains metadata about the error for use in introspecting
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * the error at runtime:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - `error.source.code: number`: the error code returned by the server.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - `error.source.explanation: string`: human-readable explanation of the code
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          *   (this value is not standardized and may change).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * - `error.source.message: string`: the error string returned by the server.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */ function createErrorFromFrame(
  frame
) {
  const {code, message} = frame;
  const explanation = getErrorCodeExplanation(code);
  const error = new Error(
    (0, _sprintf2.default)(
      'RSocket error %s (%s): %s. See error `source` property for details.',
      toHex(code),
      explanation,
      message
    )
  );
  error.source = {code, explanation, message};
  return error;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Given a RSocket error code, returns a human-readable explanation of that
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * code, following the names used in the protocol specification.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */ function getErrorCodeExplanation(
  code
) {
  const explanation = ERROR_EXPLANATIONS[code];
  if (explanation != null) {
    return explanation;
  } else if (code <= 0x00300) {
    return 'RESERVED (PROTOCOL)';
  } else {
    return 'RESERVED (APPLICATION)';
  }
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Pretty-prints the frame for debugging purposes, with types, flags, and
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * error codes annotated with descriptive names.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */ function printFrame(
  frame
) {
  const obj = Object.assign({}, frame);
  obj.type = getFrameTypeName(frame.type) + ` (${toHex(frame.type)})`;
  const flagNames = [];
  (0, _forEachObject2.default)(FLAGS, (flag, name) => {
    if ((frame.flags & flag) === flag) {
      flagNames.push(name);
    }
  });
  if (!flagNames.length) {
    flagNames.push('NO FLAGS');
  }
  obj.flags = flagNames.join(' | ') + ` (${toHex(frame.flags)})`;
  if (frame.type === FRAME_TYPES.ERROR) {
    obj.code = getErrorCodeExplanation(frame.code) + ` (${toHex(frame.code)})`;
  }
  return JSON.stringify(obj, null, 2);
}
function toHex(n) {
  return '0x' + n.toString(16);
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.every = (exports.Single = (exports.FlowableProcessor = (exports.Flowable = undefined)));

var _Flowable = __webpack_require__(14);
var _Flowable2 = _interopRequireDefault(_Flowable);
var _Single = __webpack_require__(28);
var _Single2 = _interopRequireDefault(_Single);
var _FlowableProcessor = __webpack_require__(29);
var _FlowableProcessor2 = _interopRequireDefault(_FlowableProcessor);
var _FlowableTimer = __webpack_require__(30);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                               * The public API of the `flowable` package.
                                                                                                                                               */ exports.Flowable = _Flowable2.default;
exports.FlowableProcessor = _FlowableProcessor2.default;
exports.Single = _Single2.default;
exports.every = _FlowableTimer.every;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable no-bitwise */ Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.createBuffer = undefined;
exports.readUInt24BE = readUInt24BE;
exports.writeUInt24BE = writeUInt24BE;
exports.readUInt64BE = readUInt64BE;
exports.writeUInt64BE = writeUInt64BE;
exports.byteLength = byteLength;
exports.toBuffer = toBuffer;
var _LiteBuffer = __webpack_require__(8);
var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
                                                                                                                                                                                                                                                                 * Mimimum value that would overflow bitwise operators (2^32).
                                                                                                                                                                                                                                                                 */ const BITWISE_OVERFLOW = 0x100000000;
/**
                                                                                                                                                                                                                                                                                                          * Read a uint24 from a buffer starting at the given offset.
                                                                                                                                                                                                                                                                                                          */ function readUInt24BE(
  buffer,
  offset
) {
  const val1 = buffer.readUInt8(offset) << 16;
  const val2 = buffer.readUInt8(offset + 1) << 8;
  const val3 = buffer.readUInt8(offset + 2);
  return val1 | val2 | val3;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * Writes a uint24 to a buffer starting at the given offset, returning the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * offset of the next byte.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */ function writeUInt24BE(
  buffer,
  value,
  offset
) {
  offset = buffer.writeUInt8(value >>> 16, offset); // 3rd byte
  offset = buffer.writeUInt8(value >>> 8 & 0xff, offset); // 2nd byte
  return buffer.writeUInt8(value & 0xff, offset); // 1st byte
}
/**
   * Read a uint64 (technically supports up to 53 bits per JS number
   * representation).
   */ function readUInt64BE(
  buffer,
  offset
) {
  const high = buffer.readUInt32BE(offset);
  const low = buffer.readUInt32BE(offset + 4);
  return high * BITWISE_OVERFLOW + low;
}
/**
                                                                                                                                                                         * Write a uint64 (technically supports up to 53 bits per JS number
                                                                                                                                                                         * representation).
                                                                                                                                                                         */ function writeUInt64BE(
  buffer,
  value,
  offset
) {
  const high = value / BITWISE_OVERFLOW | 0;
  const low = value % BITWISE_OVERFLOW;
  offset = buffer.writeUInt32BE(high, offset); // first half of uint64
  return buffer.writeUInt32BE(low, offset); // second half of uint64
}
/**
   * Determine the number of bytes it would take to encode the given data with the
   * given encoding.
   */ function byteLength(
  data,
  encoding
) {
  if (data == null) {
    return 0;
  }
  return _LiteBuffer.LiteBuffer.byteLength(data, encoding);
}
/**
                                                                                                                                   * Attempts to construct a buffer from the input, throws if invalid.
                                                                                                                                   */ function toBuffer(
  data
) {
  // Buffer.from(buffer) copies which we don't want here
  if (data instanceof _LiteBuffer.LiteBuffer) {
    return data;
  }
  (0, _invariant2.default)(
    data instanceof ArrayBuffer,
    'RSocketBufferUtils: Cannot construct buffer. Expected data to be an ' +
      'arraybuffer, got `%s`.',
    data
  );
  return _LiteBuffer.LiteBuffer.from(data);
}
/**
                                                                                                                                                                                                                                                                       * Function to create a buffer of a given sized filled with zeros.
                                                                                                                                                                                                                                                                       */ const createBuffer = (exports.createBuffer = typeof _LiteBuffer.LiteBuffer.alloc ===
  'function'
  ? length => _LiteBuffer.LiteBuffer.alloc(length) // $FlowFixMe
  : length => new _LiteBuffer.LiteBuffer(length).fill(0));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

Object.defineProperty(exports, '__esModule', {value: true});
exports.IdentitySerializers = (exports.IdentitySerializer = (exports.JsonSerializers = (exports.JsonSerializer = undefined)));

var _LiteBuffer = __webpack_require__(8);
var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

// JSON serializer
/**
 * A Serializer transforms data between the application encoding used in
 * Payloads and the Encodable type accepted by the transport client.
 */ const JsonSerializer = (exports.JsonSerializer = {
  deserialize: data => {
    let str;
    if (data == null) {
      return null;
    } else if (typeof data === 'string') {
      str = data;
    } else if (_LiteBuffer.LiteBuffer.isBuffer(data)) {
      const buffer = data;
      str = buffer.toString('utf8');
    } else {
      const buffer = _LiteBuffer.LiteBuffer.from(data);
      str = buffer.toString('utf8');
    }
    return JSON.parse(str);
  },
  serialize: JSON.stringify,
});

const JsonSerializers = (exports.JsonSerializers = {
  data: JsonSerializer,
  metadata: JsonSerializer,
});

// Pass-through serializer
const IdentitySerializer = (exports.IdentitySerializer = {
  deserialize: data => {
    (0, _invariant2.default)(
      data == null ||
        typeof data === 'string' ||
        _LiteBuffer.LiteBuffer.isBuffer(data) ||
        data instanceof Uint8Array,
      'RSocketSerialization: Expected data to be a string, Buffer, or ' +
        'Uint8Array. Got `%s`.',
      data
    );

    return data;
  },
  serialize: data => data,
});

const IdentitySerializers = (exports.IdentitySerializers = {
  data: IdentitySerializer,
  metadata: IdentitySerializer,
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright 2015-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */

Object.defineProperty(exports, '__esModule', {value: true});
exports.ResponderLeaseHandler = (exports.RequesterLeaseHandler = (exports.Leases = (exports.Lease = undefined)));

var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
var _rsocketFlowable = __webpack_require__(2);

var _RSocketFrame = __webpack_require__(1);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

class Lease {
  constructor(timeToLiveMillis, allowedRequests, metadata) {
    (0, _invariant2.default)(
      timeToLiveMillis > 0,
      'Lease time-to-live must be positive'
    );
    (0, _invariant2.default)(
      allowedRequests > 0,
      'Lease allowed requests must be positive'
    );
    this.timeToLiveMillis = timeToLiveMillis;
    this.allowedRequests = allowedRequests;
    this.startingAllowedRequests = allowedRequests;
    this.expiry = Date.now() + timeToLiveMillis;
    this.metadata = metadata;
  }

  expired() {
    return Date.now() > this.expiry;
  }

  valid() {
    return this.allowedRequests > 0 && !this.expired();
  }

  // todo hide
  _use() {
    if (this.expired()) {
      return false;
    }
    const allowed = this.allowedRequests;
    const success = allowed > 0;
    if (success) {
      this.allowedRequests = allowed - 1;
    }
    return success;
  }
}
exports.Lease = Lease;

class Leases {
  constructor() {
    this._sender = () => _rsocketFlowable.Flowable.never();
    this._receiver = leases => {};
  }

  sender(sender) {
    this._sender = sender;
    return this;
  }

  receiver(receiver) {
    this._receiver = receiver;
    return this;
  }

  stats(stats) {
    this._stats = stats;
    return this;
  }
}
exports.Leases = Leases;

class RequesterLeaseHandler {
  constructor(leaseReceiver) {
    this._requestN = -1;
    leaseReceiver(
      new _rsocketFlowable.Flowable(subscriber => {
        if (this._subscriber) {
          subscriber.onError(new Error('only 1 subscriber is allowed'));
          return;
        }
        if (this.isDisposed()) {
          subscriber.onComplete();
          return;
        }
        this._subscriber = subscriber;
        subscriber.onSubscribe({
          cancel: () => {
            this.dispose();
          },
          request: n => {
            if (n <= 0) {
              subscriber.onError(
                new Error(`request demand must be positive: ${n}`)
              );
            }
            if (!this.isDisposed()) {
              const curReqN = this._requestN;
              this._onRequestN(curReqN);
              this._requestN = Math.min(
                Number.MAX_SAFE_INTEGER,
                Math.max(0, curReqN) + n
              );
            }
          },
        });
      })
    );
  } /*negative value means received lease was not signalled due to missing requestN*/

  use() {
    const l = this._lease;
    return l ? l._use() : false;
  }

  errorMessage() {
    return _errorMessage(this._lease);
  }

  receive(frame) {
    if (!this.isDisposed()) {
      const timeToLiveMillis = frame.ttl;
      const requestCount = frame.requestCount;
      const metadata = frame.metadata;
      this._onLease(new Lease(timeToLiveMillis, requestCount, metadata));
    }
  }

  availability() {
    const l = this._lease;
    if (l && l.valid()) {
      return l.allowedRequests / l.startingAllowedRequests;
    }
    return 0.0;
  }

  dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true;
      const s = this._subscriber;
      if (s) {
        s.onComplete();
      }
    }
  }

  isDisposed() {
    return this._isDisposed;
  }

  _onRequestN(requestN) {
    const l = this._lease;
    const s = this._subscriber;
    if (requestN < 0 && l && s) {
      s.onNext(l);
    }
  }

  _onLease(lease) {
    const s = this._subscriber;
    const newReqN = this._requestN - 1;
    if (newReqN >= 0 && s) {
      s.onNext(lease);
    }
    this._requestN = Math.max(-1, newReqN);
    this._lease = lease;
  }
}
exports.RequesterLeaseHandler = RequesterLeaseHandler;

class ResponderLeaseHandler {
  constructor(leaseSender, stats, errorConsumer) {
    this._leaseSender = leaseSender;
    this._stats = stats;
    this._errorConsumer = errorConsumer;
  }

  use() {
    const l = this._lease;
    const success = l ? l._use() : false;
    this._onStatsEvent(success);
    return success;
  }

  errorMessage() {
    return _errorMessage(this._lease);
  }

  send(send) {
    let subscription;
    let isDisposed;

    this._leaseSender(this._stats).subscribe({
      onComplete: () => this._onStatsEvent(),
      onError: error => {
        this._onStatsEvent();
        const errConsumer = this._errorConsumer;
        if (errConsumer) {
          errConsumer(error);
        }
      },
      onNext: lease => {
        this._lease = lease;
        send(lease);
      },
      onSubscribe: s => {
        if (isDisposed) {
          s.cancel();
          return;
        }
        s.request(_RSocketFrame.MAX_REQUEST_N);
        subscription = s;
      },
    });

    return {
      dispose() {
        if (!isDisposed) {
          isDisposed = true;
          this._onStatsEvent();
          if (subscription) {
            subscription.cancel();
          }
        }
      },

      isDisposed() {
        return isDisposed;
      },
    };
  }

  _onStatsEvent(success) {
    const s = this._stats;
    if (s) {
      const event = success === undefined
        ? 'Terminate'
        : success ? 'Accept' : 'Reject';
      s.onEvent(event);
    }
  }
}
exports.ResponderLeaseHandler = ResponderLeaseHandler;

function _errorMessage(lease) {
  if (!lease) {
    return 'Lease was not received yet';
  }
  if (lease.valid()) {
    return 'Missing leases';
  } else {
    const isExpired = lease.expired();
    const requests = lease.allowedRequests;
    return `Missing leases. Expired: ${isExpired.toString()}, allowedRequests: ${requests}`;
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var emptyFunction = __webpack_require__(7);
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


function printWarning(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var argIndex = 0;
  var message = 'Warning: ' + format.replace(/%s/g, function () {
    return args[argIndex++];
  });

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    // --- Welcome to debugging React ---
    // This error was thrown as a convenience so that you can use this stack
    // to find the callsite that caused this warning to fire.
    throw new Error(message);
  } catch (x) {}
}

var warning = process.env.NODE_ENV !== "production" ? function (condition, format) {
  if (format === undefined) {
    throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
  }

  if (!condition) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    printWarning.apply(void 0, [format].concat(args));
  }
} : emptyFunction;
module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, '__esModule', {value: true});
exports.Buffer = Buffer;
const K_MAX_LENGTH = 0x7fffffff;
function createBuffer(length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError(
      'The value "' + length + '" is invalid for option "size"'
    );
  } // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length); // $FlowFixMe
  buf.__proto__ = Buffer.prototype;
  return buf;
}
const bufferExists = typeof global !== 'undefined' &&
  global.hasOwnProperty('Buffer');
const LiteBuffer = (exports.LiteBuffer = bufferExists ? global.Buffer : Buffer);
function Buffer(arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      );
    }
    return allocUnsafe(arg);
  }
  return from(arg, encodingOrOffset, length);
}

function from(value, encodingOrOffset, length) {
  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value);
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type, Buffer, ArrayBuffer, Array, ' +
        'or Array-like Object. Received type ' +
        typeof value
    );
  }

  if (
    isInstance(value, ArrayBuffer) ||
    (value && isInstance(value.buffer, ArrayBuffer))
  ) {
    return fromArrayBuffer(value, encodingOrOffset, length);
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    );
  }

  const valueOf = value.valueOf && value.valueOf();
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length);
  }

  const b = fromObject(value);
  if (b) {
    return b;
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, ' +
      'Array, or Array-like Object. Received type ' +
      typeof value
  );
}

Buffer.from = function(value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length);
};

// $FlowFixMe
Buffer.prototype.__proto__ = Uint8Array.prototype;

// $FlowFixMe
Buffer.__proto__ = Uint8Array;

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number');
  } else if (size < 0) {
    throw new RangeError(
      'The value "' + size + '" is invalid for option "size"'
    );
  }
}

function alloc(size, fill, encoding) {
  assertSize(size);

  return createBuffer(size);
}

Buffer.alloc = function(size, fill, encoding) {
  return alloc(size, fill, encoding);
};

function allocUnsafe(size) {
  assertSize(size);
  return createBuffer(size < 0 ? 0 : checked(size) | 0);
}

function fromArrayLike(array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0;
  const buf = createBuffer(length);
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255;
  }
  return buf;
}

function fromArrayBuffer(array, byteOffset, length) {
  let buf;
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array);
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset);
  } else {
    buf = new Uint8Array(array, byteOffset, length);
  }

  // $FlowFixMe
  buf.__proto__ = Buffer.prototype;
  return buf;
}

function fromObject(obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0;
    const buf = createBuffer(len);

    if (buf.length === 0) {
      return buf;
    }

    obj.copy(buf, 0, 0, len);
    return buf;
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0);
    }
    return fromArrayLike(obj);
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data);
  }
}

function checked(length) {
  if (length >= K_MAX_LENGTH) {
    throw new RangeError(
      'Attempt to allocate Buffer larger than maximum ' +
        'size: 0x' +
        K_MAX_LENGTH.toString(16) +
        ' bytes'
    );
  }
  return length | 0;
}

Buffer.isBuffer = function isBuffer(b) {
  return b != null && b._isBuffer === true && b !== Buffer.prototype;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  let i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  const buffer = Buffer.alloc(length);
  let pos = 0;
  for (i = 0; i < list.length; ++i) {
    let buf = list[i];
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf);
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

Buffer.prototype._isBuffer = true;

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

function blitBuffer(src, dst, offset, length) {
  let i = 0;
  for (; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function utf8Write(buf, input, offset, length) {
  return blitBuffer(
    utf8ToBytes(input, buf.length - offset),
    buf,
    offset,
    length
  );
}

Buffer.prototype.write = function write(input, offset, length, encoding) {
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0;
    if (length === undefined) {
      encoding = 'utf8';
      length = this.length;
    } else if (isFinite(length)) {
      length = length >>> 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = this.length;
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    );
  }
  switch (encoding) {
    case 'utf8':
      return utf8Write(this, input, offset, length);
    default:
      throw new TypeError('Unknown encoding: ' + encoding);
  }
};

const MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = '';
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH))
    );
  }
  return res;
}

function asciiSlice(buf, start, end) {
  let ret = '';
  end = Math.min(buf.length, end);

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7f);
  }
  return ret;
}

Buffer.prototype.slice = function slice(start, end) {
  const len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  const newBuf = this.subarray(start, end);
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype;
  return newBuf;
};

function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0)
    throw new RangeError('offset is not uint');
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 +
    (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 2, this.length);
  const val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xffff0000 : val;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  offset = offset >>> 0;
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 |
    this[offset + 1] << 16 |
    this[offset + 2] << 8 |
    this[offset + 3];
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min)
    throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(
  value,
  offset,
  noAssert
) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(
  value,
  offset,
  noAssert
) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  this[offset] = value >>> 8;
  this[offset + 1] = value & 0xff;
  return offset + 2;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset >>> 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  this[offset] = value >>> 24;
  this[offset + 1] = value >>> 16;
  this[offset + 2] = value >>> 8;
  this[offset + 3] = value & 0xff;
  return offset + 4;
};

// $FlowFixMe
Buffer.prototype.toString = function toString() {
  const length = this.length;
  if (length === 0) return '';
  return slowToString.apply(this, arguments);
};

function slowToString(encoding, start, end) {
  let loweredCase = false;

  if (start === undefined || start < 0) {
    start = 0;
  }

  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);
      default:
        if (loweredCase)
          throw new TypeError('Unsupported encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}
function utf8ToBytes(str, pUnits = Infinity) {
  let units = pUnits;
  let codePoint;
  const length = str.length;
  let leadSurrogate = null;
  const bytes = [];

  for (let i = 0; i < length; ++i) {
    codePoint = str.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xd7ff && codePoint < 0xe000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xdbff) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xdc00) {
        if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xd800 << 10 | codePoint - 0xdc00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xef, 0xbf, 0xbd);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xc0, codePoint & 0x3f | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(
        codePoint >> 0xc | 0xe0,
        codePoint >> 0x6 & 0x3f | 0x80,
        codePoint & 0x3f | 0x80
      );
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(
        codePoint >> 0x12 | 0xf0,
        codePoint >> 0xc & 0x3f | 0x80,
        codePoint >> 0x6 & 0x3f | 0x80,
        codePoint & 0x3f | 0x80
      );
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ' +
        'ArrayBuffer. Received type ' +
        typeof string
    );
  }

  const len = string.length;
  const mustMatch = arguments.length > 2 && arguments[2] === true;
  if (!mustMatch && len === 0) return 0;

  // Use a for loop to avoid recursion
  let loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length;

      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
        }
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
  throw new Error('Unexpected path in function');
}

Buffer.byteLength = byteLength;

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  const res = [];

  let i = start;
  while (i < end) {
    const firstByte = buf[i];
    let codePoint = null;
    let bytesPerSequence = firstByte > 0xef
      ? 4
      : firstByte > 0xdf ? 3 : firstByte > 0xbf ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xc0) === 0x80) {
            tempCodePoint = (firstByte & 0x1f) << 0x6 | secondByte & 0x3f;
            if (tempCodePoint > 0x7f) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xc0) === 0x80 && (thirdByte & 0xc0) === 0x80) {
            tempCodePoint = (firstByte & 0xf) << 0xc |
              (secondByte & 0x3f) << 0x6 |
              thirdByte & 0x3f;
            if (
              tempCodePoint > 0x7ff &&
              (tempCodePoint < 0xd800 || tempCodePoint > 0xdfff)
            ) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if (
            (secondByte & 0xc0) === 0x80 &&
            (thirdByte & 0xc0) === 0x80 &&
            (fourthByte & 0xc0) === 0x80
          ) {
            tempCodePoint = (firstByte & 0xf) << 0x12 |
              (secondByte & 0x3f) << 0xc |
              (thirdByte & 0x3f) << 0x6 |
              fourthByte & 0x3f;
            if (tempCodePoint > 0xffff && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xfffd;
      bytesPerSequence = 1;
    } else if (codePoint > 0xffff) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3ff | 0xd800);
      codePoint = 0xdc00 | codePoint & 0x3ff;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!Buffer.isBuffer(target))
    throw new TypeError('argument should be a Buffer');
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length)
    throw new RangeError('Index out of range');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  const len = end - start;

  if (
    this === target && typeof Uint8Array.prototype.copyWithin === 'function'
  ) {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (let i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    );
  }

  return len;
};

function isInstance(obj, type) {
  return obj instanceof type ||
    (obj != null &&
      obj.constructor != null &&
      obj.constructor.name != null &&
      obj.constructor.name === type.name);
}
function numberIsNaN(obj) {
  // For IE11 support
  return obj !== obj; // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.encodeAndAddWellKnownMetadata = (exports.encodeAndAddCustomMetadata = (exports.ExplicitMimeTimeEntry = (exports.WellKnownMimeTypeEntry = (exports.ReservedMimeTypeEntry = (exports.CompositeMetadata = (exports.MESSAGE_RSOCKET_COMPOSITE_METADATA = (exports.MESSAGE_RSOCKET_ROUTING = (exports.MESSAGE_RSOCKET_TRACING_ZIPKIN = (exports.APPLICATION_CLOUDEVENTS_JSON = (exports.APPLICATION_JAVA_OBJECT = (exports.APPLICATION_HESSIAN = (exports.VIDEO_VP8 = (exports.VIDEO_H265 = (exports.VIDEO_H264 = (exports.TEXT_XML = (exports.TEXT_PLAIN = (exports.TEXT_HTML = (exports.TEXT_CSV = (exports.TEXT_CSS = (exports.MULTIPART_MIXED = (exports.IMAGE_TIFF = (exports.IMAGE_PNG = (exports.IMAGE_JPEG = (exports.IMAGE_HEIF = (exports.IMAGE_HEIF_SEQUENCE = (exports.IMAGE_HEIC = (exports.IMAGE_HEIC_SEQUENCE = (exports.IMAGE_GIG = (exports.IMAGE_BMP = (exports.AUDIO_VORBIS = (exports.AUDIO_OPUS = (exports.AUDIO_OGG = (exports.AUDIO_MPEG = (exports.AUDIO_MPEG3 = (exports.AUDIO_MP4 = (exports.AUDIO_MP3 = (exports.AUDIO_AAC = (exports.APPLICATION_ZIP = (exports.APPLICATION_XML = (exports.APPLICATION_PROTOBUF = (exports.APPLICATION_THRIFT = (exports.APPLICATION_PDF = (exports.APPLICATION_OCTET_STREAM = (exports.APPLICATION_JSON = (exports.APPLICATION_JAVASCRIPT = (exports.APPLICATION_GZIP = (exports.APPLICATION_GRAPHQL = (exports.APPLICATION_CBOR = (exports.APPLICATION_AVRO = (exports.UNKNOWN_RESERVED_MIME_TYPE = (exports.UNPARSEABLE_MIME_TYPE = (exports.Lease = (exports.Leases = (exports.JsonSerializers = (exports.JsonSerializer = (exports.IdentitySerializers = (exports.IdentitySerializer = (exports.UTF8Encoder = (exports.Utf8Encoders = (exports.BufferEncoder = (exports.BufferEncoders = (exports.writeUInt24BE = (exports.toBuffer = (exports.readUInt24BE = (exports.createBuffer = (exports.byteLength = (exports.serializeFrameWithLength = (exports.serializeFrame = (exports.deserializeFrames = (exports.deserializeFrameWithLength = (exports.deserializeFrame = (exports.printFrame = (exports.isResumeEnable = (exports.isRespond = (exports.isNext = (exports.isMetadata = (exports.isLease = (exports.isIgnore = (exports.isComplete = (exports.getErrorCodeExplanation = (exports.createErrorFromFrame = (exports.MAX_VERSION = (exports.MAX_STREAM_ID = (exports.MAX_RESUME_LENGTH = (exports.MAX_MIME_LENGTH = (exports.MAX_LIFETIME = (exports.MAX_KEEPALIVE = (exports.MAX_CODE = (exports.FRAME_TYPES = (exports.FRAME_TYPE_OFFFSET = (exports.FLAGS = (exports.FLAGS_MASK = (exports.ERROR_EXPLANATIONS = (exports.ERROR_CODES = (exports.CONNECTION_STREAM_ID = (exports.WellKnownMimeType = (exports.RSocketResumableTransport = (exports.RSocketServer = (exports.RSocketClient = undefined)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
var _RSocketFrame = __webpack_require__(1);
Object.defineProperty(exports, 'CONNECTION_STREAM_ID', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.CONNECTION_STREAM_ID;
  },
});
Object.defineProperty(exports, 'ERROR_CODES', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.ERROR_CODES;
  },
});
Object.defineProperty(exports, 'ERROR_EXPLANATIONS', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.ERROR_EXPLANATIONS;
  },
});
Object.defineProperty(exports, 'FLAGS_MASK', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FLAGS_MASK;
  },
});
Object.defineProperty(exports, 'FLAGS', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FLAGS;
  },
});
Object.defineProperty(exports, 'FRAME_TYPE_OFFFSET', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FRAME_TYPE_OFFFSET;
  },
});
Object.defineProperty(exports, 'FRAME_TYPES', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.FRAME_TYPES;
  },
});
Object.defineProperty(exports, 'MAX_CODE', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_CODE;
  },
});
Object.defineProperty(exports, 'MAX_KEEPALIVE', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_KEEPALIVE;
  },
});
Object.defineProperty(exports, 'MAX_LIFETIME', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_LIFETIME;
  },
});
Object.defineProperty(exports, 'MAX_MIME_LENGTH', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_MIME_LENGTH;
  },
});
Object.defineProperty(exports, 'MAX_RESUME_LENGTH', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_RESUME_LENGTH;
  },
});
Object.defineProperty(exports, 'MAX_STREAM_ID', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_STREAM_ID;
  },
});
Object.defineProperty(exports, 'MAX_VERSION', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.MAX_VERSION;
  },
});
Object.defineProperty(exports, 'createErrorFromFrame', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.createErrorFromFrame;
  },
});
Object.defineProperty(exports, 'getErrorCodeExplanation', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.getErrorCodeExplanation;
  },
});
Object.defineProperty(exports, 'isComplete', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isComplete;
  },
});
Object.defineProperty(exports, 'isIgnore', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isIgnore;
  },
});
Object.defineProperty(exports, 'isLease', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isLease;
  },
});
Object.defineProperty(exports, 'isMetadata', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isMetadata;
  },
});
Object.defineProperty(exports, 'isNext', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isNext;
  },
});
Object.defineProperty(exports, 'isRespond', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isRespond;
  },
});
Object.defineProperty(exports, 'isResumeEnable', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.isResumeEnable;
  },
});
Object.defineProperty(exports, 'printFrame', {
  enumerable: true,
  get: function() {
    return _RSocketFrame.printFrame;
  },
});
var _RSocketBinaryFraming = __webpack_require__(10);
Object.defineProperty(exports, 'deserializeFrame', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.deserializeFrame;
  },
});
Object.defineProperty(exports, 'deserializeFrameWithLength', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.deserializeFrameWithLength;
  },
});
Object.defineProperty(exports, 'deserializeFrames', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.deserializeFrames;
  },
});
Object.defineProperty(exports, 'serializeFrame', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.serializeFrame;
  },
});
Object.defineProperty(exports, 'serializeFrameWithLength', {
  enumerable: true,
  get: function() {
    return _RSocketBinaryFraming.serializeFrameWithLength;
  },
});
var _RSocketBufferUtils = __webpack_require__(3);
Object.defineProperty(exports, 'byteLength', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.byteLength;
  },
});
Object.defineProperty(exports, 'createBuffer', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.createBuffer;
  },
});
Object.defineProperty(exports, 'readUInt24BE', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.readUInt24BE;
  },
});
Object.defineProperty(exports, 'toBuffer', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.toBuffer;
  },
});
Object.defineProperty(exports, 'writeUInt24BE', {
  enumerable: true,
  get: function() {
    return _RSocketBufferUtils.writeUInt24BE;
  },
});
var _RSocketEncoding = __webpack_require__(12);
Object.defineProperty(exports, 'BufferEncoders', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.BufferEncoders;
  },
});
Object.defineProperty(exports, 'BufferEncoder', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.BufferEncoder;
  },
});
Object.defineProperty(exports, 'Utf8Encoders', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.Utf8Encoders;
  },
});
Object.defineProperty(exports, 'UTF8Encoder', {
  enumerable: true,
  get: function() {
    return _RSocketEncoding.UTF8Encoder;
  },
});
var _RSocketSerialization = __webpack_require__(4);
Object.defineProperty(exports, 'IdentitySerializer', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.IdentitySerializer;
  },
});
Object.defineProperty(exports, 'IdentitySerializers', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.IdentitySerializers;
  },
});
Object.defineProperty(exports, 'JsonSerializer', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.JsonSerializer;
  },
});
Object.defineProperty(exports, 'JsonSerializers', {
  enumerable: true,
  get: function() {
    return _RSocketSerialization.JsonSerializers;
  },
});
var _RSocketLease = __webpack_require__(5);
Object.defineProperty(exports, 'Leases', {
  enumerable: true,
  get: function() {
    return _RSocketLease.Leases;
  },
});
Object.defineProperty(exports, 'Lease', {
  enumerable: true,
  get: function() {
    return _RSocketLease.Lease;
  },
});
var _WellKnownMimeType = __webpack_require__(16);
Object.defineProperty(exports, 'UNPARSEABLE_MIME_TYPE', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.UNPARSEABLE_MIME_TYPE;
  },
});
Object.defineProperty(exports, 'UNKNOWN_RESERVED_MIME_TYPE', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.UNKNOWN_RESERVED_MIME_TYPE;
  },
});
Object.defineProperty(exports, 'APPLICATION_AVRO', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_AVRO;
  },
});
Object.defineProperty(exports, 'APPLICATION_CBOR', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_CBOR;
  },
});
Object.defineProperty(exports, 'APPLICATION_GRAPHQL', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_GRAPHQL;
  },
});
Object.defineProperty(exports, 'APPLICATION_GZIP', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_GZIP;
  },
});
Object.defineProperty(exports, 'APPLICATION_JAVASCRIPT', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_JAVASCRIPT;
  },
});
Object.defineProperty(exports, 'APPLICATION_JSON', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_JSON;
  },
});
Object.defineProperty(exports, 'APPLICATION_OCTET_STREAM', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_OCTET_STREAM;
  },
});
Object.defineProperty(exports, 'APPLICATION_PDF', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_PDF;
  },
});
Object.defineProperty(exports, 'APPLICATION_THRIFT', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_THRIFT;
  },
});
Object.defineProperty(exports, 'APPLICATION_PROTOBUF', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_PROTOBUF;
  },
});
Object.defineProperty(exports, 'APPLICATION_XML', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_XML;
  },
});
Object.defineProperty(exports, 'APPLICATION_ZIP', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_ZIP;
  },
});
Object.defineProperty(exports, 'AUDIO_AAC', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.AUDIO_AAC;
  },
});
Object.defineProperty(exports, 'AUDIO_MP3', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.AUDIO_MP3;
  },
});
Object.defineProperty(exports, 'AUDIO_MP4', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.AUDIO_MP4;
  },
});
Object.defineProperty(exports, 'AUDIO_MPEG3', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.AUDIO_MPEG3;
  },
});
Object.defineProperty(exports, 'AUDIO_MPEG', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.AUDIO_MPEG;
  },
});
Object.defineProperty(exports, 'AUDIO_OGG', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.AUDIO_OGG;
  },
});
Object.defineProperty(exports, 'AUDIO_OPUS', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.AUDIO_OPUS;
  },
});
Object.defineProperty(exports, 'AUDIO_VORBIS', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.AUDIO_VORBIS;
  },
});
Object.defineProperty(exports, 'IMAGE_BMP', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.IMAGE_BMP;
  },
});
Object.defineProperty(exports, 'IMAGE_GIG', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.IMAGE_GIG;
  },
});
Object.defineProperty(exports, 'IMAGE_HEIC_SEQUENCE', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.IMAGE_HEIC_SEQUENCE;
  },
});
Object.defineProperty(exports, 'IMAGE_HEIC', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.IMAGE_HEIC;
  },
});
Object.defineProperty(exports, 'IMAGE_HEIF_SEQUENCE', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.IMAGE_HEIF_SEQUENCE;
  },
});
Object.defineProperty(exports, 'IMAGE_HEIF', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.IMAGE_HEIF;
  },
});
Object.defineProperty(exports, 'IMAGE_JPEG', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.IMAGE_JPEG;
  },
});
Object.defineProperty(exports, 'IMAGE_PNG', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.IMAGE_PNG;
  },
});
Object.defineProperty(exports, 'IMAGE_TIFF', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.IMAGE_TIFF;
  },
});
Object.defineProperty(exports, 'MULTIPART_MIXED', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.MULTIPART_MIXED;
  },
});
Object.defineProperty(exports, 'TEXT_CSS', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.TEXT_CSS;
  },
});
Object.defineProperty(exports, 'TEXT_CSV', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.TEXT_CSV;
  },
});
Object.defineProperty(exports, 'TEXT_HTML', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.TEXT_HTML;
  },
});
Object.defineProperty(exports, 'TEXT_PLAIN', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.TEXT_PLAIN;
  },
});
Object.defineProperty(exports, 'TEXT_XML', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.TEXT_XML;
  },
});
Object.defineProperty(exports, 'VIDEO_H264', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.VIDEO_H264;
  },
});
Object.defineProperty(exports, 'VIDEO_H265', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.VIDEO_H265;
  },
});
Object.defineProperty(exports, 'VIDEO_VP8', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.VIDEO_VP8;
  },
});
Object.defineProperty(exports, 'APPLICATION_HESSIAN', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_HESSIAN;
  },
});
Object.defineProperty(exports, 'APPLICATION_JAVA_OBJECT', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_JAVA_OBJECT;
  },
});
Object.defineProperty(exports, 'APPLICATION_CLOUDEVENTS_JSON', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.APPLICATION_CLOUDEVENTS_JSON;
  },
});
Object.defineProperty(exports, 'MESSAGE_RSOCKET_TRACING_ZIPKIN', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.MESSAGE_RSOCKET_TRACING_ZIPKIN;
  },
});
Object.defineProperty(exports, 'MESSAGE_RSOCKET_ROUTING', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.MESSAGE_RSOCKET_ROUTING;
  },
});
Object.defineProperty(exports, 'MESSAGE_RSOCKET_COMPOSITE_METADATA', {
  enumerable: true,
  get: function() {
    return _WellKnownMimeType.MESSAGE_RSOCKET_COMPOSITE_METADATA;
  },
});
var _CompositeMetadata = __webpack_require__(31);
Object.defineProperty(exports, 'CompositeMetadata', {
  enumerable: true,
  get: function() {
    return _CompositeMetadata.CompositeMetadata;
  },
});
Object.defineProperty(exports, 'ReservedMimeTypeEntry', {
  enumerable: true,
  get: function() {
    return _CompositeMetadata.ReservedMimeTypeEntry;
  },
});
Object.defineProperty(exports, 'WellKnownMimeTypeEntry', {
  enumerable: true,
  get: function() {
    return _CompositeMetadata.WellKnownMimeTypeEntry;
  },
});
Object.defineProperty(exports, 'ExplicitMimeTimeEntry', {
  enumerable: true,
  get: function() {
    return _CompositeMetadata.ExplicitMimeTimeEntry;
  },
});
Object.defineProperty(exports, 'encodeAndAddCustomMetadata', {
  enumerable: true,
  get: function() {
    return _CompositeMetadata.encodeAndAddCustomMetadata;
  },
});
Object.defineProperty(exports, 'encodeAndAddWellKnownMetadata', {
  enumerable: true,
  get: function() {
    return _CompositeMetadata.encodeAndAddWellKnownMetadata;
  },
});
var _RSocketClient = __webpack_require__(32);
var _RSocketClient2 = _interopRequireDefault(_RSocketClient);
var _RSocketServer = __webpack_require__(34);
var _RSocketServer2 = _interopRequireDefault(_RSocketServer);
var _RSocketResumableTransport = __webpack_require__(35);
var _RSocketResumableTransport2 = _interopRequireDefault(
  _RSocketResumableTransport
);
var _WellKnownMimeType2 = _interopRequireDefault(_WellKnownMimeType);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
exports.RSocketClient = _RSocketClient2.default;
exports.RSocketServer = _RSocketServer2.default;
exports.RSocketResumableTransport = _RSocketResumableTransport2.default;
exports.WellKnownMimeType = _WellKnownMimeType2.default;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */



/* eslint-disable consistent-return, no-bitwise */ Object.defineProperty(
  exports,
  '__esModule',
  {value: true}
);
exports.deserializeFrameWithLength = deserializeFrameWithLength;
exports.deserializeFrames = deserializeFrames;
exports.serializeFrameWithLength = serializeFrameWithLength;
exports.deserializeFrame = deserializeFrame;
exports.serializeFrame = serializeFrame;
exports.sizeOfFrame = sizeOfFrame;
var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = __webpack_require__(1);
var _RSocketEncoding = __webpack_require__(12);
var _RSocketBufferUtils = __webpack_require__(3);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
                                                                                                                                                                                                                                                                                                                                                                                         * Frame header is:
                                                                                                                                                                                                                                                                                                                                                                                         * - stream id (uint32 = 4)
                                                                                                                                                                                                                                                                                                                                                                                         * - type + flags (uint 16 = 2)
                                                                                                                                                                                                                                                                                                                                                                                         */ const FRAME_HEADER_SIZE = 6;
/**
                                                                                                                                                                                                                                                                                                                                                                                                                         * Size of frame length and metadata length fields.
                                                                                                                                                                                                                                                                                                                                                                                                                         */ const UINT24_SIZE = 3;
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                   * Reads a frame from a buffer that is prefixed with the frame length.
                                                                                                                                                                                                                                                                                                                                                                                                                                                   */ function deserializeFrameWithLength(
  buffer,
  encoders
) {
  const frameLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, 0);
  return deserializeFrame(
    buffer.slice(UINT24_SIZE, UINT24_SIZE + frameLength),
    encoders
  );
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Given a buffer that may contain zero or more length-prefixed frames followed
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * by zero or more bytes of a (partial) subsequent frame, returns an array of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * the frames and a buffer of the leftover bytes.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */ function deserializeFrames(
  buffer,
  encoders
) {
  const frames = [];
  let offset = 0;
  while (offset + UINT24_SIZE < buffer.length) {
    const frameLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, offset);
    const frameStart = offset + UINT24_SIZE;
    const frameEnd = frameStart + frameLength;
    if (frameEnd > buffer.length) {
      // not all bytes of next frame received
      break;
    }
    const frameBuffer = buffer.slice(frameStart, frameEnd);
    const frame = deserializeFrame(frameBuffer, encoders);
    frames.push(frame);
    offset = frameEnd;
  }
  return [frames, buffer.slice(offset, buffer.length)];
}
/**
                                                                                                                                                                                                                        * Writes a frame to a buffer with a length prefix.
                                                                                                                                                                                                                        */ function serializeFrameWithLength(
  frame,
  encoders
) {
  const buffer = serializeFrame(frame, encoders);
  const lengthPrefixed = (0, _RSocketBufferUtils.createBuffer)(
    buffer.length + UINT24_SIZE
  );
  (0, _RSocketBufferUtils.writeUInt24BE)(lengthPrefixed, buffer.length, 0);
  buffer.copy(lengthPrefixed, UINT24_SIZE, 0, buffer.length);
  return lengthPrefixed;
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Read a frame from the buffer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */ function deserializeFrame(
  buffer,
  encoders
) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  let offset = 0;
  const streamId = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    streamId >= 0,
    'RSocketBinaryFraming: Invalid frame, expected a positive stream id, got `%s.',
    streamId
  );
  const typeAndFlags = buffer.readUInt16BE(offset);
  offset += 2;
  const type = typeAndFlags >>> _RSocketFrame.FRAME_TYPE_OFFFSET; // keep highest 6 bits
  const flags = typeAndFlags & _RSocketFrame.FLAGS_MASK; // keep lowest 10 bits
  switch (type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return deserializeSetupFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return deserializePayloadFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return deserializeErrorFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return deserializeKeepAliveFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      return deserializeRequestFnfFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return deserializeRequestResponseFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
      return deserializeRequestStreamFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return deserializeRequestChannelFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return deserializeRequestNFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return deserializeResumeFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return deserializeResumeOkFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return deserializeCancelFrame(buffer, streamId, flags, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return deserializeLeaseFrame(buffer, streamId, flags, encoders);
    default:
      (0, _invariant2.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(type)
      );
  }
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 * Convert the frame to a (binary) buffer.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 */ function serializeFrame(
  frame,
  encoders
) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  switch (frame.type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return serializeSetupFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return serializePayloadFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return serializeErrorFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return serializeKeepAliveFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return serializeRequestFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return serializeRequestManyFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return serializeRequestNFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return serializeResumeFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return serializeResumeOkFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return serializeCancelFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return serializeLeaseFrame(frame, encoders);
    default:
      (0, _invariant2.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(frame.type)
      );
  }
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * Byte size of frame without size prefix
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */ function sizeOfFrame(
  frame,
  encoders
) {
  encoders = encoders || _RSocketEncoding.Utf8Encoders;
  switch (frame.type) {
    case _RSocketFrame.FRAME_TYPES.SETUP:
      return sizeOfSetupFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.PAYLOAD:
      return sizeOfPayloadFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.ERROR:
      return sizeOfErrorFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
      return sizeOfKeepAliveFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
    case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      return sizeOfRequestFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
    case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      return sizeOfRequestManyFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.REQUEST_N:
      return sizeOfRequestNFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME:
      return sizeOfResumeFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.RESUME_OK:
      return sizeOfResumeOkFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.CANCEL:
      return sizeOfCancelFrame(frame, encoders);
    case _RSocketFrame.FRAME_TYPES.LEASE:
      return sizeOfLeaseFrame(frame, encoders);
    default:
      (0, _invariant2.default)(
        false,
        'RSocketBinaryFraming: Unsupported frame type `%s`.',
        (0, _RSocketFrame.getFrameTypeName)(frame.type)
      );
  }
}

/**
   * Writes a SETUP frame into a new buffer and returns it.
   *
   * Prefix size is:
   * - version (2x uint16 = 4)
   * - keepalive (uint32 = 4)
   * - lifetime (uint32 = 4)
   * - mime lengths (2x uint8 = 2)
   */
const SETUP_FIXED_SIZE = 14;
const RESUME_TOKEN_LENGTH_SIZE = 2;
function serializeSetupFrame(frame, encoders) {
  const resumeTokenLength = frame.resumeToken != null
    ? encoders.resumeToken.byteLength(frame.resumeToken)
    : 0;
  const metadataMimeTypeLength = frame.metadataMimeType != null
    ? encoders.metadataMimeType.byteLength(frame.metadataMimeType)
    : 0;
  const dataMimeTypeLength = frame.dataMimeType != null
    ? encoders.dataMimeType.byteLength(frame.dataMimeType)
    : 0;
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE +
      SETUP_FIXED_SIZE + //
      (resumeTokenLength ? RESUME_TOKEN_LENGTH_SIZE + resumeTokenLength : 0) +
      metadataMimeTypeLength +
      dataMimeTypeLength +
      payloadLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt16BE(frame.majorVersion, offset);
  offset = buffer.writeUInt16BE(frame.minorVersion, offset);
  offset = buffer.writeUInt32BE(frame.keepAlive, offset);
  offset = buffer.writeUInt32BE(frame.lifetime, offset);

  if (frame.flags & _RSocketFrame.FLAGS.RESUME_ENABLE) {
    offset = buffer.writeUInt16BE(resumeTokenLength, offset);
    if (frame.resumeToken != null) {
      offset = encoders.resumeToken.encode(
        frame.resumeToken,
        buffer,
        offset,
        offset + resumeTokenLength
      );
    }
  }

  offset = buffer.writeUInt8(metadataMimeTypeLength, offset);
  if (frame.metadataMimeType != null) {
    offset = encoders.metadataMimeType.encode(
      frame.metadataMimeType,
      buffer,
      offset,
      offset + metadataMimeTypeLength
    );
  }

  offset = buffer.writeUInt8(dataMimeTypeLength, offset);
  if (frame.dataMimeType != null) {
    offset = encoders.dataMimeType.encode(
      frame.dataMimeType,
      buffer,
      offset,
      offset + dataMimeTypeLength
    );
  }

  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfSetupFrame(frame, encoders) {
  const resumeTokenLength = frame.resumeToken != null
    ? encoders.resumeToken.byteLength(frame.resumeToken)
    : 0;
  const metadataMimeTypeLength = frame.metadataMimeType != null
    ? encoders.metadataMimeType.byteLength(frame.metadataMimeType)
    : 0;
  const dataMimeTypeLength = frame.dataMimeType != null
    ? encoders.dataMimeType.byteLength(frame.dataMimeType)
    : 0;
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE +
    SETUP_FIXED_SIZE + //
    (resumeTokenLength ? RESUME_TOKEN_LENGTH_SIZE + resumeTokenLength : 0) +
    metadataMimeTypeLength +
    dataMimeTypeLength +
    payloadLength;
}

/**
   * Reads a SETUP frame from the buffer and returns it.
   */
function deserializeSetupFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid SETUP frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const majorVersion = buffer.readUInt16BE(offset);
  offset += 2;
  const minorVersion = buffer.readUInt16BE(offset);
  offset += 2;

  const keepAlive = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    keepAlive >= 0 && keepAlive <= _RSocketFrame.MAX_KEEPALIVE,
    'RSocketBinaryFraming: Invalid SETUP frame, expected keepAlive to be ' +
      '>= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_KEEPALIVE,
    keepAlive
  );

  const lifetime = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    lifetime >= 0 && lifetime <= _RSocketFrame.MAX_LIFETIME,
    'RSocketBinaryFraming: Invalid SETUP frame, expected lifetime to be ' +
      '>= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_LIFETIME,
    lifetime
  );

  let resumeToken = null;
  if (flags & _RSocketFrame.FLAGS.RESUME_ENABLE) {
    const resumeTokenLength = buffer.readInt16BE(offset);
    offset += 2;
    (0, _invariant2.default)(
      resumeTokenLength >= 0 &&
        resumeTokenLength <= _RSocketFrame.MAX_RESUME_LENGTH,
      'RSocketBinaryFraming: Invalid SETUP frame, expected resumeToken length ' +
        'to be >= 0 and <= %s. Got `%s`.',
      _RSocketFrame.MAX_RESUME_LENGTH,
      resumeTokenLength
    );

    resumeToken = encoders.resumeToken.decode(
      buffer,
      offset,
      offset + resumeTokenLength
    );

    offset += resumeTokenLength;
  }

  const metadataMimeTypeLength = buffer.readUInt8(offset);
  offset += 1;
  const metadataMimeType = encoders.metadataMimeType.decode(
    buffer,
    offset,
    offset + metadataMimeTypeLength
  );

  offset += metadataMimeTypeLength;

  const dataMimeTypeLength = buffer.readUInt8(offset);
  offset += 1;
  const dataMimeType = encoders.dataMimeType.decode(
    buffer,
    offset,
    offset + dataMimeTypeLength
  );

  offset += dataMimeTypeLength;

  const frame = {
    data: null,
    dataMimeType,
    flags,
    keepAlive,
    length,
    lifetime,
    majorVersion,
    metadata: null,
    metadataMimeType,
    minorVersion,
    resumeToken,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.SETUP,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

/**
   * Writes an ERROR frame into a new buffer and returns it.
   *
   * Prefix size is for the error code (uint32 = 4).
   */
const ERROR_FIXED_SIZE = 4;
function serializeErrorFrame(frame, encoders) {
  const messageLength = frame.message != null
    ? encoders.message.byteLength(frame.message)
    : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + ERROR_FIXED_SIZE + messageLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.code, offset);
  if (frame.message != null) {
    encoders.message.encode(
      frame.message,
      buffer,
      offset,
      offset + messageLength
    );
  }
  return buffer;
}

function sizeOfErrorFrame(frame, encoders) {
  const messageLength = frame.message != null
    ? encoders.message.byteLength(frame.message)
    : 0;
  return FRAME_HEADER_SIZE + ERROR_FIXED_SIZE + messageLength;
}

/**
   * Reads an ERROR frame from the buffer and returns it.
   */
function deserializeErrorFrame(buffer, streamId, flags, encoders) {
  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const code = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    code >= 0 && code <= _RSocketFrame.MAX_CODE,
    'RSocketBinaryFraming: Invalid ERROR frame, expected code to be >= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_CODE,
    code
  );

  const messageLength = buffer.length - offset;
  let message = '';
  if (messageLength > 0) {
    message = encoders.message.decode(buffer, offset, offset + messageLength);
    offset += messageLength;
  }

  return {
    code,
    flags,
    length,
    message,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.ERROR,
  };
}

/**
   * Writes a KEEPALIVE frame into a new buffer and returns it.
   *
   * Prefix size is for the last received position (uint64 = 8).
   */
const KEEPALIVE_FIXED_SIZE = 8;
function serializeKeepAliveFrame(frame, encoders) {
  const dataLength = frame.data != null
    ? encoders.data.byteLength(frame.data)
    : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + KEEPALIVE_FIXED_SIZE + dataLength
  );

  let offset = writeHeader(frame, buffer);
  offset = (0, _RSocketBufferUtils.writeUInt64BE)(
    buffer,
    frame.lastReceivedPosition,
    offset
  );
  if (frame.data != null) {
    encoders.data.encode(frame.data, buffer, offset, offset + dataLength);
  }
  return buffer;
}

function sizeOfKeepAliveFrame(frame, encoders) {
  const dataLength = frame.data != null
    ? encoders.data.byteLength(frame.data)
    : 0;
  return FRAME_HEADER_SIZE + KEEPALIVE_FIXED_SIZE + dataLength;
}

/**
   * Reads a KEEPALIVE frame from the buffer and returns it.
   */
function deserializeKeepAliveFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid KEEPALIVE frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const lastReceivedPosition = (0, _RSocketBufferUtils.readUInt64BE)(
    buffer,
    offset
  );
  offset += 8;
  let data = null;
  if (offset < buffer.length) {
    data = encoders.data.decode(buffer, offset, buffer.length);
  }

  return {
    data,
    flags,
    lastReceivedPosition,
    length,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.KEEPALIVE,
  };
}

/**
   * Writes a LEASE frame into a new buffer and returns it.
   *
   * Prefix size is for the ttl (uint32) and requestcount (uint32).
   */
const LEASE_FIXED_SIZE = 8;
function serializeLeaseFrame(frame, encoders) {
  const metaLength = frame.metadata != null
    ? encoders.metadata.byteLength(frame.metadata)
    : 0;
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + LEASE_FIXED_SIZE + metaLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.ttl, offset);
  offset = buffer.writeUInt32BE(frame.requestCount, offset);
  if (frame.metadata != null) {
    encoders.metadata.encode(
      frame.metadata,
      buffer,
      offset,
      offset + metaLength
    );
  }
  return buffer;
}

function sizeOfLeaseFrame(frame, encoders) {
  const metaLength = frame.metadata != null
    ? encoders.metadata.byteLength(frame.metadata)
    : 0;
  return FRAME_HEADER_SIZE + LEASE_FIXED_SIZE + metaLength;
}

/**
   * Reads a LEASE frame from the buffer and returns it.
   */
function deserializeLeaseFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid LEASE frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const ttl = buffer.readUInt32BE(offset);
  offset += 4;
  const requestCount = buffer.readUInt32BE(offset);
  offset += 4;
  let metadata = null;
  if (offset < buffer.length) {
    metadata = encoders.metadata.decode(buffer, offset, buffer.length);
  }
  return {
    flags,
    length,
    metadata,
    requestCount,
    streamId,
    ttl,
    type: _RSocketFrame.FRAME_TYPES.LEASE,
  };
}

/**
   * Writes a REQUEST_FNF or REQUEST_RESPONSE frame to a new buffer and returns
   * it.
   *
   * Note that these frames have the same shape and only differ in their type.
   */
function serializeRequestFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + payloadLength
  );
  const offset = writeHeader(frame, buffer);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfRequestFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE + payloadLength;
}

function deserializeRequestFnfFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_FNF frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_FNF,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

function deserializeRequestResponseFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_RESPONSE frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

/**
   * Writes a REQUEST_STREAM or REQUEST_CHANNEL frame to a new buffer and returns
   * it.
   *
   * Note that these frames have the same shape and only differ in their type.
   *
   * Prefix size is for requestN (uint32 = 4).
   */
const REQUEST_MANY_HEADER = 4;
function serializeRequestManyFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + REQUEST_MANY_HEADER + payloadLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt32BE(frame.requestN, offset);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfRequestManyFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE + REQUEST_MANY_HEADER + payloadLength;
}

function deserializeRequestStreamFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const requestN = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_STREAM,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

function deserializeRequestChannelFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_CHANNEL frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const requestN = buffer.readInt32BE(offset);
  offset += 4;
  (0, _invariant2.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL,
  };

  readPayload(buffer, frame, encoders, offset);
  return frame;
}

/**
   * Writes a REQUEST_N frame to a new buffer and returns it.
   *
   * Prefix size is for requestN (uint32 = 4).
   */
const REQUEST_N_HEADER = 4;
function serializeRequestNFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + REQUEST_N_HEADER
  );
  const offset = writeHeader(frame, buffer);
  buffer.writeUInt32BE(frame.requestN, offset);
  return buffer;
}

function sizeOfRequestNFrame(frame, encoders) {
  return FRAME_HEADER_SIZE + REQUEST_N_HEADER;
}

function deserializeRequestNFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid REQUEST_N frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const requestN = buffer.readInt32BE(FRAME_HEADER_SIZE);
  (0, _invariant2.default)(
    requestN > 0,
    'RSocketBinaryFraming: Invalid REQUEST_STREAM frame, expected requestN to be > 0, got `%s`.',
    requestN
  );

  return {
    flags,
    length,
    requestN,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
  };
}

/**
   * Writes a CANCEL frame to a new buffer and returns it.
   */
function serializeCancelFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(FRAME_HEADER_SIZE);
  writeHeader(frame, buffer);
  return buffer;
}

function sizeOfCancelFrame(frame, encoders) {
  return FRAME_HEADER_SIZE;
}

function deserializeCancelFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid CANCEL frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  return {
    flags,
    length,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.CANCEL,
  };
}

/**
   * Writes a PAYLOAD frame to a new buffer and returns it.
   */
function serializePayloadFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + payloadLength
  );
  const offset = writeHeader(frame, buffer);
  writePayload(frame, buffer, encoders, offset);
  return buffer;
}

function sizeOfPayloadFrame(frame, encoders) {
  const payloadLength = getPayloadLength(frame, encoders);
  return FRAME_HEADER_SIZE + payloadLength;
}

function deserializePayloadFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId > 0,
    'RSocketBinaryFraming: Invalid PAYLOAD frame, expected stream id to be > 0.'
  );

  const length = buffer.length;
  const frame = {
    data: null,
    flags,
    length,
    metadata: null,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
  };

  readPayload(buffer, frame, encoders, FRAME_HEADER_SIZE);
  return frame;
}

/**
   * Writes a RESUME frame into a new buffer and returns it.
   *
   * Fixed size is:
   * - major version (uint16 = 2)
   * - minor version (uint16 = 2)
   * - token length (uint16 = 2)
   * - client position (uint64 = 8)
   * - server position (uint64 = 8)
   */
const RESUME_FIXED_SIZE = 22;
function serializeResumeFrame(frame, encoders) {
  const resumeTokenLength = encoders.resumeToken.byteLength(frame.resumeToken);
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + RESUME_FIXED_SIZE + resumeTokenLength
  );

  let offset = writeHeader(frame, buffer);
  offset = buffer.writeUInt16BE(frame.majorVersion, offset);
  offset = buffer.writeUInt16BE(frame.minorVersion, offset);
  offset = buffer.writeUInt16BE(resumeTokenLength, offset);
  offset = encoders.resumeToken.encode(
    frame.resumeToken,
    buffer,
    offset,
    offset + resumeTokenLength
  );

  offset = (0, _RSocketBufferUtils.writeUInt64BE)(
    buffer,
    frame.serverPosition,
    offset
  );
  (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.clientPosition, offset);
  return buffer;
}

function sizeOfResumeFrame(frame, encoders) {
  const resumeTokenLength = encoders.resumeToken.byteLength(frame.resumeToken);
  return FRAME_HEADER_SIZE + RESUME_FIXED_SIZE + resumeTokenLength;
}

function deserializeResumeFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid RESUME frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  let offset = FRAME_HEADER_SIZE;
  const majorVersion = buffer.readUInt16BE(offset);
  offset += 2;
  const minorVersion = buffer.readUInt16BE(offset);
  offset += 2;

  const resumeTokenLength = buffer.readInt16BE(offset);
  offset += 2;
  (0, _invariant2.default)(
    resumeTokenLength >= 0 &&
      resumeTokenLength <= _RSocketFrame.MAX_RESUME_LENGTH,
    'RSocketBinaryFraming: Invalid SETUP frame, expected resumeToken length ' +
      'to be >= 0 and <= %s. Got `%s`.',
    _RSocketFrame.MAX_RESUME_LENGTH,
    resumeTokenLength
  );

  const resumeToken = encoders.resumeToken.decode(
    buffer,
    offset,
    offset + resumeTokenLength
  );

  offset += resumeTokenLength;
  const serverPosition = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += 8;
  const clientPosition = (0, _RSocketBufferUtils.readUInt64BE)(buffer, offset);
  offset += 8;
  return {
    clientPosition,
    flags,
    length,
    majorVersion,
    minorVersion,
    resumeToken,
    serverPosition,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.RESUME,
  };
}

/**
   * Writes a RESUME_OK frame into a new buffer and returns it.
   *
   * Fixed size is:
   * - client position (uint64 = 8)
   */
const RESUME_OK_FIXED_SIZE = 8;
function serializeResumeOkFrame(frame, encoders) {
  const buffer = (0, _RSocketBufferUtils.createBuffer)(
    FRAME_HEADER_SIZE + RESUME_OK_FIXED_SIZE
  );
  const offset = writeHeader(frame, buffer);
  (0, _RSocketBufferUtils.writeUInt64BE)(buffer, frame.clientPosition, offset);
  return buffer;
}

function sizeOfResumeOkFrame(frame, encoders) {
  return FRAME_HEADER_SIZE + RESUME_OK_FIXED_SIZE;
}

function deserializeResumeOkFrame(buffer, streamId, flags, encoders) {
  (0, _invariant2.default)(
    streamId === 0,
    'RSocketBinaryFraming: Invalid RESUME frame, expected stream id to be 0.'
  );

  const length = buffer.length;
  const clientPosition = (0, _RSocketBufferUtils.readUInt64BE)(
    buffer,
    FRAME_HEADER_SIZE
  );
  return {
    clientPosition,
    flags,
    length,
    streamId,
    type: _RSocketFrame.FRAME_TYPES.RESUME_OK,
  };
}

/**
   * Write the header of the frame into the buffer.
   */
function writeHeader(frame, buffer) {
  const offset = buffer.writeInt32BE(frame.streamId, 0);
  // shift frame to high 6 bits, extract lowest 10 bits from flags
  return buffer.writeUInt16BE(
    frame.type << _RSocketFrame.FRAME_TYPE_OFFFSET |
      frame.flags & _RSocketFrame.FLAGS_MASK,
    offset
  );
}

/**
   * Determine the length of the payload section of a frame. Only applies to
   * frame types that MAY have both metadata and data.
   */
function getPayloadLength(frame, encoders) {
  let payloadLength = 0;
  if (frame.data != null) {
    payloadLength += encoders.data.byteLength(frame.data);
  }
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    payloadLength += UINT24_SIZE;
    if (frame.metadata != null) {
      payloadLength += encoders.metadata.byteLength(frame.metadata);
    }
  }
  return payloadLength;
}

/**
   * Write the payload of a frame into the given buffer. Only applies to frame
   * types that MAY have both metadata and data.
   */
function writePayload(frame, buffer, encoders, offset) {
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    if (frame.metadata != null) {
      const metaLength = encoders.metadata.byteLength(frame.metadata);
      offset = (0, _RSocketBufferUtils.writeUInt24BE)(
        buffer,
        metaLength,
        offset
      );
      offset = encoders.metadata.encode(
        frame.metadata,
        buffer,
        offset,
        offset + metaLength
      );
    } else {
      offset = (0, _RSocketBufferUtils.writeUInt24BE)(buffer, 0, offset);
    }
  }
  if (frame.data != null) {
    encoders.data.encode(frame.data, buffer, offset, buffer.length);
  }
}

/**
   * Read the payload from a buffer and write it into the frame. Only applies to
   * frame types that MAY have both metadata and data.
   */
function readPayload(buffer, frame, encoders, offset) {
  if ((0, _RSocketFrame.isMetadata)(frame.flags)) {
    const metaLength = (0, _RSocketBufferUtils.readUInt24BE)(buffer, offset);
    offset += UINT24_SIZE;
    if (metaLength > 0) {
      frame.metadata = encoders.metadata.decode(
        buffer,
        offset,
        offset + metaLength
      );

      offset += metaLength;
    }
  }
  if (offset < buffer.length) {
    frame.data = encoders.data.decode(buffer, offset, buffer.length);
  }
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.BufferEncoders = (exports.Utf8Encoders = (exports.BufferEncoder = (exports.UTF8Encoder = undefined)));

var _RSocketBufferUtils = __webpack_require__(3);
var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                   * Commonly used subset of the allowed Node Buffer Encoder types.
                                                                                                                                                                                                   */

/**
                                                                                                                                                                                                       * The Encoders object specifies how values should be serialized/deserialized
                                                                                                                                                                                                       * to/from binary.
                                                                                                                                                                                                       */

const UTF8Encoder = (exports.UTF8Encoder = {
  byteLength: value => (0, _RSocketBufferUtils.byteLength)(value, 'utf8'),
  decode: (buffer, start, end) => {
    return buffer.toString('utf8', start, end);
  },
  encode: (value, buffer, start, end) => {
    (0, _invariant2.default)(
      typeof value === 'string',
      'RSocketEncoding: Expected value to be a string, got `%s`.',
      value
    );

    buffer.write(value, start, end - start, 'utf8');
    return end;
  },
});

const BufferEncoder = (exports.BufferEncoder = {
  byteLength: value => {
    (0, _invariant2.default)(
      Buffer.isBuffer(value),
      'RSocketEncoding: Expected value to be a buffer, got `%s`.',
      value
    );

    return value.length;
  },
  decode: (buffer, start, end) => {
    return buffer.slice(start, end);
  },
  encode: (value, buffer, start, end) => {
    (0, _invariant2.default)(
      Buffer.isBuffer(value),
      'RSocketEncoding: Expected value to be a buffer, got `%s`.',
      value
    );

    value.copy(buffer, start, 0, value.length);
    return end;
  },
});

/**
        * Encode all values as UTF8 strings.
        */
const Utf8Encoders = (exports.Utf8Encoders = {
  data: UTF8Encoder,
  dataMimeType: UTF8Encoder,
  message: UTF8Encoder,
  metadata: UTF8Encoder,
  metadataMimeType: UTF8Encoder,
  resumeToken: UTF8Encoder,
});

/**
                               * Encode all values as buffers.
                               */
const BufferEncoders = (exports.BufferEncoders = {
  data: BufferEncoder,
  dataMimeType: UTF8Encoder,
  message: UTF8Encoder,
  metadata: BufferEncoder,
  metadataMimeType: UTF8Encoder,
  resumeToken: BufferEncoder,
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(22).Buffer))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _FlowableMapOperator = __webpack_require__(26);
var _FlowableMapOperator2 = _interopRequireDefault(_FlowableMapOperator);
var _FlowableTakeOperator = __webpack_require__(27);
var _FlowableTakeOperator2 = _interopRequireDefault(_FlowableTakeOperator);

var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
var _warning = __webpack_require__(6);
var _warning2 = _interopRequireDefault(_warning);
var _emptyFunction = __webpack_require__(7);
var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                                   * Implements the ReactiveStream `Publisher` interface with Rx-style operators.
                                                                                                                                                                                                                   */
class Flowable {
  static just(...values) {
    return new Flowable(subscriber => {
      let cancelled = false;
      let i = 0;
      subscriber.onSubscribe({
        cancel: () => {
          cancelled = true;
        },
        request: n => {
          while (!cancelled && n > 0 && i < values.length) {
            subscriber.onNext(values[i++]);
            n--;
          }
          if (!cancelled && i == values.length) {
            subscriber.onComplete();
          }
        },
      });
    });
  }

  static error(error) {
    return new Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: () => {},
        request: () => {
          subscriber.onError(error);
        },
      });
    });
  }

  static never() {
    return new Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: _emptyFunction2.default,
        request: _emptyFunction2.default,
      });
    });
  }

  constructor(source, max = Number.MAX_SAFE_INTEGER) {
    this._max = max;
    this._source = source;
  }

  subscribe(subscriberOrCallback) {
    let partialSubscriber;
    if (typeof subscriberOrCallback === 'function') {
      partialSubscriber = this._wrapCallback(subscriberOrCallback);
    } else {
      partialSubscriber = subscriberOrCallback;
    }
    const subscriber = new FlowableSubscriber(partialSubscriber, this._max);
    this._source(subscriber);
  }

  lift(onSubscribeLift) {
    return new Flowable(subscriber =>
      this._source(onSubscribeLift(subscriber)));
  }

  map(fn) {
    return this.lift(
      subscriber => new _FlowableMapOperator2.default(subscriber, fn)
    );
  }

  take(toTake) {
    return this.lift(
      subscriber => new _FlowableTakeOperator2.default(subscriber, toTake)
    );
  }

  _wrapCallback(callback) {
    const max = this._max;
    return {
      onNext: callback,
      onSubscribe(subscription) {
        subscription.request(max);
      },
    };
  }
}
exports.default = Flowable;

/**
                                 * @private
                                 */
class FlowableSubscriber {
  constructor(subscriber, max) {
    this._cancel = () => {
      if (!this._active) {
        return;
      }
      this._active = false;
      if (this._subscription) {
        this._subscription.cancel();
      }
    };
    this._request = n => {
      (0, _invariant2.default)(
        Number.isInteger(n) && n >= 1 && n <= this._max,
        'Flowable: Expected request value to be an integer with a ' +
          'value greater than 0 and less than or equal to %s, got ' +
          '`%s`.',
        this._max,
        n
      );

      if (!this._active) {
        return;
      }
      if (n === this._max) {
        this._pending = this._max;
      } else {
        this._pending += n;
        if (this._pending >= this._max) {
          this._pending = this._max;
        }
      }
      if (this._subscription) {
        this._subscription.request(n);
      }
    };
    this._active = false;
    this._max = max;
    this._pending = 0;
    this._started = false;
    this._subscriber = subscriber || {};
    this._subscription = null;
  }
  onComplete() {
    if (!this._active) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onComplete(): %s.',
        this._started
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    this._active = false;
    this._started = true;
    try {
      if (this._subscriber.onComplete) {
        this._subscriber.onComplete();
      }
    } catch (error) {
      if (this._subscriber.onError) {
        this._subscriber.onError(error);
      }
    }
  }
  onError(error) {
    if (this._started && !this._active) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onError(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    this._active = false;
    this._started = true;
    this._subscriber.onError && this._subscriber.onError(error);
  }
  onNext(data) {
    if (!this._active) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onNext(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );
      return;
    }
    if (this._pending === 0) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onNext(), all request()ed values have been ' +
          'published.'
      );
      return;
    }
    if (this._pending !== this._max) {
      this._pending--;
    }
    try {
      this._subscriber.onNext && this._subscriber.onNext(data);
    } catch (error) {
      if (this._subscription) {
        this._subscription.cancel();
      }
      this.onError(error);
    }
  }
  onSubscribe(subscription) {
    if (this._started) {
      (0, _warning2.default)(
        false,
        'Flowable: Invalid call to onSubscribe(): already called.'
      );
      return;
    }
    this._active = true;
    this._started = true;
    this._subscription = subscription;
    try {
      this._subscriber.onSubscribe &&
        this._subscriber.onSubscribe({
          cancel: this._cancel,
          request: this._request,
        });
    } catch (error) {
      this.onError(error);
    }
  }
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var nullthrows = function nullthrows(x) {
  if (x != null) {
    return x;
  }

  throw new Error("Got unexpected null or undefined");
};

module.exports = nullthrows;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', {value: true});

class WellKnownMimeType {
  constructor(str, identifier) {
    this._string = str;
    this._identifier = identifier;
  }

  /**
     * Find the {@link WellKnownMimeType} for the given identifier (as an {@code int}). Valid
     * identifiers are defined to be integers between 0 and 127, inclusive. Identifiers outside of
     * this range will produce the {@link #UNPARSEABLE_MIME_TYPE}. Additionally, some identifiers in
     * that range are still only reserved and don't have a type associated yet: this method returns
     * the {@link #UNKNOWN_RESERVED_MIME_TYPE} when passing such an identifier, which lets call sites
     * potentially detect this and keep the original representation when transmitting the associated
     * metadata buffer.
     *
     * @param id the looked up identifier
     * @return the {@link WellKnownMimeType}, or {@link #UNKNOWN_RESERVED_MIME_TYPE} if the id is out
     *     of the specification's range, or {@link #UNKNOWN_RESERVED_MIME_TYPE} if the id is one that
     *     is merely reserved but unknown to this implementation.
     */
  static fromIdentifier(id) {
    if (id < 0x00 || id > 0x7f) {
      return UNPARSEABLE_MIME_TYPE;
    }
    return TYPES_BY_MIME_ID[id];
  }

  /**
     * Find the {@link WellKnownMimeType} for the given {@link String} representation. If the
     * representation is {@code null} or doesn't match a {@link WellKnownMimeType}, the {@link
     * #UNPARSEABLE_MIME_TYPE} is returned.
     *
     * @param mimeType the looked up mime type
     * @return the matching {@link WellKnownMimeType}, or {@link #UNPARSEABLE_MIME_TYPE} if none
     *     matches
     */
  static fromString(mimeType) {
    if (!mimeType) throw new Error('type must be non-null');

    // force UNPARSEABLE if by chance UNKNOWN_RESERVED_MIME_TYPE's text has been used
    if (mimeType === UNKNOWN_RESERVED_MIME_TYPE.string) {
      return UNPARSEABLE_MIME_TYPE;
    }

    return TYPES_BY_MIME_STRING.get(mimeType) || UNPARSEABLE_MIME_TYPE;
  }

  /** @return the byte identifier of the mime type, guaranteed to be positive or zero. */
  get identifier() {
    return this._identifier;
  }

  /**
     * @return the mime type represented as a {@link String}, which is made of US_ASCII compatible
     *     characters only
     */
  get string() {
    return this._string;
  }

  /** @see #getString() */
  toString() {
    return this._string;
  }
}
exports.default = WellKnownMimeType;

const UNPARSEABLE_MIME_TYPE = (exports.UNPARSEABLE_MIME_TYPE = new WellKnownMimeType(
  'UNPARSEABLE_MIME_TYPE_DO_NOT_USE',
  -2
));

const UNKNOWN_RESERVED_MIME_TYPE = (exports.UNKNOWN_RESERVED_MIME_TYPE = new WellKnownMimeType(
  'UNKNOWN_YET_RESERVED_DO_NOT_USE',
  -1
));

const APPLICATION_AVRO = (exports.APPLICATION_AVRO = new WellKnownMimeType(
  'application/avro',
  0x00
));
const APPLICATION_CBOR = (exports.APPLICATION_CBOR = new WellKnownMimeType(
  'application/cbor',
  0x01
));
const APPLICATION_GRAPHQL = (exports.APPLICATION_GRAPHQL = new WellKnownMimeType(
  'application/graphql',
  0x02
));

const APPLICATION_GZIP = (exports.APPLICATION_GZIP = new WellKnownMimeType(
  'application/gzip',
  0x03
));
const APPLICATION_JAVASCRIPT = (exports.APPLICATION_JAVASCRIPT = new WellKnownMimeType(
  'application/javascript',
  0x04
));

const APPLICATION_JSON = (exports.APPLICATION_JSON = new WellKnownMimeType(
  'application/json',
  0x05
));
const APPLICATION_OCTET_STREAM = (exports.APPLICATION_OCTET_STREAM = new WellKnownMimeType(
  'application/octet-stream',
  0x06
));

const APPLICATION_PDF = (exports.APPLICATION_PDF = new WellKnownMimeType(
  'application/pdf',
  0x07
));
const APPLICATION_THRIFT = (exports.APPLICATION_THRIFT = new WellKnownMimeType(
  'application/vnd.apache.thrift.binary',
  0x08
));

const APPLICATION_PROTOBUF = (exports.APPLICATION_PROTOBUF = new WellKnownMimeType(
  'application/vnd.google.protobuf',
  0x09
));

const APPLICATION_XML = (exports.APPLICATION_XML = new WellKnownMimeType(
  'application/xml',
  0x0a
));
const APPLICATION_ZIP = (exports.APPLICATION_ZIP = new WellKnownMimeType(
  'application/zip',
  0x0b
));
const AUDIO_AAC = (exports.AUDIO_AAC = new WellKnownMimeType(
  'audio/aac',
  0x0c
));
const AUDIO_MP3 = (exports.AUDIO_MP3 = new WellKnownMimeType(
  'audio/mp3',
  0x0d
));
const AUDIO_MP4 = (exports.AUDIO_MP4 = new WellKnownMimeType(
  'audio/mp4',
  0x0e
));
const AUDIO_MPEG3 = (exports.AUDIO_MPEG3 = new WellKnownMimeType(
  'audio/mpeg3',
  0x0f
));
const AUDIO_MPEG = (exports.AUDIO_MPEG = new WellKnownMimeType(
  'audio/mpeg',
  0x10
));
const AUDIO_OGG = (exports.AUDIO_OGG = new WellKnownMimeType(
  'audio/ogg',
  0x11
));
const AUDIO_OPUS = (exports.AUDIO_OPUS = new WellKnownMimeType(
  'audio/opus',
  0x12
));
const AUDIO_VORBIS = (exports.AUDIO_VORBIS = new WellKnownMimeType(
  'audio/vorbis',
  0x13
));
const IMAGE_BMP = (exports.IMAGE_BMP = new WellKnownMimeType(
  'image/bmp',
  0x14
));
const IMAGE_GIG = (exports.IMAGE_GIG = new WellKnownMimeType(
  'image/gif',
  0x15
));
const IMAGE_HEIC_SEQUENCE = (exports.IMAGE_HEIC_SEQUENCE = new WellKnownMimeType(
  'image/heic-sequence',
  0x16
));

const IMAGE_HEIC = (exports.IMAGE_HEIC = new WellKnownMimeType(
  'image/heic',
  0x17
));
const IMAGE_HEIF_SEQUENCE = (exports.IMAGE_HEIF_SEQUENCE = new WellKnownMimeType(
  'image/heif-sequence',
  0x18
));

const IMAGE_HEIF = (exports.IMAGE_HEIF = new WellKnownMimeType(
  'image/heif',
  0x19
));
const IMAGE_JPEG = (exports.IMAGE_JPEG = new WellKnownMimeType(
  'image/jpeg',
  0x1a
));
const IMAGE_PNG = (exports.IMAGE_PNG = new WellKnownMimeType(
  'image/png',
  0x1b
));
const IMAGE_TIFF = (exports.IMAGE_TIFF = new WellKnownMimeType(
  'image/tiff',
  0x1c
));
const MULTIPART_MIXED = (exports.MULTIPART_MIXED = new WellKnownMimeType(
  'multipart/mixed',
  0x1d
));
const TEXT_CSS = (exports.TEXT_CSS = new WellKnownMimeType('text/css', 0x1e));
const TEXT_CSV = (exports.TEXT_CSV = new WellKnownMimeType('text/csv', 0x1f));
const TEXT_HTML = (exports.TEXT_HTML = new WellKnownMimeType(
  'text/html',
  0x20
));
const TEXT_PLAIN = (exports.TEXT_PLAIN = new WellKnownMimeType(
  'text/plain',
  0x21
));
const TEXT_XML = (exports.TEXT_XML = new WellKnownMimeType('text/xml', 0x22));
const VIDEO_H264 = (exports.VIDEO_H264 = new WellKnownMimeType(
  'video/H264',
  0x23
));
const VIDEO_H265 = (exports.VIDEO_H265 = new WellKnownMimeType(
  'video/H265',
  0x24
));
const VIDEO_VP8 = (exports.VIDEO_VP8 = new WellKnownMimeType(
  'video/VP8',
  0x25
));
const APPLICATION_HESSIAN = (exports.APPLICATION_HESSIAN = new WellKnownMimeType(
  'application/x-hessian',
  0x26
));

const APPLICATION_JAVA_OBJECT = (exports.APPLICATION_JAVA_OBJECT = new WellKnownMimeType(
  'application/x-java-object',
  0x27
));

const APPLICATION_CLOUDEVENTS_JSON = (exports.APPLICATION_CLOUDEVENTS_JSON = new WellKnownMimeType(
  'application/cloudevents+json',
  0x28
));

// ... reserved for future use ...

const MESSAGE_RSOCKET_TRACING_ZIPKIN = (exports.MESSAGE_RSOCKET_TRACING_ZIPKIN = new WellKnownMimeType(
  'message/x.rsocket.tracing-zipkin.v0',
  0x7d
));

const MESSAGE_RSOCKET_ROUTING = (exports.MESSAGE_RSOCKET_ROUTING = new WellKnownMimeType(
  'message/x.rsocket.routing.v0',
  0x7e
));

const MESSAGE_RSOCKET_COMPOSITE_METADATA = (exports.MESSAGE_RSOCKET_COMPOSITE_METADATA = new WellKnownMimeType(
  'message/x.rsocket.composite-metadata.v0',
  0x7f
));

const TYPES_BY_MIME_ID = (exports.TYPES_BY_MIME_ID = new Array(128));
const TYPES_BY_MIME_STRING = (exports.TYPES_BY_MIME_STRING = new Map());

const ALL_MIME_TYPES = [
  UNPARSEABLE_MIME_TYPE,
  UNKNOWN_RESERVED_MIME_TYPE,
  APPLICATION_AVRO,
  APPLICATION_CBOR,
  APPLICATION_GRAPHQL,
  APPLICATION_GZIP,
  APPLICATION_JAVASCRIPT,
  APPLICATION_JSON,
  APPLICATION_OCTET_STREAM,
  APPLICATION_PDF,
  APPLICATION_THRIFT,
  APPLICATION_PROTOBUF,
  APPLICATION_XML,
  APPLICATION_ZIP,
  AUDIO_AAC,
  AUDIO_MP3,
  AUDIO_MP4,
  AUDIO_MPEG3,
  AUDIO_MPEG,
  AUDIO_OGG,
  AUDIO_OPUS,
  AUDIO_VORBIS,
  IMAGE_BMP,
  IMAGE_GIG,
  IMAGE_HEIC_SEQUENCE,
  IMAGE_HEIC,
  IMAGE_HEIF_SEQUENCE,
  IMAGE_HEIF,
  IMAGE_JPEG,
  IMAGE_PNG,
  IMAGE_TIFF,
  MULTIPART_MIXED,
  TEXT_CSS,
  TEXT_CSV,
  TEXT_HTML,
  TEXT_PLAIN,
  TEXT_XML,
  VIDEO_H264,
  VIDEO_H265,
  VIDEO_VP8,
  APPLICATION_HESSIAN,
  APPLICATION_JAVA_OBJECT,
  APPLICATION_CLOUDEVENTS_JSON,
  MESSAGE_RSOCKET_TRACING_ZIPKIN,
  MESSAGE_RSOCKET_ROUTING,
  MESSAGE_RSOCKET_COMPOSITE_METADATA,
];

TYPES_BY_MIME_ID.fill(UNKNOWN_RESERVED_MIME_TYPE);

for (let value of ALL_MIME_TYPES) {
  if (value.identifier >= 0) {
    TYPES_BY_MIME_ID[value.identifier] = value;
    TYPES_BY_MIME_STRING.set(value.string, value);
  }
}

if (Object.seal) {
  Object.seal(TYPES_BY_MIME_ID);
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.createServerMachine = createServerMachine;
exports.createClientMachine = createClientMachine;
var _rsocketFlowable = __webpack_require__(2);
var _emptyFunction = __webpack_require__(7);
var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
var _warning = __webpack_require__(6);
var _warning2 = _interopRequireDefault(_warning);
var _RSocketFrame = __webpack_require__(1);
var _RSocketSerialization = __webpack_require__(4);
var _RSocketLease = __webpack_require__(5);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
class ResponderWrapper {
  constructor(responder) {
    this._responder = responder || {};
  }
  setResponder(responder) {
    this._responder = responder || {};
  }
  fireAndForget(payload) {
    if (this._responder.fireAndForget) {
      try {
        this._responder.fireAndForget(payload);
      } catch (error) {
        console.error('fireAndForget threw an exception', error);
      }
    }
  }
  requestResponse(payload) {
    let error;
    if (this._responder.requestResponse) {
      try {
        return this._responder.requestResponse(payload);
      } catch (_error) {
        console.error('requestResponse threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Single.error(error || new Error('not implemented'));
  }
  requestStream(payload) {
    let error;
    if (this._responder.requestStream) {
      try {
        return this._responder.requestStream(payload);
      } catch (_error) {
        console.error('requestStream threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Flowable.error(
      error || new Error('not implemented')
    );
  }
  requestChannel(payloads) {
    let error;
    if (this._responder.requestChannel) {
      try {
        return this._responder.requestChannel(payloads);
      } catch (_error) {
        console.error('requestChannel threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Flowable.error(
      error || new Error('not implemented')
    );
  }
  metadataPush(payload) {
    let error;
    if (this._responder.metadataPush) {
      try {
        return this._responder.metadataPush(payload);
      } catch (_error) {
        console.error('metadataPush threw an exception', _error);
        error = _error;
      }
    }
    return _rsocketFlowable.Single.error(error || new Error('not implemented'));
  }
}
function createServerMachine(
  connection,
  connectionPublisher,
  keepAliveTimeout,
  serializers,
  errorHandler,
  requesterLeaseHandler,
  responderLeaseHandler
) {
  return new RSocketMachineImpl(
    'SERVER',
    connection,
    connectionPublisher,
    keepAliveTimeout,
    serializers,
    undefined,
    errorHandler,
    requesterLeaseHandler,
    responderLeaseHandler
  );
}
function createClientMachine(
  connection,
  connectionPublisher,
  keepAliveTimeout,
  serializers,
  requestHandler,
  errorHandler,
  requesterLeaseHandler,
  responderLeaseHandler
) {
  return new RSocketMachineImpl(
    'CLIENT',
    connection,
    connectionPublisher,
    keepAliveTimeout,
    serializers,
    requestHandler,
    errorHandler,
    requesterLeaseHandler,
    responderLeaseHandler
  );
}

class RSocketMachineImpl {
  constructor(
    role,
    connection,
    connectionPublisher,
    keepAliveTimeout,
    serializers,
    requestHandler,
    errorHandler,
    requesterLeaseHandler,
    responderLeaseHandler
  ) {
    this._connectionAvailability = 1.0;
    this._handleTransportClose = () => {
      this._handleError(new Error('RSocket: The connection was closed.'));
    };
    this._handleError = error => {
      // Error any open request streams
      this._receivers.forEach(receiver => {
        receiver.onError(error);
      });
      this._receivers.clear();
      // Cancel any active subscriptions
      this._subscriptions.forEach(subscription => {
        subscription.cancel();
      });
      this._subscriptions.clear();
      this._connectionAvailability = 0.0;
      this._dispose(
        this._requesterLeaseHandler,
        this._responderLeaseSenderDisposable
      );

      const handle = this._keepAliveTimerHandle;
      if (handle) {
        clearTimeout(handle);
        this._keepAliveTimerHandle = null;
      }
    };
    this._handleFrame = frame => {
      const {streamId} = frame;
      if (streamId === _RSocketFrame.CONNECTION_STREAM_ID) {
        this._handleConnectionFrame(frame);
      } else {
        this._handleStreamFrame(streamId, frame);
      }
    };
    this._connection = connection;
    this._requesterLeaseHandler = requesterLeaseHandler;
    this._responderLeaseHandler = responderLeaseHandler;
    this._nextStreamId = role === 'CLIENT' ? 1 : 2;
    this._receivers = new Map();
    this._subscriptions = new Map();
    this._serializers = serializers ||
      _RSocketSerialization.IdentitySerializers;
    this._requestHandler = new ResponderWrapper(requestHandler);
    this._errorHandler = errorHandler; // Subscribe to completion/errors before sending anything
    connectionPublisher({
      onComplete: this._handleTransportClose,
      onError: this._handleError,
      onNext: this._handleFrame,
      onSubscribe: subscription =>
        subscription.request(Number.MAX_SAFE_INTEGER),
    });
    const responderHandler = this._responderLeaseHandler;
    if (responderHandler) {
      this._responderLeaseSenderDisposable = responderHandler.send(
        this._leaseFrameSender()
      );
    } // Cleanup when the connection closes
    this._connection.connectionStatus().subscribe({
      onNext: status => {
        if (status.kind === 'CLOSED') {
          this._handleTransportClose();
        } else if (status.kind === 'ERROR') {
          this._handleError(status.error);
        }
      },
      onSubscribe: subscription =>
        subscription.request(Number.MAX_SAFE_INTEGER),
    });
    const MIN_TICK_DURATION = 100;
    this._keepAliveLastReceivedMillis = Date.now();
    const keepAliveHandler = () => {
      const now = Date.now();
      const noKeepAliveDuration = now - this._keepAliveLastReceivedMillis;
      if (noKeepAliveDuration >= keepAliveTimeout) {
        this._handleConnectionError(
          new Error(`No keep-alive acks for ${keepAliveTimeout} millis`)
        );
      } else {
        this._keepAliveTimerHandle = setTimeout(
          keepAliveHandler,
          Math.max(MIN_TICK_DURATION, keepAliveTimeout - noKeepAliveDuration)
        );
      }
    };
    this._keepAliveTimerHandle = setTimeout(keepAliveHandler, keepAliveTimeout);
  }
  setRequestHandler(requestHandler) {
    this._requestHandler.setResponder(requestHandler);
  }
  close() {
    this._connection.close();
  }
  connectionStatus() {
    return this._connection.connectionStatus();
  }
  availability() {
    const r = this._requesterLeaseHandler;
    const requesterAvailability = r ? r.availability() : 1.0;
    return Math.min(this._connectionAvailability, requesterAvailability);
  }
  fireAndForget(payload) {
    if (this._useLeaseOrError(this._requesterLeaseHandler)) {
      return;
    }
    const streamId = this._getNextStreamId(this._receivers);
    const data = this._serializers.data.serialize(payload.data);
    const metadata = this._serializers.metadata.serialize(payload.metadata);
    const frame = {
      data,
      flags: payload.metadata !== undefined ? _RSocketFrame.FLAGS.METADATA : 0,
      metadata,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.REQUEST_FNF,
    };
    this._connection.sendOne(frame);
  }
  requestResponse(payload) {
    const leaseError = this._useLeaseOrError(this._requesterLeaseHandler);
    if (leaseError) {
      return _rsocketFlowable.Single.error(new Error(leaseError));
    }
    const streamId = this._getNextStreamId(this._receivers);
    return new _rsocketFlowable.Single(subscriber => {
      this._receivers.set(streamId, {
        onComplete: _emptyFunction2.default,
        onError: error => subscriber.onError(error),
        onNext: data => subscriber.onComplete(data),
      });
      const data = this._serializers.data.serialize(payload.data);
      const metadata = this._serializers.metadata.serialize(payload.metadata);
      const frame = {
        data,
        flags: payload.metadata !== undefined
          ? _RSocketFrame.FLAGS.METADATA
          : 0,
        metadata,
        streamId,
        type: _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE,
      };
      this._connection.sendOne(frame);
      subscriber.onSubscribe(() => {
        this._receivers.delete(streamId);
        const cancelFrame = {
          flags: 0,
          streamId,
          type: _RSocketFrame.FRAME_TYPES.CANCEL,
        };
        this._connection.sendOne(cancelFrame);
      });
    });
  }
  requestStream(payload) {
    const leaseError = this._useLeaseOrError(this._requesterLeaseHandler);
    if (leaseError) {
      return _rsocketFlowable.Flowable.error(new Error(leaseError));
    }
    const streamId = this._getNextStreamId(this._receivers);
    return new _rsocketFlowable.Flowable(
      subscriber => {
        this._receivers.set(streamId, subscriber);
        let initialized = false;
        subscriber.onSubscribe({
          cancel: () => {
            this._receivers.delete(streamId);
            if (!initialized) {
              return;
            }
            const cancelFrame = {
              flags: 0,
              streamId,
              type: _RSocketFrame.FRAME_TYPES.CANCEL,
            };
            this._connection.sendOne(cancelFrame);
          },
          request: n => {
            if (n > _RSocketFrame.MAX_REQUEST_N) {
              n = _RSocketFrame.MAX_REQUEST_N;
            }
            if (initialized) {
              const requestNFrame = {
                flags: 0,
                requestN: n,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
              };
              this._connection.sendOne(requestNFrame);
            } else {
              initialized = true;
              const data = this._serializers.data.serialize(payload.data);
              const metadata = this._serializers.metadata.serialize(
                payload.metadata
              );
              const requestStreamFrame = {
                data,
                flags: payload.metadata !== undefined
                  ? _RSocketFrame.FLAGS.METADATA
                  : 0,
                metadata,
                requestN: n,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.REQUEST_STREAM,
              };
              this._connection.sendOne(requestStreamFrame);
            }
          },
        });
      },
      _RSocketFrame.MAX_REQUEST_N
    );
  }
  requestChannel(payloads) {
    const leaseError = this._useLeaseOrError(this._requesterLeaseHandler);
    if (leaseError) {
      return _rsocketFlowable.Flowable.error(new Error(leaseError));
    }
    const streamId = this._getNextStreamId(this._receivers);
    let payloadsSubscribed = false;
    return new _rsocketFlowable.Flowable(
      subscriber => {
        try {
          this._receivers.set(streamId, subscriber);
          let initialized = false;
          subscriber.onSubscribe({
            cancel: () => {
              this._receivers.delete(streamId);
              if (!initialized) {
                return;
              }
              const cancelFrame = {
                flags: 0,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.CANCEL,
              };
              this._connection.sendOne(cancelFrame);
            },
            request: n => {
              if (n > _RSocketFrame.MAX_REQUEST_N) {
                n = _RSocketFrame.MAX_REQUEST_N;
              }
              if (initialized) {
                const requestNFrame = {
                  flags: 0,
                  requestN: n,
                  streamId,
                  type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
                };
                this._connection.sendOne(requestNFrame);
              } else {
                if (!payloadsSubscribed) {
                  payloadsSubscribed = true;
                  payloads.subscribe({
                    onComplete: () => {
                      this._sendStreamComplete(streamId);
                    },
                    onError: error => {
                      this._sendStreamError(streamId, error.message);
                    }, //Subscriber methods
                    onNext: payload => {
                      const data = this._serializers.data.serialize(
                        payload.data
                      );
                      const metadata = this._serializers.metadata.serialize(
                        payload.metadata
                      );
                      if (!initialized) {
                        initialized = true;
                        const requestChannelFrame = {
                          data,
                          flags: payload.metadata !== undefined
                            ? _RSocketFrame.FLAGS.METADATA
                            : 0,
                          metadata,
                          requestN: n,
                          streamId,
                          type: _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL,
                        };
                        this._connection.sendOne(requestChannelFrame);
                      } else {
                        const payloadFrame = {
                          data,
                          flags: _RSocketFrame.FLAGS.NEXT |
                            (payload.metadata !== undefined
                              ? _RSocketFrame.FLAGS.METADATA
                              : 0),
                          metadata,
                          streamId,
                          type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
                        };
                        this._connection.sendOne(payloadFrame);
                      }
                    },
                    onSubscribe: subscription => {
                      this._subscriptions.set(streamId, subscription);
                      subscription.request(1);
                    },
                  });
                } else {
                  (0, _warning2.default)(
                    false,
                    'RSocketClient: re-entrant call to request n before initial' +
                      ' channel established.'
                  );
                }
              }
            },
          });
        } catch (err) {
          console.warn(
            'Exception while subscribing to channel flowable:' + err
          );
        }
      },
      _RSocketFrame.MAX_REQUEST_N
    );
  }
  metadataPush(payload) {
    // TODO #18065331: implement metadataPush
    throw new Error('metadataPush() is not implemented');
  }
  _getNextStreamId(streamIds) {
    const streamId = this._nextStreamId;
    do {
      this._nextStreamId = this._nextStreamId + 2 & _RSocketFrame.MAX_STREAM_ID;
    } while (this._nextStreamId === 0 || streamIds.has(streamId));
    return streamId;
  }
  _useLeaseOrError(leaseHandler) {
    if (leaseHandler) {
      if (!leaseHandler.use()) {
        return leaseHandler.errorMessage();
      }
    }
  }
  _leaseFrameSender() {
    return lease =>
      this._connection.sendOne({
        flags: 0,
        metadata: lease.metadata,
        requestCount: lease.allowedRequests,
        streamId: _RSocketFrame.CONNECTION_STREAM_ID,
        ttl: lease.timeToLiveMillis,
        type: _RSocketFrame.FRAME_TYPES.LEASE,
      });
  }
  _dispose(...disposables) {
    disposables.forEach(d => {
      if (d) {
        d.dispose();
      }
    });
  }
  _isRequest(frameType) {
    switch (frameType) {
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
        return true;
      default:
        return false;
    }
  }
  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * Handle the connection closing normally: this is an error for any open streams.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */ /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * Handle the transport connection closing abnormally or a connection-level protocol error.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */ _handleConnectionError(
    error
  ) {
    this._handleError(error);
    this._connection.close();
    const errorHandler = this._errorHandler;
    if (errorHandler) {
      errorHandler(error);
    }
  }
  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Handle a frame received from the transport client.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */ /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Handle connection frames (stream id === 0).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */ _handleConnectionFrame(
    frame
  ) {
    switch (frame.type) {
      case _RSocketFrame.FRAME_TYPES.ERROR:
        const error = (0, _RSocketFrame.createErrorFromFrame)(frame);
        this._handleConnectionError(error);
        break;
      case _RSocketFrame.FRAME_TYPES.EXT: // Extensions are not supported
        break;
      case _RSocketFrame.FRAME_TYPES.KEEPALIVE:
        this._keepAliveLastReceivedMillis = Date.now();
        if ((0, _RSocketFrame.isRespond)(frame.flags)) {
          this._connection.sendOne(
            Object.assign({}, frame, {
              flags: frame.flags ^ _RSocketFrame.FLAGS.RESPOND, // eslint-disable-line no-bitwise
              lastReceivedPosition: 0,
            })
          );
        }
        break;
      case _RSocketFrame.FRAME_TYPES.LEASE:
        const r = this._requesterLeaseHandler;
        if (r) {
          r.receive(frame);
        }
        break;
      case _RSocketFrame.FRAME_TYPES.METADATA_PUSH:
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
        // TODO #18064706: handle requests from server
        break;
      case _RSocketFrame.FRAME_TYPES.RESERVED:
        // No-op
        break;
      case _RSocketFrame.FRAME_TYPES.RESUME:
      case _RSocketFrame.FRAME_TYPES.RESUME_OK:
        // TODO #18065016: support resumption
        break;
      default:
        if (false) {
          console.log(
            'RSocketClient: Unsupported frame type `%s` on stream `%s`.',
            (0, _RSocketFrame.getFrameTypeName)(frame.type),
            _RSocketFrame.CONNECTION_STREAM_ID
          );
        }
        break;
    }
  }

  /**
     * Handle stream-specific frames (stream id !== 0).
     */
  _handleStreamFrame(streamId, frame) {
    if (this._isRequest(frame.type)) {
      const leaseError = this._useLeaseOrError(this._responderLeaseHandler);
      if (leaseError) {
        this._sendStreamError(streamId, leaseError);
        return;
      }
    }
    switch (frame.type) {
      case _RSocketFrame.FRAME_TYPES.CANCEL:
        this._handleCancel(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_N:
        this._handleRequestN(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_FNF:
        this._handleFireAndForget(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_RESPONSE:
        this._handleRequestResponse(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_STREAM:
        this._handleRequestStream(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.REQUEST_CHANNEL:
        this._handleRequestChannel(streamId, frame);
        break;
      case _RSocketFrame.FRAME_TYPES.ERROR:
        const error = (0, _RSocketFrame.createErrorFromFrame)(frame);
        this._handleStreamError(streamId, error);
        break;
      case _RSocketFrame.FRAME_TYPES.PAYLOAD:
        const receiver = this._receivers.get(streamId);
        if (receiver != null) {
          if ((0, _RSocketFrame.isNext)(frame.flags)) {
            const payload = {
              data: this._serializers.data.deserialize(frame.data),
              metadata: this._serializers.metadata.deserialize(frame.metadata),
            };

            receiver.onNext(payload);
          }
          if ((0, _RSocketFrame.isComplete)(frame.flags)) {
            this._receivers.delete(streamId);
            receiver.onComplete();
          }
        }
        break;
      default:
        if (false) {
          console.log(
            'RSocketClient: Unsupported frame type `%s` on stream `%s`.',
            (0, _RSocketFrame.getFrameTypeName)(frame.type),
            streamId
          );
        }
        break;
    }
  }

  _handleCancel(streamId, frame) {
    const subscription = this._subscriptions.get(streamId);
    if (subscription) {
      subscription.cancel();
      this._subscriptions.delete(streamId);
    }
  }

  _handleRequestN(streamId, frame) {
    const subscription = this._subscriptions.get(streamId);
    if (subscription) {
      subscription.request(frame.requestN);
    }
  }

  _handleFireAndForget(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.fireAndForget(payload);
  }

  _handleRequestResponse(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.requestResponse(payload).subscribe({
      onComplete: payload => {
        this._sendStreamPayload(streamId, payload, true);
      },
      onError: error => this._sendStreamError(streamId, error.message),
      onSubscribe: cancel => {
        const subscription = {
          cancel,
          request: _emptyFunction2.default,
        };

        this._subscriptions.set(streamId, subscription);
      },
    });
  }

  _handleRequestStream(streamId, frame) {
    const payload = this._deserializePayload(frame);
    this._requestHandler.requestStream(payload).subscribe({
      onComplete: () => this._sendStreamComplete(streamId),
      onError: error => this._sendStreamError(streamId, error.message),
      onNext: payload => this._sendStreamPayload(streamId, payload),
      onSubscribe: subscription => {
        this._subscriptions.set(streamId, subscription);
        subscription.request(frame.requestN);
      },
    });
  }

  _handleRequestChannel(streamId, frame) {
    const existingSubscription = this._subscriptions.get(streamId);
    if (existingSubscription) {
      //Likely a duplicate REQUEST_CHANNEL frame, ignore per spec
      return;
    }

    const payloads = new _rsocketFlowable.Flowable(
      subscriber => {
        let firstRequest = true;

        subscriber.onSubscribe({
          cancel: () => {
            this._receivers.delete(streamId);
            const cancelFrame = {
              flags: 0,
              streamId,
              type: _RSocketFrame.FRAME_TYPES.CANCEL,
            };

            this._connection.sendOne(cancelFrame);
          },
          request: n => {
            if (n > _RSocketFrame.MAX_REQUEST_N) {
              n = _RSocketFrame.MAX_REQUEST_N;
            }
            if (firstRequest) {
              n--;
            }

            if (n > 0) {
              const requestNFrame = {
                flags: 0,
                requestN: n,
                streamId,
                type: _RSocketFrame.FRAME_TYPES.REQUEST_N,
              };

              this._connection.sendOne(requestNFrame);
            }
            //critically, if n is 0 now, that's okay because we eagerly decremented it
            if (firstRequest && n >= 0) {
              firstRequest = false;
              //release the initial frame we received in frame form due to map operator
              subscriber.onNext(frame);
            }
          },
        });
      },
      _RSocketFrame.MAX_REQUEST_N
    );

    const framesToPayloads = new _rsocketFlowable.FlowableProcessor(
      payloads,
      frame => this._deserializePayload(frame)
    );
    this._receivers.set(streamId, framesToPayloads);

    this._requestHandler.requestChannel(framesToPayloads).subscribe({
      onComplete: () => this._sendStreamComplete(streamId),
      onError: error => this._sendStreamError(streamId, error.message),
      onNext: payload => this._sendStreamPayload(streamId, payload),
      onSubscribe: subscription => {
        this._subscriptions.set(streamId, subscription);
        subscription.request(frame.requestN);
      },
    });
  }

  _sendStreamComplete(streamId) {
    this._subscriptions.delete(streamId);
    this._connection.sendOne({
      data: null,
      flags: _RSocketFrame.FLAGS.COMPLETE,
      metadata: null,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
    });
  }

  _sendStreamError(streamId, errorMessage) {
    this._subscriptions.delete(streamId);
    this._connection.sendOne({
      code: _RSocketFrame.ERROR_CODES.APPLICATION_ERROR,
      flags: 0,
      message: errorMessage,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.ERROR,
    });
  }

  _sendStreamPayload(streamId, payload, complete = false) {
    let flags = _RSocketFrame.FLAGS.NEXT;
    if (complete) {
      // eslint-disable-next-line no-bitwise
      flags |= _RSocketFrame.FLAGS.COMPLETE;
      this._subscriptions.delete(streamId);
    }
    const data = this._serializers.data.serialize(payload.data);
    const metadata = this._serializers.metadata.serialize(payload.metadata);
    this._connection.sendOne({
      data,
      flags,
      metadata,
      streamId,
      type: _RSocketFrame.FRAME_TYPES.PAYLOAD,
    });
  }

  _deserializePayload(frame) {
    return deserializePayload(this._serializers, frame);
  }

  /**
     * Handle an error specific to a stream.
     */
  _handleStreamError(streamId, error) {
    const receiver = this._receivers.get(streamId);
    if (receiver != null) {
      this._receivers.delete(streamId);
      receiver.onError(error);
    }
  }
}

function deserializePayload(serializers, frame) {
  return {
    data: serializers.data.deserialize(frame.data),
    metadata: serializers.metadata.deserialize(frame.metadata),
  };
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
var _ReactiveSocketTypes = __webpack_require__(36);

Object.keys(_ReactiveSocketTypes).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function() {
      return _ReactiveSocketTypes[key];
    },
  });
});
var _ReactiveStreamTypes = __webpack_require__(37);

Object.keys(_ReactiveStreamTypes).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function() {
      return _ReactiveStreamTypes[key];
    },
  });
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rsocket_core__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rsocket_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rsocket_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rsocket_websocket_client__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rsocket_websocket_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rsocket_websocket_client__);



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
  const url = "wss://rsocket-demo.herokuapp.com/rsocket";

  // Create an instance of a client
  const client = new __WEBPACK_IMPORTED_MODULE_0_rsocket_core__["RSocketClient"]({
    setup: {
      keepAlive: 60000,
      lifetime: 180000,
      dataMimeType: 'application/json',
      metadataMimeType: 'application/json'
    },
    transport: new __WEBPACK_IMPORTED_MODULE_1_rsocket_websocket_client___default.a({ url: url })
  });

  // Open the connection
  client.connect().subscribe({
    onComplete: socket => {
      socket.requestStream({
        data: null,
        metadata: null
      }).subscribe({
        onComplete: () => console.log('complete'),
        onError: error => console.error(error),
        onNext: payload => {
          addMessage(payload.data);
        },
        onSubscribe: subscription => {
          subscription.request(10000000);
        }
      });
    },
    onError: error => console.error(error),
    onSubscribe: cancel => {/* call cancel() to abort */}
  });
}

document.addEventListener('DOMContentLoaded', main);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object. The `callback` is invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `forEachObject` will not be
 * visited by `callback`. If the values of existing properties are changed, the
 * value passed to `callback` will be the value at the time `forEachObject`
 * visits them. Properties that are deleted before being visited are not
 * visited.
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 */

function forEachObject(object, callback, context) {
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      callback.call(context, object[name], name, object);
    }
  }
}

module.exports = forEachObject;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * Simple function for formatting strings.
 *
 * Replaces placeholders with values passed as extra arguments
 *
 * @param {string} format the base string
 * @param ...args the values to insert
 * @return {string} the replaced string
 */
function sprintf(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var index = 0;
  return format.replace(/%s/g, function (match) {
    return args[index++];
  });
}

module.exports = sprintf;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(23)
var ieee754 = __webpack_require__(24)
var isArray = __webpack_require__(25)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _nullthrows = __webpack_require__(15);
var _nullthrows2 = _interopRequireDefault(_nullthrows);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                       * An operator that acts like Array.map, applying a given function to
                                                                                                                                                                                                       * all values provided by its `Subscription` and passing the result to its
                                                                                                                                                                                                       * `Subscriber`.
                                                                                                                                                                                                       */
class FlowableMapOperator {
  constructor(subscriber, fn) {
    this._fn = fn;
    this._subscriber = subscriber;
    this._subscription = null;
  }

  onComplete() {
    this._subscriber.onComplete();
  }

  onError(error) {
    this._subscriber.onError(error);
  }

  onNext(t) {
    try {
      this._subscriber.onNext(this._fn(t));
    } catch (e) {
      (0, _nullthrows2.default)(this._subscription).cancel();
      this._subscriber.onError(e);
    }
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
    this._subscriber.onSubscribe(subscription);
  }
}
exports.default = FlowableMapOperator;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _nullthrows = __webpack_require__(15);
var _nullthrows2 = _interopRequireDefault(_nullthrows);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                       * An operator that requests a fixed number of values from its source
                                                                                                                                                                                                       * `Subscription` and forwards them to its `Subscriber`, cancelling the
                                                                                                                                                                                                       * subscription when the requested number of items has been reached.
                                                                                                                                                                                                       */
class FlowableTakeOperator {
  constructor(subscriber, toTake) {
    this._subscriber = subscriber;
    this._subscription = null;
    this._toTake = toTake;
  }

  onComplete() {
    this._subscriber.onComplete();
  }

  onError(error) {
    this._subscriber.onError(error);
  }

  onNext(t) {
    try {
      this._subscriber.onNext(t);
      if (--this._toTake === 0) {
        this._cancelAndComplete();
      }
    } catch (e) {
      (0, _nullthrows2.default)(this._subscription).cancel();
      this._subscriber.onError(e);
    }
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
    this._subscriber.onSubscribe(subscription);
    if (this._toTake <= 0) {
      this._cancelAndComplete();
    }
  }

  _cancelAndComplete() {
    (0, _nullthrows2.default)(this._subscription).cancel();
    this._subscriber.onComplete();
  }
}
exports.default = FlowableTakeOperator;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _warning = __webpack_require__(6);
var _warning2 = _interopRequireDefault(_warning);
var _emptyFunction = __webpack_require__(7);
var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                                                                                   * Represents a lazy computation that will either produce a value of type T
                                                                                                                                                                                                                   * or fail with an error. Calling `subscribe()` starts the
                                                                                                                                                                                                                   * computation and returns a subscription object, which has an `unsubscribe()`
                                                                                                                                                                                                                   * method that can be called to prevent completion/error callbacks from being
                                                                                                                                                                                                                   * invoked and, where supported, to also cancel the computation.
                                                                                                                                                                                                                   * Implementations may optionally implement cancellation; if they do not
                                                                                                                                                                                                                   * `cancel()` is a no-op.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Note: Unlike Promise, callbacks (onComplete/onError) may be invoked
                                                                                                                                                                                                                   * synchronously.
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * Example:
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * ```
                                                                                                                                                                                                                   * const value = new Single(subscriber => {
                                                                                                                                                                                                                   *   const id = setTimeout(
                                                                                                                                                                                                                   *     () => subscriber.onComplete('Hello!'),
                                                                                                                                                                                                                   *     250
                                                                                                                                                                                                                   *   );
                                                                                                                                                                                                                   *   // Optional: Call `onSubscribe` with a cancellation callback
                                                                                                                                                                                                                   *   subscriber.onSubscribe(() => clearTimeout(id));
                                                                                                                                                                                                                   * });
                                                                                                                                                                                                                   *
                                                                                                                                                                                                                   * // Start the computation. onComplete will be called after the timeout
                                                                                                                                                                                                                   * // with 'hello'  unless `cancel()` is called first.
                                                                                                                                                                                                                   * value.subscribe({
                                                                                                                                                                                                                   *   onComplete: value => console.log(value),
                                                                                                                                                                                                                   *   onError: error => console.error(error),
                                                                                                                                                                                                                   *   onSubscribe: cancel => ...
                                                                                                                                                                                                                   * });
                                                                                                                                                                                                                   * ```
                                                                                                                                                                                                                   */
class Single {
  static of(value) {
    return new Single(subscriber => {
      subscriber.onSubscribe();
      subscriber.onComplete(value);
    });
  }

  static error(error) {
    return new Single(subscriber => {
      subscriber.onSubscribe();
      subscriber.onError(error);
    });
  }

  constructor(source) {
    this._source = source;
  }

  subscribe(partialSubscriber) {
    const subscriber = new FutureSubscriber(partialSubscriber);
    try {
      this._source(subscriber);
    } catch (error) {
      subscriber.onError(error);
    }
  }

  flatMap(fn) {
    return new Single(subscriber => {
      let currentCancel;
      const cancel = () => {
        currentCancel && currentCancel();
        currentCancel = null;
      };
      this._source({
        onComplete: value => {
          fn(value).subscribe({
            onComplete: mapValue => {
              subscriber.onComplete(mapValue);
            },
            onError: error => subscriber.onError(error),
            onSubscribe: _cancel => {
              currentCancel = _cancel;
            },
          });
        },
        onError: error => subscriber.onError(error),
        onSubscribe: _cancel => {
          currentCancel = _cancel;
          subscriber.onSubscribe(cancel);
        },
      });
    });
  }

  /**
     * Return a new Single that resolves to the value of this Single applied to
     * the given mapping function.
     */
  map(fn) {
    return new Single(subscriber => {
      return this._source({
        onComplete: value => subscriber.onComplete(fn(value)),
        onError: error => subscriber.onError(error),
        onSubscribe: cancel => subscriber.onSubscribe(cancel),
      });
    });
  }

  then(successFn, errorFn) {
    this.subscribe({
      onComplete: successFn || _emptyFunction2.default,
      onError: errorFn || _emptyFunction2.default,
    });
  }
}
exports.default = Single;

/**
                               * @private
                               */
class FutureSubscriber {
  constructor(subscriber) {
    this._active = false;
    this._started = false;
    this._subscriber = subscriber || {};
  }

  onComplete(value) {
    if (!this._active) {
      (0, _warning2.default)(
        false,
        'Single: Invalid call to onComplete(): %s.',
        this._started
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );

      return;
    }
    this._active = false;
    this._started = true;
    try {
      if (this._subscriber.onComplete) {
        this._subscriber.onComplete(value);
      }
    } catch (error) {
      if (this._subscriber.onError) {
        this._subscriber.onError(error);
      }
    }
  }

  onError(error) {
    if (this._started && !this._active) {
      (0, _warning2.default)(
        false,
        'Single: Invalid call to onError(): %s.',
        this._active
          ? 'onComplete/onError was already called'
          : 'onSubscribe has not been called'
      );

      return;
    }
    this._active = false;
    this._started = true;
    this._subscriber.onError && this._subscriber.onError(error);
  }

  onSubscribe(cancel) {
    if (this._started) {
      (0, _warning2.default)(
        false,
        'Single: Invalid call to onSubscribe(): already called.'
      );
      return;
    }
    this._active = true;
    this._started = true;
    try {
      this._subscriber.onSubscribe &&
        this._subscriber.onSubscribe(() => {
          if (!this._active) {
            return;
          }
          this._active = false;
          cancel && cancel();
        });
    } catch (error) {
      this.onError(error);
    }
  }
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', {value: true});
var _warning = __webpack_require__(6);
var _warning2 = _interopRequireDefault(_warning);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

class FlowableProcessor {
  constructor(source, fn) {
    this._source = source;
    this._transformer = fn;
    this._done = false;
    this._mappers = []; //mappers for map function
  }

  onSubscribe(subscription) {
    this._subscription = subscription;
  }

  onNext(t) {
    if (!this._sink) {
      (0, _warning2.default)(
        'Warning, premature onNext for processor, dropping value'
      );
      return;
    }

    let val = t;
    if (this._transformer) {
      val = this._transformer(t);
    }
    const finalVal = this._mappers.reduce(
      (interimVal, mapper) => mapper(interimVal),
      val
    );

    this._sink.onNext(finalVal);
  }

  onError(error) {
    this._error = error;
    if (!this._sink) {
      (0, _warning2.default)(
        'Warning, premature onError for processor, marking complete/errored'
      );
    } else {
      this._sink.onError(error);
    }
  }

  onComplete() {
    this._done = true;
    if (!this._sink) {
      (0, _warning2.default)(
        'Warning, premature onError for processor, marking complete'
      );
    } else {
      this._sink.onComplete();
    }
  }

  subscribe(subscriber) {
    if (this._source.subscribe) {
      this._source.subscribe(this);
    }
    this._sink = subscriber;
    this._sink.onSubscribe(this);

    if (this._error) {
      this._sink.onError(this._error);
    } else if (this._done) {
      this._sink.onComplete();
    }
  }

  map(fn) {
    this._mappers.push(fn);
    return this;
  }

  request(n) {
    this._subscription && this._subscription.request(n);
  }

  cancel() {
    this._subscription && this._subscription.cancel();
  }
}
exports.default = FlowableProcessor;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});
exports.every = every;
var _Flowable = __webpack_require__(14);
var _Flowable2 = _interopRequireDefault(_Flowable);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
/**
                                                                                                                                                                                                      * Returns a Publisher that provides the current time (Date.now()) every `ms`
                                                                                                                                                                                                      * milliseconds.
                                                                                                                                                                                                      *
                                                                                                                                                                                                      * The timer is established on the first call to `request`: on each
                                                                                                                                                                                                      * interval a value is published if there are outstanding requests,
                                                                                                                                                                                                      * otherwise nothing occurs for that interval. This approach ensures
                                                                                                                                                                                                      * that the interval between `onNext` calls is as regular as possible
                                                                                                                                                                                                      * and means that overlapping `request` calls (ie calling again before
                                                                                                                                                                                                      * the previous values have been vended) behaves consistently.
                                                                                                                                                                                                      */ function every(
  ms
) {
  return new _Flowable2.default(subscriber => {
    let intervalId = null;
    let pending = 0;
    subscriber.onSubscribe({
      cancel: () => {
        if (intervalId != null) {
          clearInterval(intervalId);
          intervalId = null;
        }
      },
      request: n => {
        if (n < Number.MAX_SAFE_INTEGER) {
          pending += n;
        } else {
          pending = Number.MAX_SAFE_INTEGER;
        }
        if (intervalId != null) {
          return;
        }
        intervalId = setInterval(
          () => {
            if (pending > 0) {
              if (pending !== Number.MAX_SAFE_INTEGER) {
                pending--;
              }
              subscriber.onNext(Date.now());
            }
          },
          ms
        );
      },
    });
  });
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', {value: true});
exports.WellKnownMimeTypeEntry = (exports.ReservedMimeTypeEntry = (exports.ExplicitMimeTimeEntry = (exports.CompositeMetadata = undefined)));
exports.encodeAndAddCustomMetadata = encodeAndAddCustomMetadata;
exports.encodeAndAddWellKnownMetadata = encodeAndAddWellKnownMetadata;
exports.decodeMimeAndContentBuffersSlices = decodeMimeAndContentBuffersSlices;
exports.decodeMimeTypeFromMimeBuffer = decodeMimeTypeFromMimeBuffer;
exports.encodeCustomMetadataHeader = encodeCustomMetadataHeader;
exports.encodeWellKnownMetadataHeader = encodeWellKnownMetadataHeader;
var _LiteBuffer = __webpack_require__(8);
var _RSocketBufferUtils = __webpack_require__(3);
var _WellKnownMimeType = __webpack_require__(16);
var _WellKnownMimeType2 = _interopRequireDefault(_WellKnownMimeType);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
class CompositeMetadata {
  constructor(buffer) {
    this._buffer = buffer;
  }
  [Symbol.iterator]() {
    return entriesIterator(this._buffer);
  }
}
exports.CompositeMetadata = CompositeMetadata; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * Encode a new sub-metadata information into a composite metadata {@link CompositeByteBuf
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * buffer}, without checking if the {@link String} can be matched with a well known compressable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * mime type. Prefer using this method and {@link #encodeAndAddMetadata(CompositeByteBuf,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * ByteBufAllocator, WellKnownMimeType, ByteBuf)} if you know in advance whether or not the mime
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * is well known. Otherwise use {@link #encodeAndAddMetadataWithCompression(CompositeByteBuf,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * ByteBufAllocator, String, ByteBuf)}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @param compositeMetaData the buffer that will hold all composite metadata information.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @param allocator the {@link ByteBufAllocator} to use to create intermediate buffers as needed.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @param customMimeType the custom mime type to encode.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * @param metadata the metadata value to encode.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */ // see #encodeMetadataHeader(ByteBufAllocator, String, int)
function encodeAndAddCustomMetadata(
  compositeMetaData,
  customMimeType,
  metadata
) {
  return _LiteBuffer.LiteBuffer.concat([
    compositeMetaData,
    encodeCustomMetadataHeader(customMimeType, metadata.byteLength),
    metadata,
  ]);
} /**
                                                                                                                                                                                                                          * Encode a new sub-metadata information into a composite metadata {@link CompositeByteBuf
                                                                                                                                                                                                                           * buffer}.
                                                                                                                                                                                                                           *
                                                                                                                                                                                                                           * @param compositeMetaData the buffer that will hold all composite metadata information.
                                                                                                                                                                                                                           * @param allocator the {@link ByteBufAllocator} to use to create intermediate buffers as needed.
                                                                                                                                                                                                                           * @param knownMimeType the {@link WellKnownMimeType} to encode.
                                                                                                                                                                                                                           * @param metadata the metadata value to encode.
                                                                                                                                                                                                                           */ // see #encodeMetadataHeader(ByteBufAllocator, byte, int)
function encodeAndAddWellKnownMetadata(
  compositeMetaData,
  knownMimeType,
  metadata
) {
  let mimeTypeId;
  if (Number.isInteger(knownMimeType)) {
    mimeTypeId = knownMimeType;
  } else {
    mimeTypeId = knownMimeType.identifier;
  }
  return _LiteBuffer.LiteBuffer.concat([
    compositeMetaData,
    encodeWellKnownMetadataHeader(mimeTypeId, metadata.byteLength),
    metadata,
  ]);
}
/**
                                                                                                                                                                                                                                                                                                                                                           * Decode the next metadata entry (a mime header + content pair of {@link ByteBuf}) from a {@link
                                                                                                                                                                                                                                                                                                                                                           * ByteBuf} that contains at least enough bytes for one more such entry. These buffers are
                                                                                                                                                                                                                                                                                                                                                           * actually slices of the full metadata buffer, and this method doesn't move the full metadata
                                                                                                                                                                                                                                                                                                                                                           * buffer's {@link ByteBuf#readerIndex()}. As such, it requires the user to provide an {@code
                                                                                                                                                                                                                                                                                                                                                           * index} to read from. The next index is computed by calling {@link #computeNextEntryIndex(int,
                                                                                                                                                                                                                                                                                                                                                           * ByteBuf, ByteBuf)}. Size of the first buffer (the "header buffer") drives which decoding method
                                                                                                                                                                                                                                                                                                                                                           * should be further applied to it.
                                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                                           * <p>The header buffer is either:
                                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                                           * <ul>
                                                                                                                                                                                                                                                                                                                                                           *   <li>made up of a single byte: this represents an encoded mime id, which can be further
                                                                                                                                                                                                                                                                                                                                                           *       decoded using {@link #decodeMimeIdFromMimeBuffer(ByteBuf)}
                                                                                                                                                                                                                                                                                                                                                           *   <li>made up of 2 or more bytes: this represents an encoded mime String + its length, which
                                                                                                                                                                                                                                                                                                                                                           *       can be further decoded using {@link #decodeMimeTypeFromMimeBuffer(ByteBuf)}. Note the
                                                                                                                                                                                                                                                                                                                                                           *       encoded length, in the first byte, is skipped by this decoding method because the
                                                                                                                                                                                                                                                                                                                                                           *       remaining length of the buffer is that of the mime string.
                                                                                                                                                                                                                                                                                                                                                           * </ul>
                                                                                                                                                                                                                                                                                                                                                           *
                                                                                                                                                                                                                                                                                                                                                           * @param compositeMetadata the source {@link ByteBuf} that originally contains one or more
                                                                                                                                                                                                                                                                                                                                                           *     metadata entries
                                                                                                                                                                                                                                                                                                                                                           * @param entryIndex the {@link ByteBuf#readerIndex()} to start decoding from. original reader
                                                                                                                                                                                                                                                                                                                                                           *     index is kept on the source buffer
                                                                                                                                                                                                                                                                                                                                                           * @param retainSlices should produced metadata entry buffers {@link ByteBuf#slice() slices} be
                                                                                                                                                                                                                                                                                                                                                           *     {@link ByteBuf#retainedSlice() retained}?
                                                                                                                                                                                                                                                                                                                                                           * @return a {@link ByteBuf} array of length 2 containing the mime header buffer
                                                                                                                                                                                                                                                                                                                                                           *     <strong>slice</strong> and the content buffer <strong>slice</strong>, or one of the
                                                                                                                                                                                                                                                                                                                                                           *     zero-length error constant arrays
                                                                                                                                                                                                                                                                                                                                                           */ function decodeMimeAndContentBuffersSlices(
  compositeMetadata,
  entryIndex
) {
  const mimeIdOrLength = compositeMetadata.readInt8(entryIndex, 1);
  let mime;
  let toSkip = entryIndex;
  if (
    (mimeIdOrLength & STREAM_METADATA_KNOWN_MASK) === STREAM_METADATA_KNOWN_MASK
  ) {
    mime = compositeMetadata.slice(toSkip, toSkip + 1);
    toSkip += 1;
  } else {
    // M flag unset, remaining 7 bits are the length of the mime
    const mimeLength = (mimeIdOrLength & 0xff) + 1;
    if (compositeMetadata.byteLength > toSkip + mimeLength) {
      // need to be able to read an extra mimeLength bytes (we have already read one so byteLength should be strictly more)
      // here we need a way for the returned ByteBuf to differentiate between a
      // 1-byte length mime type and a 1 byte encoded mime id, preferably without
      // re-applying the byte mask. The easiest way is to include the initial byte
      // and have further decoding ignore the first byte. 1 byte buffer == id, 2+ byte
      // buffer == full mime string.
      mime = compositeMetadata.slice(toSkip, toSkip + mimeLength + 1); // we thus need to skip the bytes we just sliced, but not the flag/length byte
      // which was already skipped in initial read
      toSkip += mimeLength + 1;
    } else {
      throw new Error(
        'Metadata is malformed. Inappropriately formed Mime Length'
      );
    }
  }
  if (compositeMetadata.byteLength >= toSkip + 3) {
    // ensures the length medium can be read
    const metadataLength = (0, _RSocketBufferUtils.readUInt24BE)(
      compositeMetadata,
      toSkip
    );
    toSkip += 3;
    if (compositeMetadata.byteLength >= metadataLength + toSkip) {
      const metadata = compositeMetadata.slice(toSkip, toSkip + metadataLength);
      return [mime, metadata];
    } else {
      throw new Error(
        'Metadata is malformed. Inappropriately formed Metadata Length or malformed content'
      );
    }
  } else {
    throw new Error(
      'Metadata is malformed. Metadata Length is absent or malformed'
    );
  }
}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Decode a {@link CharSequence} custome mime type from a {@link ByteBuf}, assuming said buffer
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * properly contains such a mime type.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * <p>The buffer must at least have two readable bytes, which distinguishes it from the {@link
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * #decodeMimeIdFromMimeBuffer(ByteBuf) compressed id} case. The first byte is a size and the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * remaining bytes must correspond to the {@link CharSequence}, encoded fully in US_ASCII. As a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * result, the first byte can simply be skipped, and the remaining of the buffer be decoded to the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * mime type.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * <p>If the mime header buffer is less than 2 bytes long, returns {@code null}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @param flyweightMimeBuffer the mime header {@link ByteBuf} that contains length + custom mime
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *     type
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @return the decoded custom mime type, as a {@link CharSequence}, or null if the input is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     *     invalid
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @see #decodeMimeIdFromMimeBuffer(ByteBuf)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */ function decodeMimeTypeFromMimeBuffer(
  flyweightMimeBuffer
) {
  if (flyweightMimeBuffer.length < 2) {
    throw new Error('Unable to decode explicit MIME type');
  } // the encoded length is assumed to be kept at the start of the buffer
  // but also assumed to be irrelevant because the rest of the slice length
  // actually already matches _decoded_length
  return flyweightMimeBuffer.toString('ascii', 1);
}
function encodeCustomMetadataHeader(customMime, metadataLength) {
  const metadataHeader = (0, _RSocketBufferUtils.createBuffer)(
    4 + customMime.length
  ); // reserve 1 byte for the customMime length
  // /!\ careful not to read that first byte, which is random at this point
  // int writerIndexInitial = metadataHeader.writerIndex();
  // metadataHeader.writerIndex(writerIndexInitial + 1);
  // write the custom mime in UTF8 but validate it is all ASCII-compatible
  // (which produces the right result since ASCII chars are still encoded on 1 byte in UTF8)
  const customMimeLength = metadataHeader.write(customMime, 1);
  if (!isAscii(metadataHeader, 1)) {
    throw new Error('Custom mime type must be US_ASCII characters only');
  }
  if (customMimeLength < 1 || customMimeLength > 128) {
    throw new Error(
      'Custom mime type must have a strictly positive length that fits on 7 unsigned bits, ie 1-128'
    );
  } // encoded length is one less than actual length, since 0 is never a valid length, which gives
  // wider representation range
  metadataHeader.writeUInt8(customMimeLength - 1);
  (0, _RSocketBufferUtils.writeUInt24BE)(
    metadataHeader,
    metadataLength,
    customMimeLength + 1
  );
  return metadataHeader;
}
/**
                                                                                                                                                                        * Encode a {@link WellKnownMimeType well known mime type} and a metadata value length into a
                                                                                                                                                                        * newly allocated {@link ByteBuf}.
                                                                                                                                                                        *
                                                                                                                                                                        * <p>This compact representation encodes the mime type via its ID on a single byte, and the
                                                                                                                                                                        * unsigned value length on 3 additional bytes.
                                                                                                                                                                        *
                                                                                                                                                                        * @param allocator the {@link ByteBufAllocator} to use to create the buffer.
                                                                                                                                                                        * @param mimeType a byte identifier of a {@link WellKnownMimeType} to encode.
                                                                                                                                                                        * @param metadataLength the metadata length to append to the buffer as an unsigned 24 bits
                                                                                                                                                                        *     integer.
                                                                                                                                                                        * @return the encoded mime and metadata length information
                                                                                                                                                                        */ function encodeWellKnownMetadataHeader(
  mimeType,
  metadataLength
) {
  const buffer = _LiteBuffer.LiteBuffer.alloc(4);
  buffer.writeUInt8(mimeType | STREAM_METADATA_KNOWN_MASK);
  (0, _RSocketBufferUtils.writeUInt24BE)(buffer, metadataLength, 1);
  return buffer;
}
function* entriesIterator(buffer) {
  const length = buffer.byteLength;
  let entryIndex = 0;
  while (entryIndex < length) {
    const headerAndData = decodeMimeAndContentBuffersSlices(buffer, entryIndex);
    const header = headerAndData[0];
    const data = headerAndData[1];
    entryIndex = computeNextEntryIndex(entryIndex, header, data);
    if (!isWellKnownMimeType(header)) {
      const typeString = decodeMimeTypeFromMimeBuffer(header);
      if (!typeString) {
        throw new Error('MIME type cannot be null');
      }
      yield new ExplicitMimeTimeEntry(data, typeString);
      continue;
    }
    const id = decodeMimeIdFromMimeBuffer(header);
    const type = _WellKnownMimeType2.default.fromIdentifier(id);
    if (_WellKnownMimeType.UNKNOWN_RESERVED_MIME_TYPE === type) {
      yield new ReservedMimeTypeEntry(data, id);
      continue;
    }
    yield new WellKnownMimeTypeEntry(data, type);
  }
}
class ExplicitMimeTimeEntry {
  constructor(content, type) {
    this._content = content;
    this._type = type;
  }
  get content() {
    return this._content;
  }
  get mimeType() {
    return this._type;
  }
}
exports.ExplicitMimeTimeEntry = ExplicitMimeTimeEntry;
class ReservedMimeTypeEntry {
  constructor(content, type) {
    this._content = content;
    this._type = type;
  }
  get content() {
    return this._content;
  }
  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * {@inheritDoc} Since this entry represents a compressed id that couldn't be decoded, this is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * always {@code null}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */ get mimeType() {
    return undefined;
  }
  /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * Returns the reserved, but unknown {@link WellKnownMimeType} for this entry. Range is 0-127
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * (inclusive).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    * @return the reserved, but unknown {@link WellKnownMimeType} for this entry
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    */ get type() {
    return this._type;
  }
}
exports.ReservedMimeTypeEntry = ReservedMimeTypeEntry;

class WellKnownMimeTypeEntry {
  constructor(content, type) {
    this._content = content;
    this._type = type;
  }

  get content() {
    return this._content;
  }

  get mimeType() {
    return this._type.string;
  }

  /**
     * Returns the {@link WellKnownMimeType} for this entry.
     *
     * @return the {@link WellKnownMimeType} for this entry
     */
  get type() {
    return this._type;
  }
}
exports.WellKnownMimeTypeEntry = WellKnownMimeTypeEntry;

/**
                                                              * Decode a {@code byte} compressed mime id from a {@link ByteBuf}, assuming said buffer properly
                                                              * contains such an id.
                                                              *
                                                              * <p>The buffer must have exactly one readable byte, which is assumed to have been tested for
                                                              * mime id encoding via the {@link #STREAM_METADATA_KNOWN_MASK} mask ({@code firstByte &
                                                              * STREAM_METADATA_KNOWN_MASK) == STREAM_METADATA_KNOWN_MASK}).
                                                              *
                                                              * <p>If there is no readable byte, the negative identifier of {@link
                                                               * WellKnownMimeType#UNPARSEABLE_MIME_TYPE} is returned.
                                                               *
                                                               * @param mimeBuffer the buffer that should next contain the compressed mime id byte
                                                               * @return the compressed mime id, between 0 and 127, or a negative id if the input is invalid
                                                               * @see #decodeMimeTypeFromMimeBuffer(ByteBuf)
                                                               */
function decodeMimeIdFromMimeBuffer(mimeBuffer) {
  if (!isWellKnownMimeType(mimeBuffer)) {
    return _WellKnownMimeType.UNPARSEABLE_MIME_TYPE.identifier;
  }
  return mimeBuffer.readInt8() & STREAM_METADATA_LENGTH_MASK;
}

function computeNextEntryIndex(currentEntryIndex, headerSlice, contentSlice) {
  return currentEntryIndex +
    headerSlice.byteLength + // this includes the mime length byte
    3 + // 3 bytes of the content length, which are excluded from the slice
    contentSlice.byteLength;
}

function isWellKnownMimeType(header) {
  return header.byteLength === 1;
}

const STREAM_METADATA_KNOWN_MASK = 0x80; // 1000 0000
const STREAM_METADATA_LENGTH_MASK = 0x7f; // 0111 1111

function isAscii(buffer, offset) {
  let isAscii = true;
  for (let i = offset, length = buffer.length; i < length; i++) {
    if (buffer[i] > 127) {
      isAscii = false;
      break;
    }
  }

  return isAscii;
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _rsocketFlowable = __webpack_require__(2);
var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = __webpack_require__(1);
var _RSocketVersion = __webpack_require__(33);
var _RSocketMachine = __webpack_require__(17);
var _RSocketLease = __webpack_require__(5);

var _RSocketSerialization = __webpack_require__(4);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                             * RSocketClient: A client in an RSocket connection that will communicates with
                                                                                                                                                             * the peer via the given transport client. Provides methods for establishing a
                                                                                                                                                             * connection and initiating the RSocket interactions:
                                                                                                                                                             * - fireAndForget()
                                                                                                                                                             * - requestResponse()
                                                                                                                                                             * - requestStream()
                                                                                                                                                             * - requestChannel()
                                                                                                                                                             * - metadataPush()
                                                                                                                                                             */
class RSocketClient {
  constructor(config) {
    this._checkConfig(config);
    this._cancel = null;
    this._config = config;
    this._connection = null;
    this._socket = null;
  }

  close() {
    this._config.transport.close();
  }

  connect() {
    (0, _invariant2.default)(
      !this._connection,
      'RSocketClient: Unexpected call to connect(), already connected.'
    );

    this._connection = new _rsocketFlowable.Single(subscriber => {
      const transport = this._config.transport;
      let subscription;
      transport.connectionStatus().subscribe({
        onNext: status => {
          if (status.kind === 'CONNECTED') {
            subscription && subscription.cancel();
            subscriber.onComplete(
              new RSocketClientSocket(this._config, transport)
            );
          } else if (status.kind === 'ERROR') {
            subscription && subscription.cancel();
            subscriber.onError(status.error);
          } else if (status.kind === 'CLOSED') {
            subscription && subscription.cancel();
            subscriber.onError(new Error('RSocketClient: Connection closed.'));
          }
        },
        onSubscribe: _subscription => {
          subscriber.onSubscribe(() => _subscription.cancel());
          subscription = _subscription;
          subscription.request(Number.MAX_SAFE_INTEGER);
        },
      });

      transport.connect();
    });
    return this._connection;
  }

  _checkConfig(config) {
    const setup = config.setup;
    const keepAlive = setup && setup.keepAlive;
    // wrap in try catch since in 'strict' mode the access to an unexciting window will throw
    // the ReferenceError: window is not defined exception
    try {
      const navigator = window && window.navigator;
      if (
        keepAlive > 30000 &&
        navigator &&
        navigator.userAgent &&
        (navigator.userAgent.includes('Trident') ||
          navigator.userAgent.includes('Edg'))
      ) {
        console.warn(
          'rsocket-js: Due to a browser bug, Internet Explorer and Edge users may experience WebSocket instability with keepAlive values longer than 30 seconds.'
        );
      }
    } catch (e) {
      // ignore the error since it means that the code is running in non browser environment
    }
  }
}
exports.default = RSocketClient;

/**
                                      * @private
                                      */
class RSocketClientSocket {
  constructor(config, connection) {
    let requesterLeaseHandler;
    let responderLeaseHandler;

    const leasesSupplier = config.leases;
    if (leasesSupplier) {
      const lease = leasesSupplier();
      requesterLeaseHandler = new _RSocketLease.RequesterLeaseHandler(
        lease._receiver
      );
      responderLeaseHandler = new _RSocketLease.ResponderLeaseHandler(
        lease._sender,
        lease._stats
      );
    }
    const {keepAlive, lifetime} = config.setup;

    this._machine = (0, _RSocketMachine.createClientMachine)(
      connection,
      subscriber => connection.receive().subscribe(subscriber),
      lifetime,
      config.serializers,
      config.responder,
      config.errorHandler,
      requesterLeaseHandler,
      responderLeaseHandler
    );

    // Send SETUP
    connection.sendOne(this._buildSetupFrame(config));

    // Send KEEPALIVE frames
    const keepAliveFrames = (0, _rsocketFlowable.every)(keepAlive).map(() => ({
      data: null,
      flags: _RSocketFrame.FLAGS.RESPOND,
      lastReceivedPosition: 0,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.KEEPALIVE,
    }));

    connection.send(keepAliveFrames);
  }

  fireAndForget(payload) {
    this._machine.fireAndForget(payload);
  }

  requestResponse(payload) {
    return this._machine.requestResponse(payload);
  }

  requestStream(payload) {
    return this._machine.requestStream(payload);
  }

  requestChannel(payloads) {
    return this._machine.requestChannel(payloads);
  }

  metadataPush(payload) {
    return this._machine.metadataPush(payload);
  }

  close() {
    this._machine.close();
  }

  connectionStatus() {
    return this._machine.connectionStatus();
  }

  availability() {
    return this._machine.availability();
  }

  _buildSetupFrame(config) {
    const {
      dataMimeType,
      keepAlive,
      lifetime,
      metadataMimeType,
      payload,
    } = config.setup;

    const serializers = config.serializers ||
      _RSocketSerialization.IdentitySerializers;
    const data = payload ? serializers.data.serialize(payload.data) : undefined;
    const metadata = payload
      ? serializers.metadata.serialize(payload.metadata)
      : undefined;
    let flags = 0;
    if (metadata !== undefined) {
      flags |= _RSocketFrame.FLAGS.METADATA;
    }
    return {
      data,
      dataMimeType,
      flags: flags | (config.leases ? _RSocketFrame.FLAGS.LEASE : 0),
      keepAlive,
      lifetime,
      majorVersion: _RSocketVersion.MAJOR_VERSION,
      metadata,
      metadataMimeType,
      minorVersion: _RSocketVersion.MINOR_VERSION,
      resumeToken: null,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.SETUP,
    };
  }
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

const MAJOR_VERSION = (exports.MAJOR_VERSION = 1);
const MINOR_VERSION = (exports.MINOR_VERSION = 0);


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _rsocketFlowable = __webpack_require__(2);
var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = __webpack_require__(1);

var _RSocketSerialization = __webpack_require__(4);
var _RSocketMachine = __webpack_require__(17);
var _RSocketLease = __webpack_require__(5);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                             * RSocketServer: A server in an RSocket connection that accepts connections
                                                                                                                                             * from peers via the given transport server.
                                                                                                                                             */
class RSocketServer {
  constructor(config) {
    this._handleTransportComplete = () => {
      this._handleTransportError(
        new Error('RSocketServer: Connection closed unexpectedly.')
      );
    };
    this._handleTransportError = error => {
      this._connections.forEach(connection => {
        // TODO: Allow passing in error
        connection.close();
      });
    };
    this._handleTransportConnection = connection => {
      const swapper = new SubscriberSwapper();
      let subscription;
      connection.receive().subscribe(
        swapper.swap({
          onError: error => console.error(error),
          onNext: frame => {
            switch (frame.type) {
              case _RSocketFrame.FRAME_TYPES.RESUME:
                connection.sendOne({
                  code: _RSocketFrame.ERROR_CODES.REJECTED_RESUME,
                  flags: 0,
                  message: 'RSocketServer: RESUME not supported.',
                  streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                  type: _RSocketFrame.FRAME_TYPES.ERROR,
                });

                connection.close();
                break;
              case _RSocketFrame.FRAME_TYPES.SETUP:
                if (this._setupLeaseError(frame)) {
                  connection.sendOne({
                    code: _RSocketFrame.ERROR_CODES.INVALID_SETUP,
                    flags: 0,
                    message: 'RSocketServer: LEASE not supported.',
                    streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                    type: _RSocketFrame.FRAME_TYPES.ERROR,
                  });

                  connection.close();
                  break;
                }
                const serializers = this._getSerializers();

                let requesterLeaseHandler;
                let responderLeaseHandler;

                const leasesSupplier = this._config.leases;
                if (leasesSupplier) {
                  const lease = leasesSupplier();
                  requesterLeaseHandler = new _RSocketLease.RequesterLeaseHandler(
                    lease._receiver
                  );

                  responderLeaseHandler = new _RSocketLease.ResponderLeaseHandler(
                    lease._sender,
                    lease._stats
                  );
                }
                const serverMachine = (0, _RSocketMachine.createServerMachine)(
                  connection,
                  subscriber => {
                    swapper.swap(subscriber);
                  },
                  frame.lifetime,
                  serializers,
                  this._config.errorHandler,
                  requesterLeaseHandler,
                  responderLeaseHandler
                );

                try {
                  const requestHandler = this._config.getRequestHandler(
                    serverMachine,
                    deserializePayload(serializers, frame)
                  );

                  serverMachine.setRequestHandler(requestHandler);
                  this._connections.add(serverMachine);
                } catch (error) {
                  connection.sendOne({
                    code: _RSocketFrame.ERROR_CODES.REJECTED_SETUP,
                    flags: 0,
                    message: 'Application rejected setup, reason: ' +
                      error.message,
                    streamId: _RSocketFrame.CONNECTION_STREAM_ID,
                    type: _RSocketFrame.FRAME_TYPES.ERROR,
                  });

                  connection.close();
                }

                // TODO(blom): We should subscribe to connection status
                // so we can remove the connection when it goes away
                break;
              default:
                (0, _invariant2.default)(
                  false,
                  'RSocketServer: Expected first frame to be SETUP or RESUME, ' +
                    'got `%s`.',
                  (0, _RSocketFrame.getFrameTypeName)(frame.type)
                );
            }
          },
          onSubscribe: _subscription => {
            subscription = _subscription;
            subscription.request(1);
          },
        })
      );
    };
    this._config = config;
    this._connections = new Set();
    this._started = false;
    this._subscription = null;
  }
  start() {
    (0, _invariant2.default)(
      !this._started,
      'RSocketServer: Unexpected call to start(), already started.'
    );
    this._started = true;
    this._config.transport.start().subscribe({
      onComplete: this._handleTransportComplete,
      onError: this._handleTransportError,
      onNext: this._handleTransportConnection,
      onSubscribe: subscription => {
        this._subscription = subscription;
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }
  stop() {
    if (this._subscription) {
      this._subscription.cancel();
    }
    this._config.transport.stop();
    this._handleTransportError(
      new Error('RSocketServer: Connection terminated via stop().')
    );
  }

  _getSerializers() {
    return this._config.serializers ||
      _RSocketSerialization.IdentitySerializers;
  }

  _setupLeaseError(frame) {
    const clientLeaseEnabled = (frame.flags & _RSocketFrame.FLAGS.LEASE) ===
      _RSocketFrame.FLAGS.LEASE;
    const serverLeaseEnabled = this._config.leases;
    return clientLeaseEnabled && !serverLeaseEnabled;
  }
}
exports.default = RSocketServer;

class SubscriberSwapper {
  constructor(target) {
    this._target = target;
  }

  swap(next) {
    this._target = next;
    if (this._subscription) {
      this._target.onSubscribe && this._target.onSubscribe(this._subscription);
    }
    return this;
  }

  onComplete() {
    (0, _invariant2.default)(this._target, 'must have target');
    this._target.onComplete && this._target.onComplete();
  }
  onError(error) {
    (0, _invariant2.default)(this._target, 'must have target');
    this._target.onError && this._target.onError(error);
  }
  onNext(value) {
    (0, _invariant2.default)(this._target, 'must have target');
    this._target.onNext && this._target.onNext(value);
  }
  onSubscribe(subscription) {
    (0, _invariant2.default)(this._target, 'must have target');
    this._subscription = subscription;
    this._target.onSubscribe && this._target.onSubscribe(subscription);
  }
}

function deserializePayload(serializers, frame) {
  return {
    data: serializers.data.deserialize(frame.data),
    metadata: serializers.metadata.deserialize(frame.metadata),
  };
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _rsocketFlowable = __webpack_require__(2);
var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
var _RSocketFrame = __webpack_require__(1);

var _rsocketTypes = __webpack_require__(18);

var _RSocketBinaryFraming = __webpack_require__(10);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                                             * NOTE: This implementation conforms to an upcoming version of the RSocket protocol
                                                                                                                                                             *       and will not work with version 1.0 servers.
                                                                                                                                                             *
                                                                                                                                                             * An implementation of the DuplexConnection interface that supports automatic
                                                                                                                                                             * resumption per the RSocket protocol.
                                                                                                                                                             *
                                                                                                                                                             * # Example
                                                                                                                                                             *
                                                                                                                                                             * Create a client instance:
                                                                                                                                                             * ```
                                                                                                                                                             * const client = new RSocketClient({
                                                                                                                                                             *   ...,
                                                                                                                                                             *   transport: new RSocketResumableTransport(
                                                                                                                                                             *     () => new RSocketWebSocketClient(...), // provider for low-level transport instances
                                                                                                                                                             *     {
                                                                                                                                                             *       bufferSize: 10, // max number of sent & pending frames to buffer before failing
                                                                                                                                                             *       resumeToken: 'abc123', // string to uniquely identify the session across connections
                                                                                                                                                             *     }
                                                                                                                                                             *   ),
                                                                                                                                                             * })
                                                                                                                                                             *
                                                                                                                                                             * Open the connection. After this if the connection dies it will be auto-resumed:
                                                                                                                                                             * ```
                                                                                                                                                             * client.connect().subscribe(...);
                                                                                                                                                             * ```
                                                                                                                                                             *
                                                                                                                                                             * Optionally, subscribe to the status of the connection:
                                                                                                                                                             * ```
                                                                                                                                                             * client.connectionStatus().subscribe(...);
                                                                                                                                                             * ```
                                                                                                                                                             *
                                                                                                                                                             * # Implementation Notes
                                                                                                                                                             *
                                                                                                                                                             * This transport maintains:
                                                                                                                                                             * - _currentConnection: a current low-level transport, which is null when not
                                                                                                                                                             *   connected
                                                                                                                                                             * - _sentFrames: a buffer of frames written to a low-level transport (which
                                                                                                                                                             *   may or may not have been received by the server)
                                                                                                                                                             * - _pendingFrames: a buffer of frames not yet written to the low-level
                                                                                                                                                             *   connection, because they were sent while not connected.
                                                                                                                                                             *
                                                                                                                                                             * The initial connection is simple: connect using the low-level transport and
                                                                                                                                                             * flush any _pendingFrames (write them and add them to _sentFrames).
                                                                                                                                                             *
                                                                                                                                                             * Thereafter if the low-level transport drops, this transport attempts resumption.
                                                                                                                                                             * It obtains a fresh low-level transport from the given transport `source`
                                                                                                                                                             * and attempts to connect. Once connected, it sends a RESUME frame and waits.
                                                                                                                                                             * If RESUME_OK is received, _sentFrames and _pendingFrames are adjusted such
                                                                                                                                                             * that:
                                                                                                                                                             * - any frames the server has received are removed from _sentFrames
                                                                                                                                                             * - the remaining frames are merged (in correct order) into _pendingFrames
                                                                                                                                                             *
                                                                                                                                                             * Then the connection proceeds as above, where all pending frames are flushed.
                                                                                                                                                             * If anything other than RESUME_OK is received, resumption is considered to
                                                                                                                                                             * have failed and the connection is set to the ERROR status.
                                                                                                                                                             */
class RSocketResumableTransport {
  constructor(source, options, encoders) {
    (0, _invariant2.default)(
      options.bufferSize >= 0,
      'RSocketResumableTransport: bufferSize option must be >= 0, got `%s`.',
      options.bufferSize
    );

    this._encoders = encoders;
    this._bufferSize = options.bufferSize;
    this._sentFramesSize = 0;
    this._position = {
      client: 0,
      server: 0,
    };

    this._currentConnection = null;
    this._statusSubscription = null;
    this._receiveSubscription = null;
    this._receivers = new Set();
    this._resumeToken = options.resumeToken;
    this._sessionTimeoutMillis = options.sessionDurationSeconds * 1000;
    this._sessionTimeoutHandle = null;
    this._senders = new Set();
    this._sentFrames = [];
    this._setupFrame = null;
    this._source = source;
    this._status = _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED;
    this._statusSubscribers = new Set();
  }

  close() {
    this._close();
  }

  connect() {
    (0, _invariant2.default)(
      !this._isTerminated(),
      'RSocketResumableTransport: Cannot connect(), connection terminated (%s: %s).',
      this._status.kind,
      this._status.kind === 'ERROR' ? this._status.error.message : 'no message'
    );

    try {
      this._disconnect();
      this._currentConnection = null;
      this._receiveSubscription = null;
      this._statusSubscription = null;
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTING);
      const connection = this._source();
      connection.connectionStatus().subscribe({
        onNext: status => {
          if (status.kind === this._status.kind) {
            return;
          }
          if (status.kind === 'CONNECTED') {
            if (this._sessionTimeoutHandle) {
              clearTimeout(this._sessionTimeoutHandle);
              this._sessionTimeoutHandle = null;
            }
            //Setup
            if (this._setupFrame == null) {
              this._handleConnected(connection);
              //Resume
            } else {
              this._handleResume(connection);
            }
          } else if (this._isTerminationStatus(status)) {
            if (!this._sessionTimeoutHandle) {
              this._sessionTimeoutHandle = setTimeout(
                () => this._close(this._resumeTimeoutError()),
                this._sessionTimeoutMillis
              );
            }
            this._disconnect();
            this._setConnectionStatus(
              _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED
            );
          }
        },
        onSubscribe: subscription => {
          this._statusSubscription = subscription;
          subscription.request(Number.MAX_SAFE_INTEGER);
        },
      });

      connection.connect();
    } catch (error) {
      this._close(error);
    }
  }

  connectionStatus() {
    return new _rsocketFlowable.Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: () => {
          this._statusSubscribers.delete(subscriber);
        },
        request: () => {
          this._statusSubscribers.add(subscriber);
          subscriber.onNext(this._status);
        },
      });
    });
  }

  receive() {
    return new _rsocketFlowable.Flowable(subject => {
      let added = false;
      subject.onSubscribe({
        cancel: () => {
          this._receivers.delete(subject);
        },
        request: () => {
          if (!added) {
            added = true;
            this._receivers.add(subject);
          }
        },
      });
    });
  }

  sendOne(frame) {
    try {
      this._writeFrame(frame);
    } catch (error) {
      this._close(error);
    }
  }

  send(frames) {
    let subscription;
    frames.subscribe({
      onComplete: () => {
        subscription && this._senders.delete(subscription);
      },
      onError: error => {
        subscription && this._senders.delete(subscription);
        this._close(error);
      },
      onNext: frame => this._writeFrame(frame),
      onSubscribe: _subscription => {
        subscription = _subscription;
        this._senders.add(subscription);
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }

  _close(error) {
    if (this._isTerminated()) {
      return;
    }
    if (error) {
      this._setConnectionStatus({error, kind: 'ERROR'});
    } else {
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CLOSED);
    }
    const receivers = this._receivers;
    receivers.forEach(r => r.onComplete());
    receivers.clear();

    const senders = this._senders;
    senders.forEach(s => s.cancel());
    senders.clear();
    this._sentFrames.length = 0;

    this._disconnect();
  }

  _disconnect() {
    if (this._statusSubscription) {
      this._statusSubscription.cancel();
      this._statusSubscription = null;
    }
    if (this._receiveSubscription) {
      this._receiveSubscription.cancel();
      this._receiveSubscription = null;
    }
    if (this._currentConnection) {
      this._currentConnection.close();
      this._currentConnection = null;
    }
  }

  _handleConnected(connection) {
    this._currentConnection = connection;
    this._flushFrames();
    this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTED);
    connection.receive().subscribe({
      onNext: frame => {
        try {
          this._receiveFrame(frame);
        } catch (error) {
          this._close(error);
        }
      },
      onSubscribe: subscription => {
        this._receiveSubscription = subscription;
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }

  _handleResume(connection) {
    connection.receive().take(1).subscribe({
      onNext: frame => {
        try {
          if (frame.type === _RSocketFrame.FRAME_TYPES.RESUME_OK) {
            const {clientPosition} = frame;
            // clientPosition indicates which frames the server is missing:
            // - anything after that still needs to be sent
            // - anything before that can be discarded
            if (clientPosition < this._position.client) {
              // Invalid RESUME_OK frame: server asked for an older
              // client frame than is available
              this._close(this._nonResumableStateError());
              return;
            }
            // remove tail frames of total length = remoteImpliedPos-localPos
            let removeSize = clientPosition - this._position.client;
            let index = 0;
            while (removeSize > 0) {
              const frameSize = this._onReleasedTailFrame(
                this._sentFrames[index]
              );

              if (!frameSize) {
                this._close(this._absentLengthError(frame));
                return;
              }
              removeSize -= frameSize;
              index++;
            }
            if (removeSize !== 0) {
              this._close(this._inconsistentImpliedPositionError());
              return;
            }
            // Drop sent frames that the server has received
            if (index > 0) {
              this._sentFrames.splice(0, index);
            }
            // Continue connecting, which will flush pending frames
            this._handleConnected(connection);
          } else {
            const error = frame.type === _RSocketFrame.FRAME_TYPES.ERROR
              ? (0, _RSocketFrame.createErrorFromFrame)(frame)
              : new Error(
                  'RSocketResumableTransport: Resumption failed for an ' +
                    'unspecified reason.'
                );

            this._close(error);
          }
        } catch (error) {
          this._close(error);
        }
      },
      onSubscribe: subscription => {
        this._receiveSubscription = subscription;
        subscription.request(1);
      },
    });

    const setupFrame = this._setupFrame;
    (0, _invariant2.default)(
      setupFrame,
      'RSocketResumableTransport: Cannot resume, setup frame has not been sent.'
    );

    connection.sendOne({
      clientPosition: this._position.client,
      flags: 0,
      majorVersion: setupFrame.majorVersion,
      minorVersion: setupFrame.minorVersion,
      resumeToken: this._resumeToken,
      serverPosition: this._position.server,
      streamId: _RSocketFrame.CONNECTION_STREAM_ID,
      type: _RSocketFrame.FRAME_TYPES.RESUME,
    });
  }

  _absentLengthError(frame) {
    return new Error(
      'RSocketResumableTransport: absent frame.length for type ' + frame.type
    );
  }

  _inconsistentImpliedPositionError() {
    return new Error(
      'RSocketResumableTransport: local frames are inconsistent with remote implied position'
    );
  }

  _nonResumableStateError() {
    return new Error(
      'RSocketResumableTransport: resumption failed, server is ' +
        'missing frames that are no longer in the client buffer.'
    );
  }

  _resumeTimeoutError() {
    return new Error('RSocketResumableTransport: resumable session timed out');
  }

  _isTerminated() {
    return this._isTerminationStatus(this._status);
  }

  _isTerminationStatus(status) {
    const kind = status.kind;
    return kind === 'CLOSED' || kind === 'ERROR';
  }

  _setConnectionStatus(status) {
    if (status.kind === this._status.kind) {
      return;
    }
    this._status = status;
    this._statusSubscribers.forEach(subscriber => subscriber.onNext(status));
  }

  _receiveFrame(frame) {
    if ((0, _RSocketFrame.isResumePositionFrameType)(frame.type)) {
      this._position.server += frame.length;
    }
    // TODO: trim _sentFrames on KEEPALIVE frame
    this._receivers.forEach(subscriber => subscriber.onNext(frame));
  }

  _flushFrames() {
    this._sentFrames.forEach(frame => {
      const connection = this._currentConnection;
      if (connection) {
        connection.sendOne(frame);
      }
    });
  }

  _onReleasedTailFrame(frame) {
    const removedFrameSize = frame.length;
    if (removedFrameSize) {
      this._sentFramesSize -= removedFrameSize;
      this._position.client += removedFrameSize;
      return removedFrameSize;
    }
  }

  _writeFrame(frame) {
    // Ensure that SETUP frames contain the resume token
    if (frame.type === _RSocketFrame.FRAME_TYPES.SETUP) {
      frame = Object.assign({}, frame, {
        flags: frame.flags | _RSocketFrame.FLAGS.RESUME_ENABLE, // eslint-disable-line no-bitwise
        resumeToken: this._resumeToken,
      });

      this._setupFrame = frame; // frame can only be a SetupFrame
    }
    frame.length = (0, _RSocketBinaryFraming.sizeOfFrame)(
      frame,
      this._encoders
    );
    // If connected, immediately write frames to the low-level transport
    // and consider them "sent". The resumption protocol will figure out
    // which frames may not have been received and recover.
    if ((0, _RSocketFrame.isResumePositionFrameType)(frame.type)) {
      let available = this._bufferSize - this._sentFramesSize;
      const frameSize = frame.length;
      if (frameSize) {
        // remove tail until there is space for new frame
        while (available < frameSize) {
          const removedFrame = this._sentFrames.shift();
          if (removedFrame) {
            const removedFrameSize = this._onReleasedTailFrame(removedFrame);
            if (!removedFrameSize) {
              this._close(this._absentLengthError(frame));
              return;
            }
            available += removedFrameSize;
          } else {
            break;
          }
        }
        if (available >= frameSize) {
          this._sentFrames.push(frame);
          this._sentFramesSize += frameSize;
        } else {
          this._position.client += frameSize;
        }
      } else {
        this._close(this._absentLengthError(frame));
        return;
      }
    }
    const currentConnection = this._currentConnection;
    if (currentConnection) {
      currentConnection.sendOne(frame);
    }
  }
}
exports.default = RSocketResumableTransport;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true,
}); /** Copyright (c) Facebook, Inc. and its affiliates.
                                                                                 *
                                                                                 * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                 * you may not use this file except in compliance with the License.
                                                                                 * You may obtain a copy of the License at
                                                                                 *
                                                                                 *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                 *
                                                                                 * Unless required by applicable law or agreed to in writing, software
                                                                                 * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                 * See the License for the specific language governing permissions and
                                                                                 * limitations under the License.
                                                                                 *
                                                                                 * 
                                                                                 */

/**
                                                                             * Represents a network connection with input/output used by a ReactiveSocket to
                                                                             * send/receive data.
                                                                             */ const CONNECTION_STATUS = (exports.CONNECTION_STATUS = {
  CLOSED: Object.freeze({kind: 'CLOSED'}),
  CONNECTED: Object.freeze({kind: 'CONNECTED'}),
  CONNECTING: Object.freeze({kind: 'CONNECTING'}),
  NOT_CONNECTED: Object.freeze({kind: 'NOT_CONNECTED'}),
}); /**
                                                                  * Describes the connection status of a ReactiveSocket/DuplexConnection.
                                                                  * - NOT_CONNECTED: no connection established or pending.
                                                                  * - CONNECTING: when `connect()` has been called but a connection is not yet
                                                                  *   established.
                                                                  * - CONNECTED: when a connection is established.
                                                                  * - CLOSED: when the connection has been explicitly closed via `close()`.
                                                                  * - ERROR: when the connection has been closed for any other reason.
                                                                  */ /**
                                                                      * A contract providing different interaction models per the [ReactiveSocket protocol]
                                                                      (https://github.com/ReactiveSocket/reactivesocket/blob/master/Protocol.md).
                                                                      */ /**
                                                                          * A single unit of data exchanged between the peers of a `ReactiveSocket`.
                                                                          */

/**
                                                              * A type that can be written to a buffer.
                                                              */

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore

// prettier-ignore


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _RSocketWebSocketClient = __webpack_require__(39);
var _RSocketWebSocketClient2 = _interopRequireDefault(_RSocketWebSocketClient);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}
exports.default = _RSocketWebSocketClient2.default;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** Copyright (c) Facebook, Inc. and its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 
 */


Object.defineProperty(exports, '__esModule', {value: true});

var _invariant = __webpack_require__(0);
var _invariant2 = _interopRequireDefault(_invariant);
var _rsocketFlowable = __webpack_require__(2);
var _rsocketCore = __webpack_require__(9);

var _rsocketTypes = __webpack_require__(18);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
                                                                                                                                            * A WebSocket transport client for use in browser environments.
                                                                                                                                            */
class RSocketWebSocketClient {
  constructor(options, encoders) {
    this._handleClosed = e => {
      this._close(
        new Error(
          e.reason || 'RSocketWebSocketClient: Socket closed unexpectedly.'
        )
      );
    };
    this._handleError = e => {
      this._close(e.error);
    };
    this._handleOpened = () => {
      this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTED);
    };
    this._handleMessage = message => {
      try {
        const frame = this._readFrame(message);
        this._receivers.forEach(subscriber => subscriber.onNext(frame));
      } catch (error) {
        this._close(error);
      }
    };
    this._encoders = encoders;
    this._options = options;
    this._receivers = new Set();
    this._senders = new Set();
    this._socket = null;
    this._status = _rsocketTypes.CONNECTION_STATUS.NOT_CONNECTED;
    this._statusSubscribers = new Set();
  }
  close() {
    this._close();
  }
  connect() {
    (0, _invariant2.default)(
      this._status.kind === 'NOT_CONNECTED',
      'RSocketWebSocketClient: Cannot connect(), a connection is already ' +
        'established.'
    );
    this._setConnectionStatus(_rsocketTypes.CONNECTION_STATUS.CONNECTING);
    const wsCreator = this._options.wsCreator;
    const url = this._options.url;
    this._socket = wsCreator ? wsCreator(url) : new WebSocket(url);
    const socket = this._socket;
    socket.binaryType = 'arraybuffer';
    socket.addEventListener('close', this._handleClosed);
    socket.addEventListener('error', this._handleError);
    socket.addEventListener('open', this._handleOpened);
    socket.addEventListener('message', this._handleMessage);
  }
  connectionStatus() {
    return new _rsocketFlowable.Flowable(subscriber => {
      subscriber.onSubscribe({
        cancel: () => {
          this._statusSubscribers.delete(subscriber);
        },
        request: () => {
          this._statusSubscribers.add(subscriber);
          subscriber.onNext(this._status);
        },
      });
    });
  }
  receive() {
    return new _rsocketFlowable.Flowable(subject => {
      subject.onSubscribe({
        cancel: () => {
          this._receivers.delete(subject);
        },
        request: () => {
          this._receivers.add(subject);
        },
      });
    });
  }
  sendOne(frame) {
    this._writeFrame(frame);
  }
  send(frames) {
    let subscription;
    frames.subscribe({
      onComplete: () => {
        subscription && this._senders.delete(subscription);
      },
      onError: error => {
        subscription && this._senders.delete(subscription);
        this._close(error);
      },
      onNext: frame => this._writeFrame(frame),
      onSubscribe: _subscription => {
        subscription = _subscription;
        this._senders.add(subscription);
        subscription.request(Number.MAX_SAFE_INTEGER);
      },
    });
  }
  _close(error) {
    if (this._status.kind === 'CLOSED' || this._status.kind === 'ERROR') {
      // already closed
      return;
    }
    const status = error
      ? {error, kind: 'ERROR'}
      : _rsocketTypes.CONNECTION_STATUS.CLOSED;
    this._setConnectionStatus(status);
    this._receivers.forEach(subscriber => {
      if (error) {
        subscriber.onError(error);
      } else {
        subscriber.onComplete();
      }
    });
    this._receivers.clear();
    this._senders.forEach(subscription => subscription.cancel());
    this._senders.clear();
    const socket = this._socket;
    if (socket) {
      socket.removeEventListener('close', this._handleClosed);
      socket.removeEventListener('error', this._handleClosed);
      socket.removeEventListener('open', this._handleOpened);
      socket.removeEventListener('message', this._handleMessage);
      socket.close();
      this._socket = null;
    }
  }
  _setConnectionStatus(status) {
    this._status = status;
    this._statusSubscribers.forEach(subscriber => subscriber.onNext(status));
  }
  _readFrame(message) {
    const buffer = (0, _rsocketCore.toBuffer)(message.data);
    const frame = this._options.lengthPrefixedFrames
      ? (0, _rsocketCore.deserializeFrameWithLength)(buffer, this._encoders)
      : (0, _rsocketCore.deserializeFrame)(buffer, this._encoders);
    if (false) {
      if (this._options.debug) {
        console.log(printFrame(frame));
      }
    }
    return frame;
  }

  _writeFrame(frame) {
    try {
      if (false) {
        if (this._options.debug) {
          console.log(printFrame(frame));
        }
      }
      const buffer = this._options.lengthPrefixedFrames
        ? (0, _rsocketCore.serializeFrameWithLength)(frame, this._encoders)
        : (0, _rsocketCore.serializeFrame)(frame, this._encoders);
      (0, _invariant2.default)(
        this._socket,
        'RSocketWebSocketClient: Cannot send frame, not connected.'
      );

      this._socket.send(buffer);
    } catch (error) {
      this._close(error);
    }
  }
}
exports.default = RSocketWebSocketClient;


/***/ })
/******/ ]);
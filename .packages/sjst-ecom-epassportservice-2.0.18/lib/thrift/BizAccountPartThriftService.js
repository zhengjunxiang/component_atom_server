//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var BizAccountPartThriftServiceModel_ttypes = require('./BizAccountPartThriftServiceModel_types')
var CommonModel_ttypes = require('./CommonModel_types')


var ttypes = require('./BizAccountPartThriftService_types');
//HELPER FUNCTIONS AND STRUCTURES

var BizAccountPartThriftService_nextPartKeyFromPool_args = function(args) {
  this.appkey = null;
  if (args) {
    if (args.appkey !== undefined) {
      this.appkey = args.appkey;
    }
  }
};
BizAccountPartThriftService_nextPartKeyFromPool_args.prototype = {};
BizAccountPartThriftService_nextPartKeyFromPool_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.appkey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BizAccountPartThriftService_nextPartKeyFromPool_args.prototype.write = function(output) {
  output.writeStructBegin('BizAccountPartThriftService_nextPartKeyFromPool_args');
  if (this.appkey !== null && this.appkey !== undefined) {
    output.writeFieldBegin('appkey', Thrift.Type.STRING, 1);
    output.writeString(this.appkey);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountPartThriftService_nextPartKeyFromPool_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BizAccountPartThriftService_nextPartKeyFromPool_result.prototype = {};
BizAccountPartThriftService_nextPartKeyFromPool_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new BizAccountPartThriftServiceModel_ttypes.NextPartKeyFromPoolResp();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BizAccountPartThriftService_nextPartKeyFromPool_result.prototype.write = function(output) {
  output.writeStructBegin('BizAccountPartThriftService_nextPartKeyFromPool_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountPartThriftService_addPartKeyToPool_args = function(args) {
  this.appkey = null;
  this.partKey = null;
  if (args) {
    if (args.appkey !== undefined) {
      this.appkey = args.appkey;
    }
    if (args.partKey !== undefined) {
      this.partKey = args.partKey;
    }
  }
};
BizAccountPartThriftService_addPartKeyToPool_args.prototype = {};
BizAccountPartThriftService_addPartKeyToPool_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.appkey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.partKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BizAccountPartThriftService_addPartKeyToPool_args.prototype.write = function(output) {
  output.writeStructBegin('BizAccountPartThriftService_addPartKeyToPool_args');
  if (this.appkey !== null && this.appkey !== undefined) {
    output.writeFieldBegin('appkey', Thrift.Type.STRING, 1);
    output.writeString(this.appkey);
    output.writeFieldEnd();
  }
  if (this.partKey !== null && this.partKey !== undefined) {
    output.writeFieldBegin('partKey', Thrift.Type.STRING, 2);
    output.writeString(this.partKey);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountPartThriftService_addPartKeyToPool_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BizAccountPartThriftService_addPartKeyToPool_result.prototype = {};
BizAccountPartThriftService_addPartKeyToPool_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new CommonModel_ttypes.CommonResp();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BizAccountPartThriftService_addPartKeyToPool_result.prototype.write = function(output) {
  output.writeStructBegin('BizAccountPartThriftService_addPartKeyToPool_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountPartThriftServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
BizAccountPartThriftServiceClient.prototype = {};
BizAccountPartThriftServiceClient.prototype.seqid = function() { return this._seqid; }
BizAccountPartThriftServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
BizAccountPartThriftServiceClient.prototype.nextPartKeyFromPool = function(appkey, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_nextPartKeyFromPool(appkey);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_nextPartKeyFromPool(appkey);
  }
};

BizAccountPartThriftServiceClient.prototype.send_nextPartKeyFromPool = function(appkey) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('nextPartKeyFromPool', Thrift.MessageType.CALL, this.seqid());
  var args = new BizAccountPartThriftService_nextPartKeyFromPool_args();
  args.appkey = appkey;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BizAccountPartThriftServiceClient.prototype.recv_nextPartKeyFromPool = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BizAccountPartThriftService_nextPartKeyFromPool_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('nextPartKeyFromPool failed: unknown result');
};
BizAccountPartThriftServiceClient.prototype.addPartKeyToPool = function(appkey, partKey, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_addPartKeyToPool(appkey, partKey);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_addPartKeyToPool(appkey, partKey);
  }
};

BizAccountPartThriftServiceClient.prototype.send_addPartKeyToPool = function(appkey, partKey) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('addPartKeyToPool', Thrift.MessageType.CALL, this.seqid());
  var args = new BizAccountPartThriftService_addPartKeyToPool_args();
  args.appkey = appkey;
  args.partKey = partKey;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BizAccountPartThriftServiceClient.prototype.recv_addPartKeyToPool = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BizAccountPartThriftService_addPartKeyToPool_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('addPartKeyToPool failed: unknown result');
};
var BizAccountPartThriftServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
BizAccountPartThriftServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}

BizAccountPartThriftServiceProcessor.prototype.process_nextPartKeyFromPool = function(seqid, input, output) {
  var args = new BizAccountPartThriftService_nextPartKeyFromPool_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.nextPartKeyFromPool.length === 1) {
    Q.fcall(this._handler.nextPartKeyFromPool, args.appkey)
      .then(function(result) {
        var result = new BizAccountPartThriftService_nextPartKeyFromPool_result({success: result});
        output.writeMessageBegin("nextPartKeyFromPool", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BizAccountPartThriftService_nextPartKeyFromPool_result(err);
        output.writeMessageBegin("nextPartKeyFromPool", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.nextPartKeyFromPool(args.appkey,  function (err, result) {
      var result = new BizAccountPartThriftService_nextPartKeyFromPool_result((err != null ? err : {success: result}));
      output.writeMessageBegin("nextPartKeyFromPool", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BizAccountPartThriftServiceProcessor.prototype.process_addPartKeyToPool = function(seqid, input, output) {
  var args = new BizAccountPartThriftService_addPartKeyToPool_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.addPartKeyToPool.length === 2) {
    Q.fcall(this._handler.addPartKeyToPool, args.appkey, args.partKey)
      .then(function(result) {
        var result = new BizAccountPartThriftService_addPartKeyToPool_result({success: result});
        output.writeMessageBegin("addPartKeyToPool", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BizAccountPartThriftService_addPartKeyToPool_result(err);
        output.writeMessageBegin("addPartKeyToPool", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.addPartKeyToPool(args.appkey, args.partKey,  function (err, result) {
      var result = new BizAccountPartThriftService_addPartKeyToPool_result((err != null ? err : {success: result}));
      output.writeMessageBegin("addPartKeyToPool", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}


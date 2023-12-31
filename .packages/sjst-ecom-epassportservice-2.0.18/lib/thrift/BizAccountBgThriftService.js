//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var CommonModel_ttypes = require('./CommonModel_types')
var BizAccountBgThriftServiceModel_ttypes = require('./BizAccountBgThriftServiceModel_types')
var BizAccountPhoneThriftServiceModel_ttypes = require('./BizAccountPhoneThriftServiceModel_types')


var ttypes = require('./BizAccountBgThriftService_types');
//HELPER FUNCTIONS AND STRUCTURES

var BizAccountBgThriftService_filterBizAccountByBgSource_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined) {
      this.req = args.req;
    }
  }
};
BizAccountBgThriftService_filterBizAccountByBgSource_args.prototype = {};
BizAccountBgThriftService_filterBizAccountByBgSource_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new BizAccountBgThriftServiceModel_ttypes.FilterBizAccountByBgSourceReq();
        this.req.read(input);
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

BizAccountBgThriftService_filterBizAccountByBgSource_args.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_filterBizAccountByBgSource_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_filterBizAccountByBgSource_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BizAccountBgThriftService_filterBizAccountByBgSource_result.prototype = {};
BizAccountBgThriftService_filterBizAccountByBgSource_result.prototype.read = function(input) {
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
        this.success = new BizAccountBgThriftServiceModel_ttypes.FilterBizAccountByBgSourceResp();
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

BizAccountBgThriftService_filterBizAccountByBgSource_result.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_filterBizAccountByBgSource_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_filterBizAccountByBgSources_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined) {
      this.req = args.req;
    }
  }
};
BizAccountBgThriftService_filterBizAccountByBgSources_args.prototype = {};
BizAccountBgThriftService_filterBizAccountByBgSources_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new BizAccountBgThriftServiceModel_ttypes.FilterBizAccountByBgSourcesReq();
        this.req.read(input);
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

BizAccountBgThriftService_filterBizAccountByBgSources_args.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_filterBizAccountByBgSources_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_filterBizAccountByBgSources_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BizAccountBgThriftService_filterBizAccountByBgSources_result.prototype = {};
BizAccountBgThriftService_filterBizAccountByBgSources_result.prototype.read = function(input) {
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
        this.success = new BizAccountBgThriftServiceModel_ttypes.FilterBizAccountByBgSourceResp();
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

BizAccountBgThriftService_filterBizAccountByBgSources_result.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_filterBizAccountByBgSources_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_bind_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined) {
      this.req = args.req;
    }
  }
};
BizAccountBgThriftService_bind_args.prototype = {};
BizAccountBgThriftService_bind_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new BizAccountBgThriftServiceModel_ttypes.BindReq();
        this.req.read(input);
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

BizAccountBgThriftService_bind_args.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_bind_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_bind_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BizAccountBgThriftService_bind_result.prototype = {};
BizAccountBgThriftService_bind_result.prototype.read = function(input) {
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
        this.success = new BizAccountBgThriftServiceModel_ttypes.BindResp();
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

BizAccountBgThriftService_bind_result.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_bind_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_searchBizAccountInBg_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined) {
      this.req = args.req;
    }
  }
};
BizAccountBgThriftService_searchBizAccountInBg_args.prototype = {};
BizAccountBgThriftService_searchBizAccountInBg_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new BizAccountBgThriftServiceModel_ttypes.SearchBizAccountInBgReq();
        this.req.read(input);
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

BizAccountBgThriftService_searchBizAccountInBg_args.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_searchBizAccountInBg_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_searchBizAccountInBg_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BizAccountBgThriftService_searchBizAccountInBg_result.prototype = {};
BizAccountBgThriftService_searchBizAccountInBg_result.prototype.read = function(input) {
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
        this.success = new BizAccountBgThriftServiceModel_ttypes.SearchBizAccountInBgResp();
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

BizAccountBgThriftService_searchBizAccountInBg_result.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_searchBizAccountInBg_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_searchBizAccountBg_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined) {
      this.req = args.req;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field req is unset!');
    }
  }
};
BizAccountBgThriftService_searchBizAccountBg_args.prototype = {};
BizAccountBgThriftService_searchBizAccountBg_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new BizAccountPhoneThriftServiceModel_ttypes.BizAcctIdsReq();
        this.req.read(input);
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

BizAccountBgThriftService_searchBizAccountBg_args.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_searchBizAccountBg_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_searchBizAccountBg_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BizAccountBgThriftService_searchBizAccountBg_result.prototype = {};
BizAccountBgThriftService_searchBizAccountBg_result.prototype.read = function(input) {
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
        this.success = new BizAccountBgThriftServiceModel_ttypes.SearchBizAccountBgResp();
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

BizAccountBgThriftService_searchBizAccountBg_result.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_searchBizAccountBg_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_unbind_args = function(args) {
  this.req = null;
  if (args) {
    if (args.req !== undefined) {
      this.req = args.req;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field req is unset!');
    }
  }
};
BizAccountBgThriftService_unbind_args.prototype = {};
BizAccountBgThriftService_unbind_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.req = new BizAccountBgThriftServiceModel_ttypes.UnbindReq();
        this.req.read(input);
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

BizAccountBgThriftService_unbind_args.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_unbind_args');
  if (this.req !== null && this.req !== undefined) {
    output.writeFieldBegin('req', Thrift.Type.STRUCT, 1);
    this.req.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftService_unbind_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
BizAccountBgThriftService_unbind_result.prototype = {};
BizAccountBgThriftService_unbind_result.prototype.read = function(input) {
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

BizAccountBgThriftService_unbind_result.prototype.write = function(output) {
  output.writeStructBegin('BizAccountBgThriftService_unbind_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAccountBgThriftServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
BizAccountBgThriftServiceClient.prototype = {};
BizAccountBgThriftServiceClient.prototype.seqid = function() { return this._seqid; }
BizAccountBgThriftServiceClient.prototype.new_seqid = function() { return this._seqid += 1; }
BizAccountBgThriftServiceClient.prototype.filterBizAccountByBgSource = function(req, callback) {
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
    this.send_filterBizAccountByBgSource(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_filterBizAccountByBgSource(req);
  }
};

BizAccountBgThriftServiceClient.prototype.send_filterBizAccountByBgSource = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('filterBizAccountByBgSource', Thrift.MessageType.CALL, this.seqid());
  var args = new BizAccountBgThriftService_filterBizAccountByBgSource_args();
  args.req = req;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BizAccountBgThriftServiceClient.prototype.recv_filterBizAccountByBgSource = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BizAccountBgThriftService_filterBizAccountByBgSource_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('filterBizAccountByBgSource failed: unknown result');
};
BizAccountBgThriftServiceClient.prototype.filterBizAccountByBgSources = function(req, callback) {
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
    this.send_filterBizAccountByBgSources(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_filterBizAccountByBgSources(req);
  }
};

BizAccountBgThriftServiceClient.prototype.send_filterBizAccountByBgSources = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('filterBizAccountByBgSources', Thrift.MessageType.CALL, this.seqid());
  var args = new BizAccountBgThriftService_filterBizAccountByBgSources_args();
  args.req = req;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BizAccountBgThriftServiceClient.prototype.recv_filterBizAccountByBgSources = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BizAccountBgThriftService_filterBizAccountByBgSources_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('filterBizAccountByBgSources failed: unknown result');
};
BizAccountBgThriftServiceClient.prototype.bind = function(req, callback) {
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
    this.send_bind(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_bind(req);
  }
};

BizAccountBgThriftServiceClient.prototype.send_bind = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('bind', Thrift.MessageType.CALL, this.seqid());
  var args = new BizAccountBgThriftService_bind_args();
  args.req = req;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BizAccountBgThriftServiceClient.prototype.recv_bind = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BizAccountBgThriftService_bind_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('bind failed: unknown result');
};
BizAccountBgThriftServiceClient.prototype.searchBizAccountInBg = function(req, callback) {
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
    this.send_searchBizAccountInBg(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_searchBizAccountInBg(req);
  }
};

BizAccountBgThriftServiceClient.prototype.send_searchBizAccountInBg = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('searchBizAccountInBg', Thrift.MessageType.CALL, this.seqid());
  var args = new BizAccountBgThriftService_searchBizAccountInBg_args();
  args.req = req;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BizAccountBgThriftServiceClient.prototype.recv_searchBizAccountInBg = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BizAccountBgThriftService_searchBizAccountInBg_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('searchBizAccountInBg failed: unknown result');
};
BizAccountBgThriftServiceClient.prototype.searchBizAccountBg = function(req, callback) {
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
    this.send_searchBizAccountBg(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_searchBizAccountBg(req);
  }
};

BizAccountBgThriftServiceClient.prototype.send_searchBizAccountBg = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('searchBizAccountBg', Thrift.MessageType.CALL, this.seqid());
  var args = new BizAccountBgThriftService_searchBizAccountBg_args();
  args.req = req;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BizAccountBgThriftServiceClient.prototype.recv_searchBizAccountBg = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BizAccountBgThriftService_searchBizAccountBg_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('searchBizAccountBg failed: unknown result');
};
BizAccountBgThriftServiceClient.prototype.unbind = function(req, callback) {
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
    this.send_unbind(req);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_unbind(req);
  }
};

BizAccountBgThriftServiceClient.prototype.send_unbind = function(req) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('unbind', Thrift.MessageType.CALL, this.seqid());
  var args = new BizAccountBgThriftService_unbind_args();
  args.req = req;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

BizAccountBgThriftServiceClient.prototype.recv_unbind = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new BizAccountBgThriftService_unbind_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('unbind failed: unknown result');
};
var BizAccountBgThriftServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler
}
BizAccountBgThriftServiceProcessor.prototype.process = function(input, output) {
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

BizAccountBgThriftServiceProcessor.prototype.process_filterBizAccountByBgSource = function(seqid, input, output) {
  var args = new BizAccountBgThriftService_filterBizAccountByBgSource_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.filterBizAccountByBgSource.length === 1) {
    Q.fcall(this._handler.filterBizAccountByBgSource, args.req)
      .then(function(result) {
        var result = new BizAccountBgThriftService_filterBizAccountByBgSource_result({success: result});
        output.writeMessageBegin("filterBizAccountByBgSource", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BizAccountBgThriftService_filterBizAccountByBgSource_result(err);
        output.writeMessageBegin("filterBizAccountByBgSource", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.filterBizAccountByBgSource(args.req,  function (err, result) {
      var result = new BizAccountBgThriftService_filterBizAccountByBgSource_result((err != null ? err : {success: result}));
      output.writeMessageBegin("filterBizAccountByBgSource", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BizAccountBgThriftServiceProcessor.prototype.process_filterBizAccountByBgSources = function(seqid, input, output) {
  var args = new BizAccountBgThriftService_filterBizAccountByBgSources_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.filterBizAccountByBgSources.length === 1) {
    Q.fcall(this._handler.filterBizAccountByBgSources, args.req)
      .then(function(result) {
        var result = new BizAccountBgThriftService_filterBizAccountByBgSources_result({success: result});
        output.writeMessageBegin("filterBizAccountByBgSources", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BizAccountBgThriftService_filterBizAccountByBgSources_result(err);
        output.writeMessageBegin("filterBizAccountByBgSources", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.filterBizAccountByBgSources(args.req,  function (err, result) {
      var result = new BizAccountBgThriftService_filterBizAccountByBgSources_result((err != null ? err : {success: result}));
      output.writeMessageBegin("filterBizAccountByBgSources", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BizAccountBgThriftServiceProcessor.prototype.process_bind = function(seqid, input, output) {
  var args = new BizAccountBgThriftService_bind_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.bind.length === 1) {
    Q.fcall(this._handler.bind, args.req)
      .then(function(result) {
        var result = new BizAccountBgThriftService_bind_result({success: result});
        output.writeMessageBegin("bind", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BizAccountBgThriftService_bind_result(err);
        output.writeMessageBegin("bind", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.bind(args.req,  function (err, result) {
      var result = new BizAccountBgThriftService_bind_result((err != null ? err : {success: result}));
      output.writeMessageBegin("bind", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BizAccountBgThriftServiceProcessor.prototype.process_searchBizAccountInBg = function(seqid, input, output) {
  var args = new BizAccountBgThriftService_searchBizAccountInBg_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.searchBizAccountInBg.length === 1) {
    Q.fcall(this._handler.searchBizAccountInBg, args.req)
      .then(function(result) {
        var result = new BizAccountBgThriftService_searchBizAccountInBg_result({success: result});
        output.writeMessageBegin("searchBizAccountInBg", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BizAccountBgThriftService_searchBizAccountInBg_result(err);
        output.writeMessageBegin("searchBizAccountInBg", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.searchBizAccountInBg(args.req,  function (err, result) {
      var result = new BizAccountBgThriftService_searchBizAccountInBg_result((err != null ? err : {success: result}));
      output.writeMessageBegin("searchBizAccountInBg", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BizAccountBgThriftServiceProcessor.prototype.process_searchBizAccountBg = function(seqid, input, output) {
  var args = new BizAccountBgThriftService_searchBizAccountBg_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.searchBizAccountBg.length === 1) {
    Q.fcall(this._handler.searchBizAccountBg, args.req)
      .then(function(result) {
        var result = new BizAccountBgThriftService_searchBizAccountBg_result({success: result});
        output.writeMessageBegin("searchBizAccountBg", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BizAccountBgThriftService_searchBizAccountBg_result(err);
        output.writeMessageBegin("searchBizAccountBg", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.searchBizAccountBg(args.req,  function (err, result) {
      var result = new BizAccountBgThriftService_searchBizAccountBg_result((err != null ? err : {success: result}));
      output.writeMessageBegin("searchBizAccountBg", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}

BizAccountBgThriftServiceProcessor.prototype.process_unbind = function(seqid, input, output) {
  var args = new BizAccountBgThriftService_unbind_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.unbind.length === 1) {
    Q.fcall(this._handler.unbind, args.req)
      .then(function(result) {
        var result = new BizAccountBgThriftService_unbind_result({success: result});
        output.writeMessageBegin("unbind", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result = new BizAccountBgThriftService_unbind_result(err);
        output.writeMessageBegin("unbind", Thrift.MessageType.REPLY, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.unbind(args.req,  function (err, result) {
      var result = new BizAccountBgThriftService_unbind_result((err != null ? err : {success: result}));
      output.writeMessageBegin("unbind", Thrift.MessageType.REPLY, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
}


//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var Status = module.exports.Status = function(args) {
  this.code = null;
  this.message = null;
  if (args) {
    if (args.code !== undefined) {
      this.code = args.code;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field code is unset!');
    }
    if (args.message !== undefined) {
      this.message = args.message;
    }
  }
};
Status.prototype = {};
Status.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
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

Status.prototype.write = function(output) {
  output.writeStructBegin('Status');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PageModel = module.exports.PageModel = function(args) {
  this.page = null;
  this.size = null;
  if (args) {
    if (args.page !== undefined) {
      this.page = args.page;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field page is unset!');
    }
    if (args.size !== undefined) {
      this.size = args.size;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field size is unset!');
    }
  }
};
PageModel.prototype = {};
PageModel.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.page = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.size = input.readI32();
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

PageModel.prototype.write = function(output) {
  output.writeStructBegin('PageModel');
  if (this.page !== null && this.page !== undefined) {
    output.writeFieldBegin('page', Thrift.Type.I32, 1);
    output.writeI32(this.page);
    output.writeFieldEnd();
  }
  if (this.size !== null && this.size !== undefined) {
    output.writeFieldBegin('size', Thrift.Type.I32, 2);
    output.writeI32(this.size);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CommonResp = module.exports.CommonResp = function(args) {
  this.status = null;
  if (args) {
    if (args.status !== undefined) {
      this.status = args.status;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field status is unset!');
    }
  }
};
CommonResp.prototype = {};
CommonResp.prototype.read = function(input) {
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
        this.status = new ttypes.Status();
        this.status.read(input);
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

CommonResp.prototype.write = function(output) {
  output.writeStructBegin('CommonResp');
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRUCT, 1);
    this.status.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UtmParamTO = module.exports.UtmParamTO = function(args) {
  this.appKey = null;
  this.uuid = null;
  this.ip = null;
  this.sdkVersion = null;
  this.fingerprint = null;
  this.platform = null;
  this.version = null;
  if (args) {
    if (args.appKey !== undefined) {
      this.appKey = args.appKey;
    }
    if (args.uuid !== undefined) {
      this.uuid = args.uuid;
    }
    if (args.ip !== undefined) {
      this.ip = args.ip;
    }
    if (args.sdkVersion !== undefined) {
      this.sdkVersion = args.sdkVersion;
    }
    if (args.fingerprint !== undefined) {
      this.fingerprint = args.fingerprint;
    }
    if (args.platform !== undefined) {
      this.platform = args.platform;
    }
    if (args.version !== undefined) {
      this.version = args.version;
    }
  }
};
UtmParamTO.prototype = {};
UtmParamTO.prototype.read = function(input) {
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
        this.appKey = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.uuid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.ip = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.sdkVersion = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.fingerprint = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.platform = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.STRING) {
        this.version = input.readString();
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

UtmParamTO.prototype.write = function(output) {
  output.writeStructBegin('UtmParamTO');
  if (this.appKey !== null && this.appKey !== undefined) {
    output.writeFieldBegin('appKey', Thrift.Type.STRING, 1);
    output.writeString(this.appKey);
    output.writeFieldEnd();
  }
  if (this.uuid !== null && this.uuid !== undefined) {
    output.writeFieldBegin('uuid', Thrift.Type.STRING, 2);
    output.writeString(this.uuid);
    output.writeFieldEnd();
  }
  if (this.ip !== null && this.ip !== undefined) {
    output.writeFieldBegin('ip', Thrift.Type.STRING, 3);
    output.writeString(this.ip);
    output.writeFieldEnd();
  }
  if (this.sdkVersion !== null && this.sdkVersion !== undefined) {
    output.writeFieldBegin('sdkVersion', Thrift.Type.STRING, 4);
    output.writeString(this.sdkVersion);
    output.writeFieldEnd();
  }
  if (this.fingerprint !== null && this.fingerprint !== undefined) {
    output.writeFieldBegin('fingerprint', Thrift.Type.STRING, 5);
    output.writeString(this.fingerprint);
    output.writeFieldEnd();
  }
  if (this.platform !== null && this.platform !== undefined) {
    output.writeFieldBegin('platform', Thrift.Type.STRING, 6);
    output.writeString(this.platform);
    output.writeFieldEnd();
  }
  if (this.version !== null && this.version !== undefined) {
    output.writeFieldBegin('version', Thrift.Type.STRING, 7);
    output.writeString(this.version);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};


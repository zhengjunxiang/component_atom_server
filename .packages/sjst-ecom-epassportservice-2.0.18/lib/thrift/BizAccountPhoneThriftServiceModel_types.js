//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var CommonModel_ttypes = require('./CommonModel_types')


var ttypes = module.exports = {};
var BizAcctIdsReq = module.exports.BizAcctIdsReq = function(args) {
  this.ids = null;
  if (args) {
    if (args.ids !== undefined) {
      this.ids = args.ids;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field ids is unset!');
    }
  }
};
BizAcctIdsReq.prototype = {};
BizAcctIdsReq.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.ids = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readI32();
          this.ids.push(elem6);
        }
        input.readListEnd();
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

BizAcctIdsReq.prototype.write = function(output) {
  output.writeStructBegin('BizAcctIdsReq');
  if (this.ids !== null && this.ids !== undefined) {
    output.writeFieldBegin('ids', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.I32, this.ids.length);
    for (var iter7 in this.ids)
    {
      if (this.ids.hasOwnProperty(iter7))
      {
        iter7 = this.ids[iter7];
        output.writeI32(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAcctPhoneTO = module.exports.BizAcctPhoneTO = function(args) {
  this.phone = null;
  this.interCode = null;
  this.contactPhone = null;
  this.contactInterCode = null;
  if (args) {
    if (args.phone !== undefined) {
      this.phone = args.phone;
    }
    if (args.interCode !== undefined) {
      this.interCode = args.interCode;
    }
    if (args.contactPhone !== undefined) {
      this.contactPhone = args.contactPhone;
    }
    if (args.contactInterCode !== undefined) {
      this.contactInterCode = args.contactInterCode;
    }
  }
};
BizAcctPhoneTO.prototype = {};
BizAcctPhoneTO.prototype.read = function(input) {
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
        this.phone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.interCode = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.contactPhone = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.contactInterCode = input.readString();
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

BizAcctPhoneTO.prototype.write = function(output) {
  output.writeStructBegin('BizAcctPhoneTO');
  if (this.phone !== null && this.phone !== undefined) {
    output.writeFieldBegin('phone', Thrift.Type.STRING, 1);
    output.writeString(this.phone);
    output.writeFieldEnd();
  }
  if (this.interCode !== null && this.interCode !== undefined) {
    output.writeFieldBegin('interCode', Thrift.Type.STRING, 2);
    output.writeString(this.interCode);
    output.writeFieldEnd();
  }
  if (this.contactPhone !== null && this.contactPhone !== undefined) {
    output.writeFieldBegin('contactPhone', Thrift.Type.STRING, 3);
    output.writeString(this.contactPhone);
    output.writeFieldEnd();
  }
  if (this.contactInterCode !== null && this.contactInterCode !== undefined) {
    output.writeFieldBegin('contactInterCode', Thrift.Type.STRING, 4);
    output.writeString(this.contactInterCode);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAcctPhoneResp = module.exports.BizAcctPhoneResp = function(args) {
  this.status = null;
  this.phoneMap = null;
  if (args) {
    if (args.status !== undefined) {
      this.status = args.status;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field status is unset!');
    }
    if (args.phoneMap !== undefined) {
      this.phoneMap = args.phoneMap;
    }
  }
};
BizAcctPhoneResp.prototype = {};
BizAcctPhoneResp.prototype.read = function(input) {
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
        this.status = new CommonModel_ttypes.Status();
        this.status.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size8 = 0;
        var _rtmp312;
        this.phoneMap = {};
        var _ktype9 = 0;
        var _vtype10 = 0;
        _rtmp312 = input.readMapBegin();
        _ktype9 = _rtmp312.ktype;
        _vtype10 = _rtmp312.vtype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var key14 = null;
          var val15 = null;
          key14 = input.readI32();
          val15 = new ttypes.BizAcctPhoneTO();
          val15.read(input);
          this.phoneMap[key14] = val15;
        }
        input.readMapEnd();
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

BizAcctPhoneResp.prototype.write = function(output) {
  output.writeStructBegin('BizAcctPhoneResp');
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRUCT, 1);
    this.status.write(output);
    output.writeFieldEnd();
  }
  if (this.phoneMap !== null && this.phoneMap !== undefined) {
    output.writeFieldBegin('phoneMap', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.I32, Thrift.Type.STRUCT, Thrift.objectLength(this.phoneMap));
    for (var kiter16 in this.phoneMap)
    {
      if (this.phoneMap.hasOwnProperty(kiter16))
      {
        var viter17 = this.phoneMap[kiter16];
        output.writeI32(kiter16);
        viter17.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};


//
// Autogenerated by Thrift Compiler (0.9.2)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var CommonModel_ttypes = require('./CommonModel_types')
var BizAccountModel_ttypes = require('./BizAccountModel_types')


var ttypes = module.exports = {};
var FilterBizAccountByBgSourceReq = module.exports.FilterBizAccountByBgSourceReq = function(args) {
  this.idList = null;
  this.bgSource = null;
  if (args) {
    if (args.idList !== undefined) {
      this.idList = args.idList;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field idList is unset!');
    }
    if (args.bgSource !== undefined) {
      this.bgSource = args.bgSource;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bgSource is unset!');
    }
  }
};
FilterBizAccountByBgSourceReq.prototype = {};
FilterBizAccountByBgSourceReq.prototype.read = function(input) {
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
        this.idList = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readI32();
          this.idList.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.bgSource = input.readI32();
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

FilterBizAccountByBgSourceReq.prototype.write = function(output) {
  output.writeStructBegin('FilterBizAccountByBgSourceReq');
  if (this.idList !== null && this.idList !== undefined) {
    output.writeFieldBegin('idList', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.I32, this.idList.length);
    for (var iter7 in this.idList)
    {
      if (this.idList.hasOwnProperty(iter7))
      {
        iter7 = this.idList[iter7];
        output.writeI32(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.bgSource !== null && this.bgSource !== undefined) {
    output.writeFieldBegin('bgSource', Thrift.Type.I32, 2);
    output.writeI32(this.bgSource);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FilterBizAccountByBgSourcesReq = module.exports.FilterBizAccountByBgSourcesReq = function(args) {
  this.idList = null;
  this.bgSources = null;
  if (args) {
    if (args.idList !== undefined) {
      this.idList = args.idList;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field idList is unset!');
    }
    if (args.bgSources !== undefined) {
      this.bgSources = args.bgSources;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bgSources is unset!');
    }
  }
};
FilterBizAccountByBgSourcesReq.prototype = {};
FilterBizAccountByBgSourcesReq.prototype.read = function(input) {
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
        var _size8 = 0;
        var _rtmp312;
        this.idList = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readI32();
          this.idList.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size15 = 0;
        var _rtmp319;
        this.bgSources = [];
        var _etype18 = 0;
        _rtmp319 = input.readListBegin();
        _etype18 = _rtmp319.etype;
        _size15 = _rtmp319.size;
        for (var _i20 = 0; _i20 < _size15; ++_i20)
        {
          var elem21 = null;
          elem21 = input.readI32();
          this.bgSources.push(elem21);
        }
        input.readListEnd();
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

FilterBizAccountByBgSourcesReq.prototype.write = function(output) {
  output.writeStructBegin('FilterBizAccountByBgSourcesReq');
  if (this.idList !== null && this.idList !== undefined) {
    output.writeFieldBegin('idList', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.I32, this.idList.length);
    for (var iter22 in this.idList)
    {
      if (this.idList.hasOwnProperty(iter22))
      {
        iter22 = this.idList[iter22];
        output.writeI32(iter22);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.bgSources !== null && this.bgSources !== undefined) {
    output.writeFieldBegin('bgSources', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.I32, this.bgSources.length);
    for (var iter23 in this.bgSources)
    {
      if (this.bgSources.hasOwnProperty(iter23))
      {
        iter23 = this.bgSources[iter23];
        output.writeI32(iter23);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BindReq = module.exports.BindReq = function(args) {
  this.bizAcctID = null;
  this.bgSource = null;
  this.type = null;
  if (args) {
    if (args.bizAcctID !== undefined) {
      this.bizAcctID = args.bizAcctID;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bizAcctID is unset!');
    }
    if (args.bgSource !== undefined) {
      this.bgSource = args.bgSource;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bgSource is unset!');
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
  }
};
BindReq.prototype = {};
BindReq.prototype.read = function(input) {
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
        this.bizAcctID = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.bgSource = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
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

BindReq.prototype.write = function(output) {
  output.writeStructBegin('BindReq');
  if (this.bizAcctID !== null && this.bizAcctID !== undefined) {
    output.writeFieldBegin('bizAcctID', Thrift.Type.I32, 1);
    output.writeI32(this.bizAcctID);
    output.writeFieldEnd();
  }
  if (this.bgSource !== null && this.bgSource !== undefined) {
    output.writeFieldBegin('bgSource', Thrift.Type.I32, 2);
    output.writeI32(this.bgSource);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var UnbindReq = module.exports.UnbindReq = function(args) {
  this.bizAcctID = null;
  this.bgSource = null;
  this.type = null;
  this.logTO = null;
  if (args) {
    if (args.bizAcctID !== undefined) {
      this.bizAcctID = args.bizAcctID;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bizAcctID is unset!');
    }
    if (args.bgSource !== undefined) {
      this.bgSource = args.bgSource;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bgSource is unset!');
    }
    if (args.type !== undefined) {
      this.type = args.type;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field type is unset!');
    }
    if (args.logTO !== undefined) {
      this.logTO = args.logTO;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field logTO is unset!');
    }
  }
};
UnbindReq.prototype = {};
UnbindReq.prototype.read = function(input) {
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
        this.bizAcctID = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.bgSource = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.logTO = new BizAccountModel_ttypes.BizAccountLogTOV2();
        this.logTO.read(input);
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

UnbindReq.prototype.write = function(output) {
  output.writeStructBegin('UnbindReq');
  if (this.bizAcctID !== null && this.bizAcctID !== undefined) {
    output.writeFieldBegin('bizAcctID', Thrift.Type.I32, 1);
    output.writeI32(this.bizAcctID);
    output.writeFieldEnd();
  }
  if (this.bgSource !== null && this.bgSource !== undefined) {
    output.writeFieldBegin('bgSource', Thrift.Type.I32, 2);
    output.writeI32(this.bgSource);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  if (this.logTO !== null && this.logTO !== undefined) {
    output.writeFieldBegin('logTO', Thrift.Type.STRUCT, 4);
    this.logTO.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SearchBizAccountInBgReq = module.exports.SearchBizAccountInBgReq = function(args) {
  this.id = null;
  if (args) {
    if (args.id !== undefined) {
      this.id = args.id;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field id is unset!');
    }
  }
};
SearchBizAccountInBgReq.prototype = {};
SearchBizAccountInBgReq.prototype.read = function(input) {
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
        this.id = input.readI32();
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

SearchBizAccountInBgReq.prototype.write = function(output) {
  output.writeStructBegin('SearchBizAccountInBgReq');
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FilterBizAccountByBgSourceResp = module.exports.FilterBizAccountByBgSourceResp = function(args) {
  this.status = null;
  this.idListAfterFilter = null;
  if (args) {
    if (args.status !== undefined) {
      this.status = args.status;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field status is unset!');
    }
    if (args.idListAfterFilter !== undefined) {
      this.idListAfterFilter = args.idListAfterFilter;
    }
  }
};
FilterBizAccountByBgSourceResp.prototype = {};
FilterBizAccountByBgSourceResp.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size24 = 0;
        var _rtmp328;
        this.idListAfterFilter = [];
        var _etype27 = 0;
        _rtmp328 = input.readListBegin();
        _etype27 = _rtmp328.etype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var elem30 = null;
          elem30 = input.readI32();
          this.idListAfterFilter.push(elem30);
        }
        input.readListEnd();
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

FilterBizAccountByBgSourceResp.prototype.write = function(output) {
  output.writeStructBegin('FilterBizAccountByBgSourceResp');
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRUCT, 1);
    this.status.write(output);
    output.writeFieldEnd();
  }
  if (this.idListAfterFilter !== null && this.idListAfterFilter !== undefined) {
    output.writeFieldBegin('idListAfterFilter', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.I32, this.idListAfterFilter.length);
    for (var iter31 in this.idListAfterFilter)
    {
      if (this.idListAfterFilter.hasOwnProperty(iter31))
      {
        iter31 = this.idListAfterFilter[iter31];
        output.writeI32(iter31);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BindResp = module.exports.BindResp = function(args) {
  this.status = null;
  if (args) {
    if (args.status !== undefined) {
      this.status = args.status;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field status is unset!');
    }
  }
};
BindResp.prototype = {};
BindResp.prototype.read = function(input) {
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

BindResp.prototype.write = function(output) {
  output.writeStructBegin('BindResp');
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRUCT, 1);
    this.status.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SearchBizAccountInBgResp = module.exports.SearchBizAccountInBgResp = function(args) {
  this.status = null;
  this.createBgIdList = null;
  this.belongsBgIdList = null;
  if (args) {
    if (args.status !== undefined) {
      this.status = args.status;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field status is unset!');
    }
    if (args.createBgIdList !== undefined) {
      this.createBgIdList = args.createBgIdList;
    }
    if (args.belongsBgIdList !== undefined) {
      this.belongsBgIdList = args.belongsBgIdList;
    }
  }
};
SearchBizAccountInBgResp.prototype = {};
SearchBizAccountInBgResp.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size32 = 0;
        var _rtmp336;
        this.createBgIdList = [];
        var _etype35 = 0;
        _rtmp336 = input.readListBegin();
        _etype35 = _rtmp336.etype;
        _size32 = _rtmp336.size;
        for (var _i37 = 0; _i37 < _size32; ++_i37)
        {
          var elem38 = null;
          elem38 = input.readI32();
          this.createBgIdList.push(elem38);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size39 = 0;
        var _rtmp343;
        this.belongsBgIdList = [];
        var _etype42 = 0;
        _rtmp343 = input.readListBegin();
        _etype42 = _rtmp343.etype;
        _size39 = _rtmp343.size;
        for (var _i44 = 0; _i44 < _size39; ++_i44)
        {
          var elem45 = null;
          elem45 = input.readI32();
          this.belongsBgIdList.push(elem45);
        }
        input.readListEnd();
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

SearchBizAccountInBgResp.prototype.write = function(output) {
  output.writeStructBegin('SearchBizAccountInBgResp');
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRUCT, 1);
    this.status.write(output);
    output.writeFieldEnd();
  }
  if (this.createBgIdList !== null && this.createBgIdList !== undefined) {
    output.writeFieldBegin('createBgIdList', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.I32, this.createBgIdList.length);
    for (var iter46 in this.createBgIdList)
    {
      if (this.createBgIdList.hasOwnProperty(iter46))
      {
        iter46 = this.createBgIdList[iter46];
        output.writeI32(iter46);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.belongsBgIdList !== null && this.belongsBgIdList !== undefined) {
    output.writeFieldBegin('belongsBgIdList', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.I32, this.belongsBgIdList.length);
    for (var iter47 in this.belongsBgIdList)
    {
      if (this.belongsBgIdList.hasOwnProperty(iter47))
      {
        iter47 = this.belongsBgIdList[iter47];
        output.writeI32(iter47);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BizAcctBgTO = module.exports.BizAcctBgTO = function(args) {
  this.bizAcctID = null;
  this.bgSource = null;
  this.type = null;
  if (args) {
    if (args.bizAcctID !== undefined) {
      this.bizAcctID = args.bizAcctID;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bizAcctID is unset!');
    }
    if (args.bgSource !== undefined) {
      this.bgSource = args.bgSource;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field bgSource is unset!');
    }
    if (args.type !== undefined) {
      this.type = args.type;
    }
  }
};
BizAcctBgTO.prototype = {};
BizAcctBgTO.prototype.read = function(input) {
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
        this.bizAcctID = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.bgSource = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.type = input.readI32();
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

BizAcctBgTO.prototype.write = function(output) {
  output.writeStructBegin('BizAcctBgTO');
  if (this.bizAcctID !== null && this.bizAcctID !== undefined) {
    output.writeFieldBegin('bizAcctID', Thrift.Type.I32, 1);
    output.writeI32(this.bizAcctID);
    output.writeFieldEnd();
  }
  if (this.bgSource !== null && this.bgSource !== undefined) {
    output.writeFieldBegin('bgSource', Thrift.Type.I32, 2);
    output.writeI32(this.bgSource);
    output.writeFieldEnd();
  }
  if (this.type !== null && this.type !== undefined) {
    output.writeFieldBegin('type', Thrift.Type.I32, 3);
    output.writeI32(this.type);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SearchBizAccountBgResp = module.exports.SearchBizAccountBgResp = function(args) {
  this.status = null;
  this.bizAcctBgMap = null;
  if (args) {
    if (args.status !== undefined) {
      this.status = args.status;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field status is unset!');
    }
    if (args.bizAcctBgMap !== undefined) {
      this.bizAcctBgMap = args.bizAcctBgMap;
    }
  }
};
SearchBizAccountBgResp.prototype = {};
SearchBizAccountBgResp.prototype.read = function(input) {
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
        var _size48 = 0;
        var _rtmp352;
        this.bizAcctBgMap = {};
        var _ktype49 = 0;
        var _vtype50 = 0;
        _rtmp352 = input.readMapBegin();
        _ktype49 = _rtmp352.ktype;
        _vtype50 = _rtmp352.vtype;
        _size48 = _rtmp352.size;
        for (var _i53 = 0; _i53 < _size48; ++_i53)
        {
          var key54 = null;
          var val55 = null;
          key54 = input.readI32();
          var _size56 = 0;
          var _rtmp360;
          val55 = [];
          var _etype59 = 0;
          _rtmp360 = input.readListBegin();
          _etype59 = _rtmp360.etype;
          _size56 = _rtmp360.size;
          for (var _i61 = 0; _i61 < _size56; ++_i61)
          {
            var elem62 = null;
            elem62 = new ttypes.BizAcctBgTO();
            elem62.read(input);
            val55.push(elem62);
          }
          input.readListEnd();
          this.bizAcctBgMap[key54] = val55;
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

SearchBizAccountBgResp.prototype.write = function(output) {
  output.writeStructBegin('SearchBizAccountBgResp');
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.STRUCT, 1);
    this.status.write(output);
    output.writeFieldEnd();
  }
  if (this.bizAcctBgMap !== null && this.bizAcctBgMap !== undefined) {
    output.writeFieldBegin('bizAcctBgMap', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.I32, Thrift.Type.LIST, Thrift.objectLength(this.bizAcctBgMap));
    for (var kiter63 in this.bizAcctBgMap)
    {
      if (this.bizAcctBgMap.hasOwnProperty(kiter63))
      {
        var viter64 = this.bizAcctBgMap[kiter63];
        output.writeI32(kiter63);
        output.writeListBegin(Thrift.Type.STRUCT, viter64.length);
        for (var iter65 in viter64)
        {
          if (viter64.hasOwnProperty(iter65))
          {
            iter65 = viter64[iter65];
            iter65.write(output);
          }
        }
        output.writeListEnd();
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};


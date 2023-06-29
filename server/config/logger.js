import log4js from 'log4js'

const filePattern = '%d{yyyy-MM-dd hh:mm:ss.SSS} %p %z --- %f{3}:%l %m';
const sqlPattern = '%d{yyyy-MM-dd hh:mm:ss.SSS} %p %z --- %m';
const accessPattern = '%d{yyyy-MM-dd hh:mm:ss.SSS} %m';

const fileLayout = {
  type: 'pattern',
  pattern: filePattern
}

const sqlLayout = {
  type: 'pattern',
  pattern: sqlPattern
}

const accessLayout = {
  type: 'pattern',
  pattern: accessPattern
}

const logFactory = log4js.configure({
  appenders: {
    s_server: {
      type: 'dateFile',
      filename: 'log/server.log',
      keepFileExt: true,
      layout: fileLayout,
      alwaysIncludePattern: true
    },
    s_error: {
      type: 'dateFile',
      filename: 'log/error.log',
      keepFileExt: true,
      layout: fileLayout,
      alwaysIncludePattern: true
    },
    s_sql: {
      type: 'dateFile',
      filename: 'log/sql.log',
      keepFileExt: true,
      layout: sqlLayout,
      alwaysIncludePattern: true
    },
    s_access: {
      type: 'dateFile',
      filename: 'log/access.log',
      keepFileExt: true,
      layout: accessLayout,
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {
      appenders: ['s_server'],
      level: 'info',
      enableCallStack: true
    },
    s_server: {
      appenders: ['s_server'],
      level: 'debug',
      enableCallStack: true
    },
    s_error: {
      appenders: ['s_error'],
      level: 'info',
      enableCallStack: true
    },
    s_sql: {
      appenders: ['s_sql'],
      level: 'info',
      enableCallStack: true
    },
    s_access: {
      appenders: ['s_access'],
      level: 'info',
      enableCallStack: true
    }
  }
});

const logger_s_server = logFactory.getLogger('s_server');
const logger_s_error = logFactory.getLogger('s_error');
const logger_s_sql = logFactory.getLogger('s_sql');
const logger_s_access = logFactory.getLogger('s_access');

export default logFactory
export {
  logger_s_sql, logger_s_server, logger_s_error, logger_s_access
}

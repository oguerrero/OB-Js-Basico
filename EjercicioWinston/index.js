const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  // defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

// logger.info()
// logger.debug()
// logger.warn()
// logger.error()

function crearError (parametro) {
  if (parametro === 0) {
    return
  }
  throw new Error('Error Generado en crearError')
}

try {
  logger.info('Entrando a error')
  crearError(1)
} catch (e) {
  logger.error(`Error: ${e}`)
}

import { createLogger, transports, format } from 'winston'

export const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.simple(),
  ),
  defaultMeta: { service: 'user-service' },
});

logger.add(new transports.Console({
  format: format.simple(),
}));

if (process.env.NODE_ENV === 'production') {
  logger.add(new transports.File({
    filename: 'error.log',
    level: 'error',
  }))
  logger.add(new transports.File({
    filename: 'combined.log',
  }))
}

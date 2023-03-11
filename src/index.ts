import logger from 'jet-logger'

import { server } from './server'

const PORT = process.env.PORT || 3000

// Start Express server
const msg = `Express server started on ${PORT}`
server.listen(PORT, () => logger.info(msg))

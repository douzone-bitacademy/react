import * as path from 'path';
import express from 'express';
import cors from 'cors';

const PORT = 8888;
express()
    .use(cors())
    .use('/', express.static(path.resolve('.', 'public')))
    .listen(PORT, () => console.log('starts API server on port ' + PORT));
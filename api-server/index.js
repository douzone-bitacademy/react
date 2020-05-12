import * as path from 'path';
import fs from 'fs';
import express from 'express';
import cors from 'cors';

const PORT = 8888;

express()
.use(cors())
//.use('/', express.static(path.resolve('.', 'public')))
.get('/emaillist', (req, resp) => resp.status(200).json({
    result: 'success',
    message: null,
    data: JSON.parse(fs.readFileSync(path.resolve('.', 'data', 'emaillist', 'data.json')).toString())
}))
.get('/kanban/cards', (req, resp) => resp.status(200).json({
    result: 'success',
    message: null,
    data: JSON.parse(fs.readFileSync(path.resolve('.', 'data', 'kanban', 'data.json')).toString())
}))
.listen(PORT, () => console.log('starts API server on port ' + PORT));
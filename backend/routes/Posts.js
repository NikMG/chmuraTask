const express  = require('express');
const router = express.Router();
const { Posts } = require('../models');


router.put('/update', async (req, res) => {
    const body = req.body;

    try {
        const task = await Posts.findOne({ where: { id: body?.taskId } });

        if (task == null) {
            res.status(404).send('Task Not Found');
        } else {
            await task.update({ task: body?.text });
            res.status(200).send('DONE');
        }

    } catch(e) {
        throw(e);
    }
});

router.delete('/delete/:id', async (req, res) => {
    const taskId = req.params.id;

    console.log(req);

    try {
        const task = await Posts.findOne({ where: { id: taskId } });

        if (taks == null) {
            res.status(404).send('Task Not Found');
        } else {
            await task.destroy();
            res.status(200).send('OK');
        }
    } catch (e) {
        res.status(404).send('Something went wrong, please contact an Administrator');
    }
});

router.get('/', async (req, res) => {

    try {
        const posts = await Posts.findAll();

        res.status(200).send(posts);
    } catch(e) {
        res.status(404).send('Something went wrong');
    }

});

router.post('/create', async (req, res) => {
    const body = req.body;
    try {
        await Posts.create(body);

        res.status(200).send('OK');
    } catch {
        res.status(404).send('Something went wrong');
    }
});

module.exports = router;
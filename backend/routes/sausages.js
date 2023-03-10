const express = require('express');
const router = express.Router();

const Sausage = require('../models/Sausage');

router.get('/', async (req, res) => {
    try {
        const result = await Sausage
            .find()
            .populate('manufacturer', '-__v')
            .populate('spice', '-__v');
        return res.send(result);
    } catch (error) {
        console.log(">! ERROR cannot GET");
        console.error(error);
    }
});

router.post('/', async (req, res) => {
    try {
        await Sausage.create(req.body);
        return res.send(req.body);
    } catch (error) {
        console.log(">! ERROR cannot POST");
        console.error(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await Sausage
            .find({_id: req.params.id})
            .populate('manufacturer', '-_id -__v')
            .populate('spice', '-_id -__v');
        return res.send(result);
    } catch (error) {
        console.log(">! ERROR cannot GET specified sausage");
        console.error(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        await Sausage.findOneAndReplace({_id: req.params.id}, req.body, null,err =>
            err ? console.log(err) : res.send(req.body)
        );
    } catch (error) {
        console.log(">! ERROR cannot PUT specified sausage");
        console.error(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Sausage.findOneAndRemove({_id: req.params.id}, null,err =>
            err ? console.log(err) : res.send(req.params.id)
        );
    } catch (error) {
        console.log(">! ERROR cannot DELETE specified sausage");
        console.error(error);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        await Sausage.findOneAndUpdate({_id: req.params.id}, req.body, null,err =>
            err ? console.log(err) : res.send(req.body)
        );
    } catch (error) {
        console.log(">! ERROR cannot PATCH specified sausage");
        console.error(error);
    }
});

module.exports = router;

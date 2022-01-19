const express = require('express');
const router = express.Router();

const Spice = require('../models/Spice');

router.get('/', async (req, res) => {
    try {
        const result = await Spice.find();
        return res.send(result);
    } catch (error) {
        console.log(">! ERROR cannot GET");
        console.error(error);
    }
});

router.post('/', async (req, res) => {
    try {
        await Spice.create(req.body);
        return res.send(">$ OK, created successfully");
    } catch (error) {
        console.log(">! ERROR cannot POST");
        console.error(error);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await Spice.find({_id: req.params.id});
        return res.send(result);
    } catch (error) {
        console.log(">! ERROR cannot GET specified sausage");
        console.error(error);
    }
});

router.put('/:id', async (req, res) => {
    // Requires full object
    try {
        await Spice.findOneAndReplace({_id: req.params.id}, req.body, null,err =>
            err ? console.log(err) : res.send(">$ OK, replaced")
        );
    } catch (error) {
        console.log(">! ERROR cannot PUT specified sausage");
        console.error(error);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Spice.findOneAndRemove({_id: req.params.id}, null,err =>
            err ? console.log(err) : res.send(">$ OK, removed")
        );
    } catch (error) {
        console.log(">! ERROR cannot DELETE specified sausage");
        console.error(error);
    }
});

router.patch('/:id', async (req, res) => {
    // Requires only these parameters which should be changed
    try {
        await Spice.findOneAndUpdate({_id: req.params.id}, req.body, null,err =>
            err ? console.log(err) : res.send(">$ OK, updated")
        );
    } catch (error) {
        console.log(">! ERROR cannot PATCH specified sausage");
        console.error(error);
    }
});

module.exports = router;

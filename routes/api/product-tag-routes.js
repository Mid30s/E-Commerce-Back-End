const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

//get all productTags
router.get('/', async(req, res) => {
    try {
        const productTagData = await ProductTag.findAll(      
        )

        res.status(200).json(productTagData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//get productTags by id
router.get('/:id', async(req, res) => {
    try {
        const productTagData = await ProductTag.findByPk(req.params.id);

        if (!productTagData) {
            res.status(404).json({ message: 'No productTag found with this id!' });
            return;
        }

        res.status(200).json(productTagData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//create new productTag
router.post('/', async(req, res) => {
    try {
        const productTagData = await ProductTag.create(req.body);
        res.status(200).json(productTagData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



//update productTag by id
router.put('/:id', async(req, res) => {
    try {
        const productTagData = await ProductTag.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!productTagData[0]) {
            res.status(404).json({ message: 'No productTag found with this id!' });
            return;
        }
        res.status(200).json(productTagData);

    } catch (err) {
        res.status(500).json(err);
    }
});



//delete productTag by id
router.delete('/:id', async(req, res) => {
    try {
        const productTagData = await ProductTag.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!productTagData) {
            res.status(404).json({ message: 'No productTag found with this id!' });
            return;
        }

        res.status(200).json(productTagData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
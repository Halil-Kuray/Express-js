const express = require('express')
const router = express.Router()

router.use(logger) // Burada tanimlarsak bu fonsiyon bu sayfadaki tum methodlar icin ilk kapi gorevi gorur ve kullanilir.
                    // Baska sayfada tanimlanmamis olsayddi sadece buradaki user rootlari icin kullanilabilir olurdu

router.get('/users', (req, res) => {
    res.send("User List")
})

router.get('/users/new', (req, res) => {
    res.send("Register Form")
})

router.post('/users', (req, res) => {
    res.send('Create New User')
})


router
    .route('/users/:idxxx')
    .get((req, res) => {
        console.log(req.user)
        req.params.idxxx //bu sekidle yukarida belirtilen id parametresine ulasbiliriz
        res.send(`Get User By Id ${req.params.idxxx}`)
    })
    .put((req, res) => {
        req.params.idxxx //bu sekidle yukarida belirtilen id parametresine ulasbiliriz
        res.send(`Update User By Id ${req.params.idxxx}`)
    })
    .delete((req, res) => {
        req.params.idxxx //bu sekidle yukarida belirtilen id parametresine ulasbiliriz
        res.send(`Delete User By Id ${req.params.idxxx}`)
    })


// Yukaridaki kod Asadaki kodun DAHA KISA ve MAKUL olanidir.///////

router.get('/users/:idxxx', (req, res) => {
    req.params.idxxx //bu sekidle yukarida belirtilen id parametresine ulasbiliriz
    res.send(`Get User By Id ${req.params.idxxx}`)
})

router.put('/users/:idxxx', (req, res) => {
    req.params.idxxx //bu sekidle yukarida belirtilen id parametresine ulasbiliriz
    res.send(`Update User By Id ${req.params.idxxx}`)
})

router.delete('/users/:idxxx', (req, res) => {
    req.params.idxxx //bu sekidle yukarida belirtilen id parametresine ulasbiliriz
    res.send(`Delete User By Id ${req.params.idxxx}`)
})
////////////////////////////////////////
const users = [ {name:"Ali"}, {name:"Mehmet"}]

//Middleware
router.param('idxxx', (req, res, next, idxxx) => {
    req.user = users[idxxx]


    next() ///idxxx parametresi olan yere bak ve next satri calistir demektir.
})

//Middleware
function logger( req, res, next) {
    console.log(req.originalUrl) // kullanicinin linkini goruruz - 
    next()
}




module.exports = router;
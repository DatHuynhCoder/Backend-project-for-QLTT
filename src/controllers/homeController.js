const getHomepage = (req, res) => {
    res.send('Hello World! and hello Dat')
}

const getGigachad = (req, res) => {
    res.send('gigachad')
}

const getTheZucc = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getGigachad, getTheZucc
}
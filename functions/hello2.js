export default function handler(req, res) {
    res.status(200).send({ 
        token: process.env.TOKEN,
        randomNum: Math.floor((Math.random()*100) + 1)
    })
};  
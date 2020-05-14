const HTTEror =  require('../models/http-error');

let DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Ronald Alvarado',
        email: 'riabojorquez99@gmaiil.com',
        password: 'rb1'
    }

];

const getUsers = (req, res, next) => {
    const userid = req.params.uid;
    const usuario = DUMMY_USERS.filter(p => {
        return(p.id === userid);
    });
    
    if(!usuario){
        
        throw new HttpError('No se encontro el usuario solicitado', 404);
    }

    res.json({user:usuario});

};

const generarUID = (req, res, next) =>{
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
};


const signup = (req, res, next) => {

    //console.log(generarUID());

    const id = generarUID();
    const {name, email, password} = req.body;
    const createdUser = {
        id,
        name,
        email,
        password
    }
    DUMMY_USERS.push(createdUser);

    res.json({user:createdUser});
    res.status(201).json({message: 'Se agrego al usuario exitosamente'});

};

const login = (req,res, next) => {
    const {email,password} = req.body;
    console.log(req.body);
    const user = DUMMY_USERS.filter( p=> {
        return(p.email === email && p.password === password);
    });
    if(!user){
        throw new HttpError('FALSE', 404);
    }
    res.json({user:user})

};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login; 



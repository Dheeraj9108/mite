const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bp = require('body-parser');
const admission = require('./models/admission')

mongoose.connect('mongodb://localhost:27017/mite-db',{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
const app = express();
app.use('/',express.static(path.join(__dirname,'static')))
app.use(bp.json());

app.get('/',(req,res)=>{
    res.redirect('mite.html');
})
app.get('/aboutmite',(req,res)=>{
    res.redirect('aboutmite.html');
})
app.get('/management',(req,res)=>{
    res.redirect('management.html');
})
app.get('/cmsg',(req,res)=>{
    res.redirect('cmsg.html');
})
app.get('/cmsg',(req,res)=>{
    res.redirect('cmsg.html');
})
app.get('/sgplan',(req,res)=>{
    res.redirect('sgplan.html');
})
app.get('/policy',(req,res)=>{
    res.redirect('policy.html');
})
app.get('/administration',(req,res)=>{
    res.redirect('administration.html');
})
app.get('/admission',(req,res)=>{
    res.redirect('admission.html');
})
app.get('/ae',(req,res)=>{
    res.redirect('ae.html');
})
app.get('/civil',(req,res)=>{
    res.redirect('civil.html');
})
app.get('/cse',(req,res)=>{
    res.redirect('cse.html');
})
app.get('/ai',(req,res)=>{
    res.redirect('ai.html');
})
app.get('/iot',(req,res)=>{
    res.redirect('iot.html');
})
app.get('/ec',(req,res)=>{
    res.redirect('ec.html');
})
app.get('/is',(req,res)=>{
    res.redirect('is.html');
})
app.get('/mech',(req,res)=>{
    res.redirect('mech.html');
})
app.get('/mechtro',(req,res)=>{
    res.redirect('mechtro.html');
})
app.get('/mcse',(req,res)=>{
    res.redirect('mcse.html');
})
app.get('/mmechtro',(req,res)=>{
    res.redirect('mmechtro.html');
})
app.get('/research',(req,res)=>{
    res.redirect('research.html');
})
app.get('/phy',(req,res)=>{
    res.redirect('phy.html');
})
app.get('/chem',(req,res)=>{
    res.redirect('chem.html');
})
app.get('/math',(req,res)=>{
    res.redirect('math.html');
})
app.get('/math',(req,res)=>{
    res.redirect('math.html');
})
app.get('/humanity',(req,res)=>{
    res.redirect('humanity.html');
})
app.get('/acadamic',(req,res)=>{
    res.redirect('acadamic.html');
})
app.get('/calender',(req,res)=>{
    res.redirect('calender.html');
})
app.get('/professional',(req,res)=>{
    res.redirect('professional.html');
})
app.get('/induction',(req,res)=>{
    res.redirect('induction.html');
})
app.get('/industry',(req,res)=>{
    res.redirect('industry.html');
})
app.get('/global',(req,res)=>{
    res.redirect('global.html');
})
app.get('/silver',(req,res)=>{
    res.redirect('silver.html');
})
app.get('/mite_first',(req,res)=>{
    res.redirect('mite_first.html');
})
app.get('/research',(req,res)=>{
    res.redirect('research.html');
})
app.get('/ipr',(req,res)=>{
    res.redirect('ipr.html');
})
app.get('/incubation',(req,res)=>{
    res.redirect('incubation.html');
})
app.get('/companies',(req,res)=>{
    res.redirect('companies.html');
})
app.get('/infrastructure',(req,res)=>{
    res.redirect('infrastructure.html');
})
app.get('/library',(req,res)=>{
    res.redirect('library.html');
})
app.get('/hostel',(req,res)=>{
    res.redirect('hostel.html');
})
app.get('/sports',(req,res)=>{
    res.redirect('sports.html');
})
app.get('/transportation',(req,res)=>{
    res.redirect('transportation.html');
})
app.get('/euphoria',(req,res)=>{
    res.redirect('euphoria.html');
})





app.post('/api/admission', async(req,res)=>{
    const{username,number,email,msg} = req.body;

    if(!username || typeof username != 'string'){
        return res.json({status:'error',error:'Invalid username/password'})
    }
    if(!number || typeof number !='string'){
        return res.json({status:'error', error:'Invalid Number'});
    }
    if(number.length != 10){
        return res.json({status : 'error' , error:'Number should contain  10 characters'});
    }
    if(!email){
        return res.json({status:'error',error:'Invalid email'});
    }


    try{
        const admsn  = new admission({
            username,number,email,msg
        })
        const  admissio = await admsn.save();
        console.log('data added sucessfully :',admsn)
        // console.log(admissio)
    }catch(error){
       if(error.code === 11000){
            return res.json({status:'error' ,error : 'error'})
       }
       throw error
    }
    res.json({status : 'ok'})
})


app.listen(7999,()=>{
    console.log('Server is listening at 7999')
})
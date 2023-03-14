import axios from 'axios';
export default function useEmail(email,subject,des){
    axios({
        method:'post',
        url:`https://54.254.162.138:5000/api/email`,
        data:{
            email:email,
            subject:subject,
            des:des
        }
    }).then(res=>{
        console.log(res);
        return true;
    }).catch(err=>{
        console.log(err);
        return false;
    })
}
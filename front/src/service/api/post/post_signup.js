/**
 * @description login 
 * @method POST
 * @request @headers 
 * @request @body user{username(email정보) , password}
 */


import _ from "../../../config/env"
import {notification} from 'antd'

const post_signup = (data)=>{
        return fetch(_.SERVER_URL + ":/api/signup", {
            method: 'POST',
            body: JSON.stringify(data),
        }).then((res)=> {
            if(res.status===500) throw Promise.resolve({errorCode: 500, errorName: "Server error"})
            if (!res.ok) throw res.json()
            if(res.ok){
                notification['success'].open({
                    message: 'signup success',
                    description:
                    `"nickname"님 환영합니다!`,
                    onClick: () => {
                    console.log('Notification Clicked!');
                    },
                });
            }
        }).catch(async(error)=>{
            let err =  await error.then()
            notification['warning'].open({
                message: 'Error from post_signup',
                description:
                `${err.errorName} "${err.errorCode}"`,
                onClick: () => {
                console.log('Notification Clicked!');
                },
            });
            console.log("Error from post_notice\n"+err.errorCode+"\n"+err.errorName)
            //에러처리
            throw err
        })
    //}
    
}

export default post_signup
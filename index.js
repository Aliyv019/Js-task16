const str="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
let captch=''
for (let i = 0; i < 6; i++) {
    captch+=str[Math.floor(Math.random()*str.length)]
}
const captcha=document.querySelector('h2')
captcha.textContent=captch

const button=document.querySelector('button')
const input_captcha=document.querySelector('input')
input_captcha.addEventListener('input',()=>{
    input_captcha.value=input_captcha.value.substring(0,6)
    if(input_captcha.value.length==6 && input_captcha.value!=captch){
        button.style.background='red'
        input_captcha.style.outlineColor='red'
    }
    else if(input_captcha.value.length==6 && input_captcha.value==captch){
        button.style.background='#15A44A'
        input_captcha.style.outlineColor='#15A44A'
    }
})
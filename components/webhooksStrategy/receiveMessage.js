import axios from "axios"
import dotenv from 'dotenv'


dotenv.config()

export default async function receiveMessageSwitch(data) {

    let text = ''

    console.log('data: \n\n\n',data,'\n\n\n')
    try{
        text = String(data.text.body)
    }
    catch(e){
        if(e.name == 'ReferenceError'){
            text = ''
        }
        else{
            console.log(e)
            return false
        }
    }


    if(text.includes('1') & RegExp('([0-9])+').test(text)){

        try {
            const url = `${process.env.WHATSAPP_BASEURL}/${process.env.BUSINESS_NUMBER_ID}/messages`
            await axios.post(url, {
                messaging_product: "whatsapp",
                to: data.from,
                type: "text",
                text: {
                    body: 'você escolheu a opção 1'
                }
            })

            
            
            return true 
        } catch (error) {
            return false
        }
    }
    else if(text.includes('2') & RegExp('([0-9])+').test(text)){

        try {
            const url = `${process.env.WHATSAPP_BASEURL}/${process.env.BUSINESS_NUMBER_ID}/messages`
            await axios.post(url, {
                messaging_product: "whatsapp",
                to: data.from,
                type: "text",
                text: {
                    body: 'você escolheu a opção 2'
                }
            })

            
            
            return true 
        } catch (error) {
            return false
        }
    }
    else {
        // either text that be not known it

        try {
            const url = `${process.env.WHATSAPP_BASEURL}/${process.env.BUSINESS_NUMBER_ID}/messages`
            await axios.post(url, {
                messaging_product: "whatsapp",
                to: data.from,
                type: "text",
                text: {
                    body: 'Seja bem-vindo!\n\nEscolha uma das opções a seguir (responda apenas o número da opção):\n\nopção \'1\'\n\n opção \'2\''
                }
            })

            
            
            return true 
        } catch (error) {
            return false
        }
    }

}

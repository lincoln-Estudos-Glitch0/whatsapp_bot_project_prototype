import receiveMessageProcess from './receiveMessage.js'
import { CacheService } from '../cache/CacheService.js'

class webhookStrategy{


    async receiveMessage(data){

        for(let entry of data.entry){


            for(let change of entry.changes) {


                for(let message of change.value.messages){

                    if(await receiveMessageProcess(message)){
                        let tmp = new CacheService()

                        tmp.refresh_sort_list()
                        
                        for(let contact of change.contacts) {
                            tmp.new_chat(contact.wa_id)
                        }
                    }
                    
                }
            }
        }

    }
}


export { webhookStrategy as strategyClass }
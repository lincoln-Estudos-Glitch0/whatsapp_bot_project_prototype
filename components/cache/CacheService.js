import cache from 'node-cache'

const opts = {

    maxKeys: 10,
    deleteOnExpire: true,
    stdTTL: 120,
    
}

const core = new cache(opts)

class CacheService {

    #core
    constructor (){

        this.#core = core
    }

    refresh_sort_list(){

        if(this.#core.has('chats')){

            let chats = this.#core.take('chats')

            this.#core.set('chats', chats.sort((a,b) => a.localeCompare(b)))
        }
        else {
            this.#core.set('chats', [])
        }
    }

    new_chat(contact){

        if(this.#core.has('chats')){

            let tmp = this.#core.take('chats')
            tmp.push(contact)

            this.#core.set('chats', tmp)
        }
    }


}


export { CacheService }
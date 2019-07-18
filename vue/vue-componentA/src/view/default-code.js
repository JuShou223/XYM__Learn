const code = `<templete>
    <div>
        <input v-model="message"/>
        {{message}}
    </div>
</templete>
<script>
    export default {
        data(){
            return {
                message: ''
            }
        }
    }
</script>`

export default code
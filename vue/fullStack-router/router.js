class Router {
    constructor(options){
        this.routes = {}
        this.bindEvent()
        options.forEach(item => {
            this.route(item.path,()=>{
                document.getElementById('content').innerHTML = item.component
            })
        })
        console.log(this.routes)
    }
    route(path,cb){
        this.routes[path] = cb
    }
    updateView(){
        const currentUrl = window.location.pathname || '/'
        console.log(currentUrl)
        this.routes[currentUrl] && this.routes[currentUrl]()
    }
    push(url){
        window.history.pushState({},null,url)
        this.updateView()
    }
    bindEvent(){
        const links = document.getElementsByTagName('a');
        const that = this;
        [].forEach.call(links,link=>{
            link.addEventListener('click',
            function(){
                const url = this.getAttribute('data-href')
                that.push(url)
            })
        })
    }
}
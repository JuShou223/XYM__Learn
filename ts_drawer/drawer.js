var Drawer = /** @class */ (function () {
    function Drawer(opt) {
        this.duration = 5;
        this.ease = 'ease';
        this.enterDOM = opt.enterDOM;
        this.leaveDom = opt.leaveDom;
        console.log(this.enterDOM, this.leaveDom);
    }
    // get duration () {
    //   return this.duration;
    // }
    // set duration(duration: number) {
    //   this.duration = duration;
    // }
    // get ease (){
    //   return this.ease;
    // }
    // set ease (ease: string) {
    //   this.ease = ease
    // }
    Drawer.prototype.initDOMStyle = function () {
        if (this.enterDOM && this.leaveDom) {
            this.enterDOM.setAttribute('style', "transition: left " + this.duration + "s " + this.ease);
            this.leaveDom.setAttribute('style', "transition: margin-left " + this.duration + "s " + this.ease);
        }
    };
    Drawer.prototype.enter = function () {
        if (this.enterDOM && this.leaveDom) {
            this.enterDOM.setAttribute('style', "left: 0px; transition: left " + this.duration + "s " + this.ease);
            this.leaveDom.setAttribute('style', "transition: margin-left " + this.duration + "s " + this.ease + ";margin-left:200px;");
        }
    };
    Drawer.prototype.leave = function () {
        this.initDOMStyle();
    };
    return Drawer;
}());

interface IDrawerConfig {
  enterDOM: HTMLElement | null;
  leaveDom: HTMLElement | null;
  duration?: Number;
  ease?: String;
}
class Drawer implements IDrawerConfig {
  enterDOM: HTMLElement
  leaveDom: HTMLElement
  duration: Number = 5
  ease: String = 'ease'
  constructor(opt){
    this.enterDOM = opt.enterDOM;
    this.leaveDom = opt.leaveDom;
    console.log(this.enterDOM,this.leaveDom)
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
  initDOMStyle () {
    if(this.enterDOM && this.leaveDom){
      this.enterDOM.setAttribute('style',`transition: left ${this.duration}s ${this.ease}`)
      this.leaveDom.setAttribute('style',`transition: margin-left ${this.duration}s ${this.ease}`)
    }
  }
  enter () {
    if(this.enterDOM && this.leaveDom){
      this.enterDOM.setAttribute('style',`left: 0px; transition: left ${this.duration}s ${this.ease}`)
      this.leaveDom.setAttribute('style',`transition: margin-left ${this.duration}s ${this.ease};margin-left:200px;`)
    }
  }
  leave () {
    this.initDOMStyle();
  }
}
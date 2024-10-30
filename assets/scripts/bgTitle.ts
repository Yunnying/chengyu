// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    title: cc.Sprite = null;

    @property(cc.SpriteFrame)
    titles: cc.SpriteFrame[] = [];

    @property(cc.String)
    type: string = "0";
  
    onLoad () {
     
        cc.director.on("change_theme",this.setBg,this);
       
    }

    start () {
        
       this.setBg();
    }

    setBg(){
        let arr= JSON.parse(localStorage.getItem("bgSkinData")||JSON.stringify([1,0,0]));
        let  arr1=[50,50,95]
        for(let i=0;i<3;i++){
            if(arr[i]){
                this.title.spriteFrame=this.titles[i];
                if(this.type=="1"){
                    this.title.node.y=arr1[i];
                }
            }
        }


       

    }

    // update (dt) {}
}

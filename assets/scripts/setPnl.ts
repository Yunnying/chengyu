// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { server } from "./ServerMgr";

const {ccclass, property} = cc._decorator;

@ccclass
export default class setpanlClass extends cc.Component {

  
    
    setData=[1,1,1]

    onLoad () {

       this.setData=JSON.parse(localStorage.getItem("setData")||JSON.stringify([1,1,1]));
       
       let content=this.node.getChildByName("content");

       for(let i=0;i<3;i++){

         
         content.children[i].children[0].active=!this.setData[i];

         content.children[i].children[1].active=!!this.setData[i];
       }

       if(this.setData[1]==0){
        cc.audioEngine.setEffectsVolume(0)
        
     }else{
         cc.audioEngine.setEffectsVolume(1)
     }

       

      

    }

    start () {

    }

    onClickSet(e,index="0,0"){
 
        
       let content=this.node.getChildByName("content");

        let arr=index.split(",");

        content.children[Number(arr[0])].children[0].active=!Number(arr[1]);

        content.children[Number(arr[0])].children[1].active=!!Number(arr[1]);

        this.setData[Number(arr[0])]=Number(arr[1]);

        this.save();

        if(arr[0]=="0"){

            window["gameMgr"].playBgm(!!arr[1])
        
           
        }

        if(arr[1]=="0"){
           cc.audioEngine.setEffectsVolume(0)
           
        }else{
            cc.audioEngine.setEffectsVolume(1)
        }

        //onClickSet（）{} 
   
    }

    save(){
       localStorage.setItem("setData",JSON.stringify(this.setData));
    }

    onClose(){
        window["pointOut"].btnMusic();
        this.node.active=false;
    }

    onShow(){
        window["pointOut"].btnMusic();
        this.node.active=true;
    }

    // update (dt) {}
}

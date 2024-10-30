// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { server } from "./ServerMgr";
import { wxsdk } from "./wxSDK";

const {ccclass, property} = cc._decorator;

@ccclass
export default class rankpanlClass extends cc.Component {

  

    onLoad () {
      
       

       

    }

    protected onEnable(): void {
       
        wxsdk.getRankFriend();
    }


    start () {
 
        
    }

   

    save(){
       
    }

    onClose(){
        window["pointOut"].btnMusic();
        this.node.active=false;
        this.node.y=0;
        if(window["wx"])    wxsdk.closeRank()
    }

    onShow(){
        window["pointOut"].btnMusic();
        this.node.active=true;
        if(window["wx"])   wxsdk.openRank();
    }

    onShare(){
       if(window["wx"])  window["wx"].shareAppMessage({})
    }

    // update (dt) {}
}

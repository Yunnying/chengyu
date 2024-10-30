// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { wxsdk } from "./wxSDK";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameMgrClass extends cc.Component {

    @property(cc.Node)
    GameClubButton: cc.Node = null;

    wxGameClubButton

    wxGameClubButtonIsHow=true;
    userData={
        time:0,
        isClickClub:false,
    }

    onLoad() {

        cc.director.on("dlg_show",this.showClub,this);
        cc.director.on("dlg_hide",this.hideClub,this);
         this.userData= JSON.parse(localStorage.getItem("user_data_chenyu")||JSON.stringify(this.userData));

         let d1 = new Date(Date.now());
         let d2 = new Date(this.userData.time);
         if (d1.getDate() != d2.getDate()) {
             this.userData.time=Date.now();
             this.userData.isClickClub=false;
             this.save();
         }
         this.showDlg();
    }
    hideClub(){
        if(window["wx"]&&this.wxGameClubButton)  this.wxGameClubButton.show();
        this.wxGameClubButtonIsHow=true;
    }

    showClub(){
        if(window["wx"]&&this.wxGameClubButton)  this.wxGameClubButton.hide();
        this.wxGameClubButtonIsHow=false;
    }

    showDlg(){
        if(!this.userData.isClickClub){
            cc.tween(this.GameClubButton.children[0]).to(1,{opacity:255}).start();
            
        }
    }

    save(){
        localStorage.setItem("user_data_chenyu",JSON.stringify(this.userData));
    }

    start() {
        
        window["mgr"]=this;
        this.createClub(this.GameClubButton);
        this.setClubTxt();
    }

    setClubTxt(){
        let arr=[
            "每日奖励已经刷新",
            "评论区已更新",
            "新手礼包可以领取"
        ]
        this.GameClubButton.children[0].children[0].getComponent(cc.Label).string=arr[Math.floor(Math.random()*3)];

    }
    createClub(GameClubButton:cc.Node) {
        let wx=window["wx"]
       if(!wx) return;

        let pos= GameClubButton.convertToWorldSpaceAR(cc.v2(0,0));
        let x=pos.x;
        let windowSize=cc.winSize
        let y=windowSize.height-pos.y;
       

        let sysInfo = wx.getSystemInfoSync();

        let x1=(x/windowSize.width)*sysInfo.screenWidth

        let y1=(y/windowSize.height)*sysInfo.screenHeight

      

        cc.error("位置信息",x1,y1)
      


        this.wxGameClubButton = wx.createGameClubButton({
            type:"text",
            text:"",
          

            style: {

                left: x1 - 30, // 之所以要减20，是因为clubButton的锚点在左上角

                top: y1 - 30, // 之所以要减20，是因为clubButton的锚点在左上角 

                width: 60,

                height: 60

            }

        });


        this.wxGameClubButton.onTap(()=>{
            this.userData.isClickClub=true;
            this.save();
            this.GameClubButton.children[0].opacity=0;
        })
        if(!this.wxGameClubButtonIsHow){
            this.wxGameClubButton.hide();
        }
    }

    // update (dt) {}
}

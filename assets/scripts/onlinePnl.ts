// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import { server } from "./ServerMgr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class onlinepanlClass extends cc.Component {


    @property(cc.Label)
    btnTxt: cc.Label = null;

    onlineData = {
        loginTime: 0,//登录时间
        reward: [0, 0, 0, 0]//是否领取奖励
    }

    onLoad() {

        this.onlineData = JSON.parse(localStorage.getItem("onlineData") || JSON.stringify(this.onlineData));
        let d1 = new Date(Date.now());
        let d2 = new Date(this.onlineData.loginTime);
        if (d1.getDate() != d2.getDate()) {
            this.onlineData = {
                loginTime: Date.now(),//登录时间
                reward: [0, 0, 0, 0]//是否领取奖励
            }
            this.save();
        }
        this.schedule(this.update1, 1)

        this.setState();
        this.update1();
    }


    protected onEnable(): void {

    }

    start() {

    }





    save() {
        localStorage.setItem("onlineData", JSON.stringify(this.onlineData));
    }

    setState() {
        this.node.getChildByName("get").getComponent(cc.Button).interactable = false;
        this.btnTxt.node.parent.getChildByName("onlineRewardIcon").active=false;
        
        let isSet=false;
        let timeArr = [8, 8, 10, 10];
        for (let i = 0; i < 4; i++) {
            let reward = this.node.getChildByName("reward" + i);
            let time = timeArr[i] * 60 * 1000;
            

            let onlineLight= reward.getChildByName("onlineLight")

            let onlineget= reward.getChildByName("onlineget")
            let onlinereward= reward.getChildByName("onlinereward")
            let timeNode= reward.getChildByName("time")
            onlineget.active=true;
            onlinereward.active=false;
            onlineLight.active=false;
            timeNode.active=true;
            timeNode.getComponent(cc.Label).string = "未开始";
            let icon=reward.getChildByName("icon");
            cc.Tween.stopAllByTarget(icon);
            icon.scale=1;
            if (this.onlineData.reward[i]) {//已领取
                timeNode.getComponent(cc.Label).string = "已领取";
                reward.getChildByName("mask").active = true;
                onlineget.active = true;
                onlinereward.active = false;
                timeNode.active=true;
            } else {//未领取
                reward.getChildByName("mask").active = false;
               
                if (Date.now() - this.onlineData.loginTime >= time&&!isSet) {
                    onlineget.active = false;
                    onlinereward.active = true;
                    isSet=true;
                    timeNode.active=true;
                    timeNode.getComponent(cc.Label).string = "待领取";
                    this.node.getChildByName("get").getComponent(cc.Button).interactable = true;
                    this.btnTxt.string="待领取"
                    this.btnTxt.node.parent.getChildByName("onlineRewardIcon").active=true;
                    reward.getChildByName("mask")
                    onlineLight.active=true;
                    cc.Tween.stopAllByTarget(onlineLight);
                    onlineLight.angle=0;
                    cc.tween(onlineLight).to(0.5,{angle:-180}).to(0.5,{angle:-360}).start();
                    } 

                
                if (Date.now() - this.onlineData.loginTime < time&&!isSet) {
            
                            
                   
              
                    cc.tween( icon).to(0.5,{scale:1.1}).to(0.5,{scale:1}).to(0.5,{scale:0.8}).to(0.5,{scale:1}).start();
            
                               
                    isSet=true;
                   
                    
                    let t = time - (Date.now() - this.onlineData.loginTime);
                    let h: any = t / 1000 / 60;
                    h = Math.floor(h) 
                    if (h < 10) h = "0" + h

                    let s: any = (t / 1000) % 60;
                    s = Math.floor(s) 
                    if (s < 10) s = "0" + s
                    reward.getChildByName("time").getComponent(cc.Label).string = h + ":" + s;

                    timeNode.active=true;
                    onlineget.active=true;
                           
                    this.btnTxt.string=h + ":" + s;
                  
                }

               
            }
        }
    }


    getReward() {
        
        let timeArr = [8, 8, 10, 10];
        let powArr = [5, 5, 7, 9]
        for (let i = 0; i < 4; i++) {
            if (this.onlineData.reward[i]) continue;
            let reward = this.node.getChildByName("reward" + i);
            let time = timeArr[i];
            

            reward.getChildByName("mask").active = false;
           
            if (Date.now() - this.onlineData.loginTime >= time) {
                this.onlineData.reward[i] = 1;

                let pownum = Number(window["pow"].constructor.loadData("power"))
                pownum += powArr[i];
                window["pow"].constructor.saveData("power", pownum);
                this.onlineData.loginTime=Date.now();
                this.setState();
                this.save();
                return;
            }

           

        }

        
    }

    onClose() {
        window["pointOut"].btnMusic();
        this.node.scale = 0;
        if(this.onlineData.reward[0]&&this.onlineData.reward[1]&&this.onlineData.reward[2]&&this.onlineData.reward[3]){
            this.node.active=false;
        }
        this.node.getChildByName("mask").active=false;
    }

    onShow() {
        window["pointOut"].btnMusic();
         this.node.scale = 1;
         if(!(this.onlineData.reward[0]&&this.onlineData.reward[1]&&this.onlineData.reward[2]&&this.onlineData.reward[3])){
            this.node.active=true;
        }
        this.node.getChildByName("mask").active=true;
    }


    update1() {



        this.setState();
     
    }

    // update (dt) {}
}

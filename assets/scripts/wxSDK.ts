
let wx = window["wx"];


class wxSDKClass {
   

    constructor(){
        if(wx) wx.onMessage(this.onMessage.bind(this));
        if(wx) {
            wx.showShareMenu({
                withShareTicket: true,
                menus: ['shareAppMessage', 'shareTimeline']
              })
        }
    }
    public isGetUserInfo=false;
    /**
    * 设置用户的分数
    * @param value
    */
    public setScore(value: number) {
        if (!wx) return;
        console.log("setScore",value)
        wx.postMessage({
            event: 'setScore',
            score: value
        });
        console.log("setScore")
    
          
    }

    public closeRank(){
      wx.postMessage({
        event: 'close',
       
    });
    }

    public openRank(){
      wx.postMessage({
        event: 'open'
       
    });
    }

      /**
    * 设置用户
    * @param value
    */
      public setUserInfo(data:{nickName:string,avatarUrl:string,score:number}) {
        if (!wx) return;
        console.log("setUserInfo",data)
        wx.postMessage({
            event: 'setUserInfo',
            score: JSON.stringify(data)
        });
        console.log("setScore")
    }


    /**
     * 获取排行榜
     */
    public getRank() {
        if (!wx) return;
        wx.postMessage({
            event: 'getRank'
        });
    }

    getRankFriendCallback=null;
    /**
   * 获取排行榜
   */
    public getRankFriend(data={id:"getRankFriend",callback:()=>{}}) {
        if (!wx) return;
        console.log("getRankFriend")
        wx.postMessage({
            event: 'getRankFriend'
        });
        this.getRankFriendCallback=data.callback;
    }

    public onMessage(msg){
          console.log(msg)
    }


    public getUserInfo( callback=(t,res)=>{console.log("获取结果",t,res)}) {
        if(this.isGetUserInfo) return;

        if (typeof wx != "undefined") {
            let w=wx.getWindowInfo();
       
               let  data={
                    type: 'text',
                    text: '',
                    style: {
                      left:  w.screenWidth*0.1,
                      top: w.screenHeight*0.1,
                      width: w.screenWidth*0.8,
                      height: w.screenHeight*0.8,
        
                    }
                  }
            
           
            let but = wx.createUserInfoButton(data);
            console.error("lyk-自己创建",this.isGetUserInfo);
            but.onTap((res) => {
                console.log("点击按钮", res)
                //https://lyk-1305927356.cos.ap-nanjing.myqcloud.com/gameremote/ppl
                // 必须是在用户已经授权的情况下调用
                but.destroy();
                console.error("获取成功",res)
                if(!res.rawData){
                    console.error("获取失败",res)
                    return;
                }
                let rawData=JSON.parse(res.rawData)//{"nickName":"李逍遥","gender":0,"language":"zh_CN","city":"","province":"","country":"","avatarUrl":"https://thirdwx.qlogo.cn/mmopen/vi_32/hpvu3VyBvtvJbbebR8QxLiafb7lXXZS4lJ9G30bfV3ap4SHLTdHWewlBe4RLZ6C19WUibfYffgPFHEhDfsSSLDAPZDd79mda8OAEibGjYlJsO0/132"};
                if(!rawData.avatarUrl){
                    return console.error("获取数据异常")
                }
                rawData.uuid=rawData.avatarUrl;
                var e = cc.sys.localStorage.getItem("screwLevel");
                if (!(null != e && null != e && "" != e)) {
                    e = "1";
                }
                var t = cc.sys.localStorage.getItem("currentLevel");
                if (!(null != t && null != t && "" != t)) {
                    t = "1";
                }
                var n = parseInt(e) - 1 + (parseInt(t) - 1);
                rawData.score=n;
                localStorage.setItem("wx_user_info",JSON.stringify(rawData));
                this.setUserInfo(rawData);
                

                // wx.getUserInfo({
                //     success: function (res) {
                //         wxSDK.isGetUserInfo=true;
                       
                //         console.log("获取权限成功")
                //         let userInfo = res.userInfo
                //         let nickName = userInfo.nickName
                //         let avatarUrl = userInfo.avatarUrl
                //         let gender = userInfo.gender //性别 0：未知、1：男、2：女
                //         let province = userInfo.province
                //         let city = userInfo.city
                //         let country = userInfo.country
                //         callback(1,res);
                        
                //     },
                //     fail: (res) => {
                //         console.log("获取权限失败", res)
                     
                //         callback(0,res);

                //     }
                // })
            })
            console.error("lyk-创建成功");
        }

    }

    public checkUserInfo() {
        if (!wx) return;
        // 通过 wx.getSetting 查询用户是否已授权头像昵称信息
        wx.getSetting({
            success:(res)=> {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称
                    wxsdk.isGetUserInfo=true;
                   console.log("已经获得微信用户权限")
                } else {
                    wxsdk.isGetUserInfo=false;
                   console.log("未微信用户权限")
                }
            },
            fail:()=>{
                console.log("未微信用户权限")
            }
        })
    }

    
 generateRandomID(length=20) {
    // 确保长度至少为1
    length = Math.max(length, 1);
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let id = '';
    for (var i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
   
 

  login(){

    wx.login({
        success(res) {
          if (res.code) {
            const appid = 'your_appid';
            const secret = 'your_appsecret';
            const code = 'your_code';
            
            wx.request({
              url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`,
              success(res) {
                if (res.data.openid) {
                  // 获取到用户的openid
                  console.log('用户openid：', res.data.openid);
                } else {
                  console.log('获取openid失败：', res.data.errmsg);
                }
              }
            });
          } else {
            console.log('登录失败：', res.errMsg);
          }
        }
      });
   


  }


  createClub(){
    if(!wx) return
    let button = wx.createGameClubButton({
        type:'text',
        text:'游戏圈',
        icon: 'green',
        style: {
          left: 10,
          top: 120,
          width: 40,
          height: 40
        },
       // openlink: 'Lv-XO1OgAuqztP4pRyKfZnY2aJKe9aE1'
      })
}

}


export let wxsdk=new wxSDKClass(); 
window["wxsdk"]=wxsdk;
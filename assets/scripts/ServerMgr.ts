class ServerMgr{


    wxFetch(url, data: { body? }, type) {
        cc.log("请求数据", url, data, type)
    
        return new Promise((r, j) => {
          console.log("获取============================================")
          // window["wx"].cloud.init();
          window["wx"].cloud.init();
          window["wx"].cloud.callContainer({
            "config": {
              "env": "prod-0gsxquhn7923f7d3"
            },
            "path": url,
            "header": {
              "X-WX-SERVICE": "express-726d",
              "content-type": "application/json"
            },
            "method": type,
            "data": data.body ? JSON.stringify(data.body) : ""
          }).then((res) => {
            if (res.statusCode == 200) {
              r(res.data);
            } else {
              console.error("云请求错误", res)
              j()
            }
    
          })
    
        })
    
    
      }
}
export let server=new ServerMgr();
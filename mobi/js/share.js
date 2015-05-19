/*******************************
 * @Copyright:万人马拉松
 * @Creation date:2015.4.5
 *******************************/
;(function(window){
   //初始化默认的分享配置
    window._Conf={
        title: _ShareTitle,
        desc:_ShareDesc,
        link: _ShareUrl,
        imgUrl: _ShareImg,
        trigger:function(res){},
        success:function(res){},
        cancel:function(res){},
        fail:function(res){},
        complete:function(res){}
    };
     //声明默认的加载接口
   window._DfJsApiList=[
        'checkJsApi',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'hideMenuItems',
        'showMenuItems'
        ];
   //处理加载config签名
   wx.loadConfig=function(apiConfig){
        if(apiConfig.jsApiList==undefined){
            apiConfig.jsApiList=_DfJsApiList;
        }
        if(apiConfig.debug==undefined){
            apiConfig.debug=false;
            wx.debugstate=false;
        }else{
           wx.debugstate=apiConfig.debug;
        } 
        wx.config(apiConfig);
    };
      
    //组合分享方法
    window._Share=function(){
        wx.showOptionMenu();
        wx.onMenuShareAppMessage(_Conf);
        wx.onMenuShareTimeline(_Conf);
        wx.onMenuShareQQ(_Conf);
        wx.onMenuShareWeibo(_Conf);
    }
    //异常处理
    wx.error(function(res){
        if(wx.debugstate){
            alert(res.errMsg);
        }
    });
})(window);
//签名配置
var apiConfig={
    debug:false,//默认微false
    appId:_appId,
    timestamp:_timestamp,
    nonceStr:_nonceStr,
    signature:_signature,
};
wx.loadConfig(apiConfig);//加载配置
wx.ready(function(){
     _Share();//分享 依赖_Conf变量 参数设置
});
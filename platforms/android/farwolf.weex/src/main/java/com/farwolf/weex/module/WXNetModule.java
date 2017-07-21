package com.farwolf.weex.module;

import com.farwolf.interfac.IHttp;
import com.farwolf.volley.VolleyReq;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by zhengjiangrong on 2017/5/22.
 */

public class WXNetModule extends WXModule {



    public void fetch(boolean usepost, final  String url, HashMap param, HashMap header, final JSCallback start, final JSCallback success, final JSCallback compelete, final JSCallback exception)
    {

       final VolleyReq v=new VolleyReq(mWXSDKInstance.getContext()){

            @Override
            public String getUrl() {
                return url;
            }
        };
        for(Object key :  param.keySet().toArray())
        {
            param.put(key,param.get(key)+"");
        }
        v.addParams(param);
        v.addHeaders(header);


        v.excute(new IHttp() {
            @Override
            public void OnPostStart(Object o) {
                start.invoke(o);
            }

            @Override
            public void OnPostCompelete(Object o) {
                HashMap m=new HashMap();
                try {
//                    com.alibaba.fastjson.JSONObject.parseObject(o+"");
                    Map map = com.alibaba.fastjson.JSON.parseObject(o+"");
                    JSONObject j=new JSONObject(o+"");
                    m.put("res",map);
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                m.put("sessionid",v.getCookie());
                compelete.invoke(m);

                success.invoke(m);

            }

            @Override
            public void OnException(Object o) {
                 compelete.invoke(o);
                 exception.invoke(o);

            }
        },usepost);




    }

    @JSMethod
    public void post(String url , HashMap param, HashMap header, final JSCallback start, final JSCallback success, final JSCallback compelete, final JSCallback exception)
    {
        this.fetch(true,url,param,header,start,success,compelete,exception);
    }

    @JSMethod
    public void get(String url , HashMap param, HashMap header, final JSCallback start, final JSCallback success, final JSCallback compelete, final JSCallback exception)
    {
        this.fetch(false,url,param,header,start,success,compelete,exception);
    }

}

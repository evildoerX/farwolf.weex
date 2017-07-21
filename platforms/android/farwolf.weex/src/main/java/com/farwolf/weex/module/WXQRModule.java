package com.farwolf.weex.module;

import android.app.Activity;
import android.content.Intent;

import com.farwolf.weex.activity.QrActivity_;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

/**
 * Created by zhengjiangrong on 2017/7/16.
 */

public class WXQRModule extends WXModule {


    JSCallback callback;

    public void open(JSCallback callback){
        this.callback=callback;
        Intent in=new Intent(this.mWXSDKInstance.getContext(), QrActivity_.class);
        ((Activity)this.mWXSDKInstance.getContext()).startActivityForResult(in,2);
    }


    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {

        if(requestCode==2)
        {
            if(resultCode==1)
            {
                String url=data.getStringExtra("url");
                callback.invokeAndKeepAlive(url);
            }
        }

    }
}

package com.farwolf.weex.module;

import android.content.Context;
import android.content.SharedPreferences;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

/**
 * Created by zhengjiangrong on 2017/6/18.
 */

public class WXPrefModule extends WXModule {


    @JSMethod
    public void set(String key,String value)
    {
        SharedPreferences sharedPreferences = this.mWXSDKInstance.getContext().getSharedPreferences("farwolf_weex", Context.MODE_PRIVATE); //私有数据
        SharedPreferences.Editor editor = sharedPreferences.edit();//获取编辑器
        editor.putString(key, value);
        editor.apply();

        editor.commit();
    }

    @JSMethod(uiThread = false)
    public String get(String key)
    {
        SharedPreferences sharedPreferences = this.mWXSDKInstance.getContext().getSharedPreferences("farwolf_weex", Context.MODE_PRIVATE); //私有数据
        return  sharedPreferences.getString(key,null);

    }


    @JSMethod
    public void remove(String key)
    {
        SharedPreferences sharedPreferences = this.mWXSDKInstance.getContext().getSharedPreferences("farwolf_weex", Context.MODE_PRIVATE); //私有数据
        SharedPreferences.Editor editor = sharedPreferences.edit();//获取编辑器
        editor.remove(key);
    }



}

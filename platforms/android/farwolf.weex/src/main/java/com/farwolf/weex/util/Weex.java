package com.farwolf.weex.util;

import android.app.Application;
import android.content.Context;
import android.graphics.Bitmap;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.farwolf.base.ServiceBase;
import com.farwolf.util.FileTool;
import com.farwolf.weex.component.WXFEmbed;
import com.farwolf.weex.component.WXFImage;
import com.farwolf.weex.component.WXFScrollView;
import com.farwolf.weex.component.WXItem;
import com.farwolf.weex.component.WXLoading;
import com.farwolf.weex.component.WXViewPager;
import com.farwolf.weex.component.WXWheelView;
import com.farwolf.weex.module.WXEventModule;
import com.farwolf.weex.module.WXFPicker;
import com.farwolf.weex.module.WXFarwolfModule;
import com.farwolf.weex.module.WXNavBarModule;
import com.farwolf.weex.module.WXNavgationModule;
import com.farwolf.weex.module.WXNetModule;
import com.farwolf.weex.module.WXNotifyModule;
import com.farwolf.weex.module.WXPhotoModule;
import com.farwolf.weex.module.WXPrefModule;
import com.farwolf.weex.module.WXProgressModule;
import com.farwolf.weex.module.WXQRModule;
import com.farwolf.weex.module.WXStaticModule;
import com.farwolf.weex.pref.WeexPref_;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXEnvironment;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXException;

import org.androidannotations.annotations.EBean;
import org.androidannotations.annotations.sharedpreferences.Pref;

/**
 * Created by zhengjiangrong on 2017/5/8.
 */
@EBean
public class Weex extends ServiceBase{



    @Pref
    WeexPref_ pref;

    public static String basedir;
    public static String baseurl;


    public   void startDebug(String ip) {
//        WXEnvironment.sDebugServerConnectable = true;
        WXEnvironment.sRemoteDebugMode = true;
        WXEnvironment.sRemoteDebugProxyUrl ="w://"+ip+":8088/debugProxy/native";
        WXSDKEngine.reload();
    }
    public   void startDebug() {
        startDebug(pref.ip().get());
    }

    public   String getDebugUrl()
    {
        return  "ws://" + pref.ip().get() + ":8088/debugProxy/native";
    }



    public void init(Application application, String name, String groupname,String basedir)
    {
        Weex.basedir=basedir;
        WXSDKEngine.addCustomOptions("appName", name);
        WXSDKEngine.addCustomOptions("appGroup", groupname);
        WXSDKEngine.initialize(application,
                new InitConfig.Builder()
                        .setImgAdapter(new ImageAdapter())
                        .build());
        try {
            WXSDKEngine.registerModule("event", WXEventModule.class);
            WXSDKEngine.registerModule("navbar", WXNavBarModule.class);
            WXSDKEngine.registerModule("navigator", WXNavgationModule.class);
            WXSDKEngine.registerModule("notify", WXNotifyModule.class);
            WXSDKEngine.registerModule("net", WXNetModule.class);
            WXSDKEngine.registerModule("photo", WXPhotoModule.class);
            WXSDKEngine.registerModule("static", WXStaticModule.class);
            WXSDKEngine.registerModule("farwolf", WXFarwolfModule.class);
            WXSDKEngine.registerModule("pref", WXPrefModule.class);
            WXSDKEngine.registerModule("fpicker", WXFPicker.class);
            WXSDKEngine.registerModule("progress", WXProgressModule.class);
            WXSDKEngine.registerModule("qr", WXQRModule.class);
            WXSDKEngine.registerComponent("image",WXFImage.class);
            WXSDKEngine.registerComponent("viewpager",WXViewPager.class);
            WXSDKEngine.registerComponent("item",WXItem.class);
            WXSDKEngine.registerComponent("floading",WXLoading.class);
            WXSDKEngine.registerComponent("fscroller",WXFScrollView.class);
            WXSDKEngine.registerComponent("embed",WXFEmbed.class);
            WXSDKEngine.registerComponent("a",com.farwolf.weex.component.WXA.class);
            WXSDKEngine.registerComponent("wheel",WXWheelView.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }



    public static void downloadImg(String url, ImageView img, Context context)
    {

        if(url==null)
            return;
        if(url.startsWith("http"))
        {
            Glide.with(context).load(url).into(img);
        }
        else
        {
            if(url.startsWith("/"))
            {
                url=url.substring(1);
            }
            Bitmap bm= FileTool.loadAssetImage(url,context);
            img.setImageBitmap(bm);
        }
    }



    public static void setBaseUrl(WXSDKInstance instance)
    {

       String s= instance.getBundleUrl();

        if(s.startsWith("http"))
        {
            String x[]=instance.getBundleUrl().split("\\/");

            if(x.length>3)
            {
                String res= x[0]+"//"+x[2]+"/"+Weex.basedir;
                if(!res.endsWith("/"))
                    res+="/";
                 baseurl=res;
            }
        }
        else
        {
            baseurl="app/";

        }
    }


//    public static String getUrl(String url)
//    {
//        if(url.startsWith("root:"))
//            return   url.replace("root:",Weex.baseurl);
//
//    }
    public static String getRootUrl(String url, WXSDKInstance  instance)
    {

        if(url.contains("root:"))
        {
               String q[]=url.split("root:");

               if(instance.getBundleUrl().startsWith("http"))
               {
                   String x[]=instance.getBundleUrl().split("\\/");

                   if(x.length>3)
                   {
                       String res= x[0]+"//"+x[2]+"/"+Weex.basedir;
                       if(!res.endsWith("/"))
                           res+="/";
                       url=res+url.replace("root:","");

                   }
               }
               else
               {
                   url="app/"+q[1];
               }
            return url;
        }


        return url;


    }



}

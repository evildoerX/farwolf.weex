package com.farwolf.weex.module;

import android.app.Activity;
import android.graphics.Color;
import android.os.Build;
import android.util.Log;
import android.view.View;
import android.view.Window;

import com.farwolf.util.StringUtil;
import com.farwolf.weex.base.WXModuleBase;
import com.farwolf.weex.util.Weex;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

/**
 * Created by zhengjiangrong on 2017/5/10.
 */

/**
 * 导航栏
 *
 */
public class WXNavBarModule extends WXModuleBase {


    /**
     * 设置标题
     * @param title
     */
    @JSMethod
    public void setTitle(String title)
    {

         if(getTitleBar()!=null)
         getTitleBar().setTitle(title);
    }

    /**
     * 设置标题颜色
     * @param color
     */
    @JSMethod
    public void setTitleColor(String color)
    {
        if(getTitleBar()!=null)
        getTitleBar().title.setTextColor(Color.parseColor(color));
    }

    /**
     * 设置左边的返回图标,点击会关掉当前页面
     * @param back true添加返回功能
     * @param style 黑白2中可选 white black
     */
    @JSMethod
    public void setBack(boolean back,String style)
    {
        if(getTitleBar()==null)
            return;
           if(back)
           {
               getTitleBar().setBack();
               if("black".equals(style))
               {
//
                   getTitleBar().leftimage.setBackgroundResource(com.farwolf.libary.R.drawable.api_black_back_selector);

               }
           }
           else
           {
               getTitleBar().leftview.setVisibility(View.GONE);
               getTitleBar().setLeftClick(null);

           }
    }


    /**
     * 设置导航栏透明(还有问题)
     */
    @JSMethod
    public void makeTransparent()
    {
        getTitleBar().layout.setBackgroundColor(Color.TRANSPARENT);

    }


    /**
     * 导航栏底部有条细线,设置隐藏活显示
     * @param hide
     */
    @JSMethod
    public void hideBottomLine(boolean hide)
    {
        if(hide)
        {
            getTitleBar().bottomline.setVisibility(View.GONE);
        }
        else
        {
            getTitleBar().bottomline.setVisibility(View.VISIBLE);
        }
    }


    /**
     * 设置状态栏颜色(黑白2种可选,white,black)还有问题
     * @param style
     */
    @JSMethod
    public void setStatusBarStyle( String style)
    {
        try {
            if (Build.VERSION.SDK_INT >= 21) {
                Window window = ((Activity)this.mWXSDKInstance.getContext()).getWindow();
//                window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);

                if("black".equals(style))
                {

                    setStatusBarIconDark(true);
//                    window.setStatusBarColor(Color.BLACK);
//                    setMiuiStatusBarDarkMode(((Activity)this.mWXSDKInstance.getContext()),true);
//                    window.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
                }
                else
                {
                    setStatusBarIconDark(false);
//                    setMiuiStatusBarDarkMode(((Activity)this.mWXSDKInstance.getContext()),false);
//                    window.setStatusBarColor(Color.WHITE);
                }


                //底部导航栏
                //window.setNavigationBarColor(activity.getResources().getColor(colorResId));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void setStatusBarIconDark(boolean dark) {
        try {
            Object win  = ((Activity)this.mWXSDKInstance.getContext()).getWindow();
            Class<?> cls = win.getClass();
            Method method = cls.getDeclaredMethod("setStatusBarIconDark", boolean.class);
            method.invoke(win, dark);
        } catch (Exception e) {
            Log.v("ff", "statusBarIconDark,e=" + e);
        }
    }

    public static boolean setMiuiStatusBarDarkMode(Activity activity, boolean darkmode) {
        Class<? extends Window> clazz = activity.getWindow().getClass();
        try {
            int darkModeFlag = 0;
            Class<?> layoutParams = Class.forName("android.view.MiuiWindowManager$LayoutParams");
            Field field = layoutParams.getField("EXTRA_FLAG_STATUS_BAR_DARK_MODE");
            darkModeFlag = field.getInt(layoutParams);
            Method extraFlagField = clazz.getMethod("setExtraFlags", int.class, int.class);
            extraFlagField.invoke(activity.getWindow(), darkmode ? darkModeFlag : 0, darkModeFlag);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }



    public boolean setStatusBarLightMode(Activity activity, boolean isFontColorDark) {
        Window window = activity.getWindow();
        boolean result = false;
        if (window != null) {
            Class clazz = window.getClass();
            try {
                int darkModeFlag = 0;
                Class layoutParams = Class.forName("android.view.MiuiWindowManager$LayoutParams");
                Field field = layoutParams.getField("EXTRA_FLAG_STATUS_BAR_DARK_MODE");
                darkModeFlag = field.getInt(layoutParams);
                Method extraFlagField = clazz.getMethod("setExtraFlags", int.class, int.class);
                if (isFontColorDark) {
                    extraFlagField.invoke(window, darkModeFlag, darkModeFlag);//状态栏透明且黑色字体
                } else {
                    extraFlagField.invoke(window, 0, darkModeFlag);//清除黑色字体
                }
                result = true;
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return result;
    }


    /**
     * 隐藏导航栏
     */
    @JSMethod
    public void hide()
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().setVisibility(View.GONE);
    }


    @JSMethod
    public void show()
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().setVisibility(View.VISIBLE);
    }

    /**
     * 设置导航栏颜色
     * @param color
     */
    @JSMethod
    public void setBackgroundColor(String color)
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().layout.setBackgroundColor(Color.parseColor(color));
    }

    /**
     * 设置右边的文字
     * @param text
     * @param color
     * @param callback
     */
    @JSMethod
    public void setRightText(String text,String color,final JSCallback callback)
    {
        getTitleBar().setRightText(text);
        getTitleBar().setRightTextColor(color);
        getTitleBar().setRightClick(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                callback.invokeAndKeepAlive(null);
            }
        });
    }

    /**
     * 设置左边边的文字
     * @param text
     *
     *
     */
    @JSMethod
    public void setLeftText(String text)
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().setLeftText(text);
    }

    /**
     * 设置右边的图片
     * @param src
     * @param callback
     */
    @JSMethod
    public void setRightImage(String src,final JSCallback callback)
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().rightview.setVisibility(View.VISIBLE);
        getTitleBar().right_image.setVisibility(View.VISIBLE);
        getTitleBar().setRightClick(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                callback.invokeAndKeepAlive(null);
            }
        });
        src=StringUtil.getRealUrl(this.mWXSDKInstance.getBundleUrl(),src);

        Weex.downloadImg(src, getTitleBar().right_image,this.mWXSDKInstance.getContext());
    }

    /**
     * 设置左边的图片
     * @param src
     * @param callback
     */
    @JSMethod
    public void setLeftImage(String src,final JSCallback callback)
    {
        if(getTitleBar()==null)
            return;
        getTitleBar().leftview.setVisibility(View.VISIBLE);
        getTitleBar().leftimage.setVisibility(View.VISIBLE);
        getTitleBar().leftimage.setBackgroundDrawable(null);
        getTitleBar().setLeftClick(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                callback.invokeAndKeepAlive(null);
            }
        });
        src=StringUtil.getRealUrl(this.mWXSDKInstance.getBundleUrl(),src);

        Weex.downloadImg(src, getTitleBar().leftimage,this.mWXSDKInstance.getContext());
    }

}

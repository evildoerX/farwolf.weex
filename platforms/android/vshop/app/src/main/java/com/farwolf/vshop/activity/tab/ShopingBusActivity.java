package com.farwolf.vshop.activity.tab;

import com.farwolf.util.ScreenTool;
import com.farwolf.vshop.R;
import com.farwolf.weex.activity.WeexActivity;

import org.androidannotations.annotations.Bean;
import org.androidannotations.annotations.EActivity;

/**
 * Created by zhengjiangrong on 2017/5/23.
 */
@EActivity
public class ShopingBusActivity extends WeexActivity {


    @Bean
    ScreenTool tool;

    @Override
    public void init() {
        this.title.setTitle("购物车");

        render("app/busi/tab/shopbus/shopbus.js",false);
    }


    @Override
    public int getViewId() {
        return R.layout.app_weex_activity;
    }
}

package com.farwolf.vshop.activity.tab;

import com.farwolf.vshop.R;
import com.farwolf.weex.activity.WeexActivity;

import org.androidannotations.annotations.EActivity;

/**
 * Created by zhengjiangrong on 2017/5/23.
 */
@EActivity
public class CollectionActivity  extends WeexActivity {


//    @Override
//    public FragmentBase getFragment() {
//        return   new CollectionFragment_();
//    }
//
//    @Override
//    public void init() {
//        this.title.setTitle("关注");
//    }


    @Override
    public void init() {
        this.title.setTitle("分类");

        render("app/busi/tab/collection/collection.js",false);
//        render("http://192.168.2.101:9898/busi/tab/collection/collection.js",false);
    }

    @Override
    public int getViewId() {
        return R.layout.app_weex_activity;
    }

}

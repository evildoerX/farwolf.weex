package com.farwolf.vshop;

import android.view.View;

import com.farwolf.weex.activity.WeexActivity;

import org.androidannotations.annotations.Click;
import org.androidannotations.annotations.EActivity;

@EActivity
public class MainActivity extends WeexActivity {




    @Override
    public void init() {

        url=pref.url().get();

        this.title.setBack();
        this.title.setRightImage(R.drawable.refresh_selector);
//        this.title.rightview.setVisibility(View.VISIBLE);
//        this.title.right_image.setBackgroundResource(R.drawable.refresh_selector);
        this.title.setRightClick(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
//                showTool();
//                weexFactory.jump("index.js",SecondActivity_.class);
                render(url);

            }
        });

        this.title.rightview.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                showTool();
                return false;
            }
        });


//        render("app/busi/tab/collection/collection.js");

          render("http://192.168.2.117:9898/busi/goods/search.js");
//          render("http://192.168.2.117:9898/busi/account/login.js");





    }


    @Override
    public int getViewId() {
        return R.layout.main_activity;
    }


    @Click
    public void refreshClicked() {
        render(url);

    }
}

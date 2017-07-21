package com.farwolf.weex.view;

import android.content.Context;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.farwolf.base.ViewBase;
import com.farwolf.util.ScreenTool;
import com.farwolf.util.ScreenTool_;
import com.farwolf.view.pickerview.ArrayWheelAdapter;
import com.farwolf.view.pickerview.OnItemSelectedListener;
import com.farwolf.view.pickerview.WheelView;
import com.farwolf.weex.R;
import com.farwolf.weex.activity.WeexActivity;

import org.androidannotations.annotations.Click;
import org.androidannotations.annotations.EViewGroup;
import org.androidannotations.annotations.ViewById;

import java.util.ArrayList;

/**
 * Created by zhengjiangrong on 2017/7/18.
 */

@EViewGroup
public class Picker  extends ViewBase {


    @ViewById
    TextView tvTitle;
    @ViewById
    public WheelView options1;
    @ViewById
    public WheelView options2;
    @ViewById
    public WheelView options3;

    @ViewById
    LinearLayout optionspicker;

    public Picker(Context context) {
        super(context);


    }

    public void setOnChangeListener( OnItemSelectedListener l1, OnItemSelectedListener l2, OnItemSelectedListener l3)
    {
        this.options1.setOnItemSelectedListener(l1);
        this.options2.setOnItemSelectedListener(l2);
        this.options3.setOnItemSelectedListener(l3);
    }

    @Override
    public int getViewId() {
        return R.layout.picker;
    }

    @Override
    public void init() {
        this.options1.setCyclic(false);
        this.options2.setCyclic(false);
        this.options3.setCyclic(false);
        int textSize = 25;
        options1.setTextSize(textSize);
        options2.setTextSize(textSize);
        options3.setTextSize(textSize);
    }

    public void setCount(int count)
    {
//        if(count==2)
//        {
//            this.options3.setVisibility(View.GONE);
//        }
//        if(count==1)
//        {
//            this.options3.setVisibility(View.GONE);
//            this.options2.setVisibility(View.GONE);
//
//        }

    }





    public void select(int p ,int row)
    {
         if(p==1)
         {
             this.options1.setCurrentItem(row);
         }
         else if(p==2)
         {
            this.options2.setCurrentItem(row);
         }
         else if(p==3)
         {
             this.options3.setCurrentItem(row);
         }

    }


    public void show()
    {
        this.setVisibility(View.GONE);
        if(this.getParent()==null)
        {
            ScreenTool tool= ScreenTool_.getInstance_(getContext());
            RelativeLayout.LayoutParams lp=new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT,tool.toDip(300));
            lp.addRule( RelativeLayout.ALIGN_PARENT_BOTTOM);
            this.setLayoutParams(lp);
            ((WeexActivity) getActivity()).root.addView(this);
        }
        else
        {
            this.setVisibility(View.VISIBLE);
        }
        Animation an= AnimationUtils.loadAnimation(this.getContext(), R.anim.picker_com);
        an.setAnimationListener(new Animation.AnimationListener() {
            @Override
            public void onAnimationStart(Animation animation) {

            }

            @Override
            public void onAnimationEnd(Animation animation) {
                Picker.this.setVisibility(View.VISIBLE);
            }

            @Override
            public void onAnimationRepeat(Animation animation) {

            }
        });


        this.startAnimation(an);



    }

    public void dismiss()
    {

        Animation an= AnimationUtils.loadAnimation(this.getContext(), R.anim.picker_gone);

        an.setAnimationListener(new Animation.AnimationListener() {
            @Override
            public void onAnimationStart(Animation animation) {

            }

            @Override
            public void onAnimationEnd(Animation animation) {
                Picker.this.setVisibility(View.GONE);
            }

            @Override
            public void onAnimationRepeat(Animation animation) {

            }
        });
        this.startAnimation(an);
//        this.setVisibility(View.GONE);
    }


    public void setItems1(ArrayList d)
    {
        this.options1.setAdapter(new ArrayWheelAdapter(d));
    }

    public void setItems2(ArrayList d)
    {
        this.options2.setAdapter(new ArrayWheelAdapter(d));
    }

    public void setItems3(ArrayList d)
    {
        this.options3.setAdapter(new ArrayWheelAdapter(d));
    }

    OnClickListener doneListener;
    public void  setDoneListener(OnClickListener listener)
    {
          this.doneListener=listener;
    }

    @Click
    public void btnCancelClicked() {

        dismiss();
    }

    @Click
    public void btnSubmitClicked() {

        dismiss();
        if(doneListener!=null)
        doneListener.onClick(this);
    }
}

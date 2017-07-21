package com.farwolf.vshop;

import com.farwolf.base.FragmentBase;
import com.farwolf.base.OneFragmentActivity;
import com.farwolf.vshop.fragment.CollectionFragment_;

import org.androidannotations.annotations.EActivity;

/**
 * Created by zhengjiangrong on 2017/6/23.
 */

@EActivity
public class BounceActivity extends OneFragmentActivity {


    @Override
    public FragmentBase getFragment() {
        return   new CollectionFragment_();
    }

    @Override
    public void init() {

    }
}

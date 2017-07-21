package com.farwolf.weex.fragment;

import android.content.Context;
import android.os.Bundle;
import android.view.View;
import android.widget.FrameLayout;

import com.farwolf.base.FragmentBase;
import com.farwolf.util.FileTool;
import com.farwolf.weex.R;
import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;

import org.androidannotations.annotations.EFragment;
import org.androidannotations.annotations.ViewById;

import java.io.IOException;
import java.util.HashMap;

@EFragment
public class WeexFragment extends FragmentBase implements IWXRenderListener {


  @ViewById
  FrameLayout fragment_container;

  private String mBundleUrl;




  private WXSDKInstance mWXSDKInstance;

  public WeexFragment(){

  }

  public static WeexFragment_ newInstance(String bundleUrl) {
    WeexFragment_ fragment = new WeexFragment_();
//    fragment.setCache(true);
    Bundle args = new Bundle();
    args.putString(WXSDKInstance.BUNDLE_URL, bundleUrl);
    fragment.setArguments(args);
    return fragment;
  }


  @Override
  public void onAttach(Context context) {
    super.onAttach(context);
  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    mBundleUrl = getArguments() != null ? getArguments().getString(WXSDKInstance.BUNDLE_URL) : null;
    mWXSDKInstance = new WXSDKInstance(getActivity());
    mWXSDKInstance.registerRenderListener(this);
    HashMap<String, Object> options = new HashMap<>();
    options.put(WXSDKInstance.BUNDLE_URL, mBundleUrl);



    if(mBundleUrl.startsWith("http"))
    {
      mWXSDKInstance.renderByUrl("farwolf", mBundleUrl, null, null, WXRenderStrategy.APPEND_ASYNC);
    }
    else
    {
      try {
        mWXSDKInstance.render("farwolf", FileTool.loadAsset(mBundleUrl, this.getContext()), null, null, WXRenderStrategy.APPEND_ASYNC);
      } catch (IOException e) {
        e.printStackTrace();
      }
    }
    super.onCreate(savedInstanceState);



  }

  @Override
  public int getViewId() {
    return  R.layout.fragment_weex;
  }



  @Override
  public void onStart() {
    super.onStart();
    if(mWXSDKInstance!=null){
      mWXSDKInstance.onActivityStart();
    }
  }

  @Override
  public void onResume() {
    super.onResume();
    if(mWXSDKInstance!=null){
      mWXSDKInstance.onActivityResume();
    }
  }

  @Override
  public void onPause() {
    super.onPause();
    if(mWXSDKInstance!=null){
      mWXSDKInstance.onActivityPause();
    }
  }

  @Override
  public void onStop() {
    super.onStop();
    if(mWXSDKInstance!=null){
      mWXSDKInstance.onActivityStop();
    }
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
    if(mWXSDKInstance!=null){
      mWXSDKInstance.onActivityDestroy();
    }
  }

  @Override
  public void onDetach() {
    super.onDetach();
  }

  @Override
  public void onViewCreated(WXSDKInstance instance, View view) {
    fragment_container.addView(view);
  }

  @Override
  public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

  }

  @Override
  public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

  }

  @Override
  public void onException(WXSDKInstance instance, String errCode, String msg) {

  }
}

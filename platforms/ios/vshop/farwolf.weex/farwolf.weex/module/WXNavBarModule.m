//
//  WXNavBarModule.m
//  Pods
//
//  Created by 郑江荣 on 2017/5/5.
//
//

#import "WXNavBarModule.h"
#import "farwolf.h"

@implementation WXNavBarModule
@synthesize weexInstance;
WX_EXPORT_METHOD(@selector(hide))
WX_EXPORT_METHOD(@selector(show))
WX_EXPORT_METHOD(@selector(setTitle:))
WX_EXPORT_METHOD(@selector(setBackgroundColor:))
WX_EXPORT_METHOD(@selector(setTitleColor:))
WX_EXPORT_METHOD(@selector(setBack:style:))
WX_EXPORT_METHOD(@selector(setRightText:color:callback:))
WX_EXPORT_METHOD(@selector(setRightImage:callback:))
WX_EXPORT_METHOD(@selector(setLeftImage:callback:))
WX_EXPORT_METHOD(@selector(setStatusBarStyle:))
WX_EXPORT_METHOD(@selector(makeTransparent))
WX_EXPORT_METHOD(@selector(makeUnTransparent))
WX_EXPORT_METHOD(@selector(hideBottomLine:))

-(void)hide
{
    weexInstance.viewController.navigationController.navigationBar.translucent=YES;
    [weexInstance.viewController.navigationController.navigationBar setHidden:true];
}
-(void)show
{
    weexInstance.viewController.navigationController.navigationBar.translucent=NO;
    [weexInstance.viewController.navigationController.navigationBar setHidden:false];
}
-(void)setTitle:(NSString*)s
{
    weexInstance.viewController.title=s;
}
-(void)setBackgroundColor:(NSString*)color
{
    [weexInstance.viewController.navigationController.navigationBar setBarTintColor:[color toColor]];
}
-(void)setTitleColor:(NSString*)color
{
    [weexInstance.viewController.navigationController.navigationBar setTitleTextAttributes:@{NSForegroundColorAttributeName : [color toColor]}];
}

-(void)setBack:(BOOL)back style:(NSString*)style
{
    UINavigationItem *item=[[UINavigationItem alloc]init];
//   weexInstance.viewController.navigationItem.le
    UIImage *img=[UIImage imageNamed:@"backwhit"];
    UIBarButtonItem *btn=[[UIBarButtonItem alloc]initWithImage:img style:UIBarButtonItemStylePlain target: self   action:@selector(dismiss)];
    
    if([@"black" isEqualToString:style])
    {
        [btn setTintColor:[UIColor blackColor]];
    }
    else
    {
        [btn setTintColor:[UIColor whiteColor]];
    }
    [btn setAction:@selector(back)];
    
//    if( weexInstance.viewController.navigationController.childViewControllers.count==1)
//    {
        weexInstance.viewController.navigationItem.leftBarButtonItem=btn;
//    }
    [weexInstance.viewController.navigationController.navigationBar setShadowImage:[UIImage new]];
}
-(void)back{
    [ weexInstance.viewController back:true];
}

-(void)setStatusBarStyle:(NSString*)style
{
    if([style isEqualToString:@"white"])
    {
        [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleLightContent];
    }
    else if([style isEqualToString:@"black"])
    {
           [[UIApplication sharedApplication] setStatusBarStyle:UIStatusBarStyleDefault];
    }
//    [UIApplication sharedApplication] setStatusBarStyle:<#(UIStatusBarStyle)#>;
}

-(void)dismiss
{
    [weexInstance.viewController.navigationController dismiss:true ];
}

-(void)setRightText:(NSString*)text color:(NSString*)color callback:(WXModuleKeepAliveCallback)callback
{
    self.rightClickCallback=callback;
    UIBarButtonItem *btn=[[UIBarButtonItem alloc]initWithTitle:text style:UIBarButtonItemStylePlain target:self action:@selector(rightClick)];
    [btn setTintColor:[color toColor]];
    weexInstance.viewController.navigationItem.rightBarButtonItem=btn;
    
}

-(void)setLeftImage:(NSString*)src  callback:(WXModuleKeepAliveCallback)callback
{
    
    self.rightClickCallback=callback;
    UIButton* rightButton = [[UIButton alloc]initWithFrame:CGRectMake(0,0,18,18)];
    src=[Weex getFinalUrl:src weexInstance:self.weexInstance];
    [Weex setImageSource:src compelete:^(UIImage *img) {
        
        [rightButton setImage:img forState:UIControlStateNormal];
    }];
    
    [rightButton addTarget:self action:@selector(rightClick) forControlEvents:UIControlEventTouchUpInside];
    UIBarButtonItem*rightItem = [[UIBarButtonItem alloc]initWithCustomView:rightButton];
    weexInstance.viewController.navigationItem.leftBarButtonItem=rightItem;
    
    
}

-(void)setRightImage:(NSString*)src callback:(WXModuleKeepAliveCallback)callback
{
 
    self.rightClickCallback=callback;
    UIButton* rightButton = [[UIButton alloc]initWithFrame:CGRectMake(0,0,18,18)];
     src=[Weex getFinalUrl:src weexInstance:self.weexInstance];
    [Weex setImageSource:src compelete:^(UIImage *img) {
       
                  [rightButton setImage:img forState:UIControlStateNormal];
            }];
    
    [rightButton addTarget:self action:@selector(rightClick) forControlEvents:UIControlEventTouchUpInside];
    UIBarButtonItem*rightItem = [[UIBarButtonItem alloc]initWithCustomView:rightButton];
     weexInstance.viewController.navigationItem.rightBarButtonItem=rightItem;
    
   
}

-(void)rightClick
{
    self.rightClickCallback(@{},true);
 
}

-(void) makeTransparent
{
    
    [weexInstance.viewController.navigationController.navigationBar setBackgroundImage:[UIImage new] forBarMetrics:UIBarMetricsDefault];
    
    weexInstance.viewController.navigationController.navigationBar.shadowImage = [UIImage new];

//    weexInstance.viewController.navigationController.navigationBar.translucent=true;
   
//    [weexInstance.viewController.navigationController.navigationBar setBackgroundColor:[UIColor whiteColor]];
// [weexInstance.viewController.navigationController.navigationBar setBarTintColor:[UIColor whiteColor]];
}



-(void) makeUnTransparent
{
    
    [weexInstance.viewController.navigationController.navigationBar setBackgroundImage:nil forBarMetrics:UIBarMetricsDefault];
    [weexInstance.viewController.navigationController.navigationBar setBackgroundColor:[UIColor whiteColor]];
//     weexInstance.viewController.navigationController.navigationBar.translucent=false;
       weexInstance.viewController.navigationController.navigationBar.shadowImage =nil;
   
}


-(void)hideBottomLine:(BOOL)hide
{
    if(hide)
    {

        
        [weexInstance.viewController.navigationController.navigationBar setBackgroundImage:[UIImage new]
                                                     forBarPosition:UIBarPositionAny
                                                         barMetrics:UIBarMetricsDefault];
        
        [weexInstance.viewController.navigationController.navigationBar setShadowImage:[UIImage new]];
//       weexInstance.viewController.navigationController.navigationBar.clipsToBounds = YES;
    }
    else{
         [weexInstance.viewController.navigationController.navigationBar setBackgroundImage:[UIImage new]  forBarMetrics:UIBarMetricsDefault];
//           weexInstance.viewController.navigationController.navigationBar.clipsToBounds = false;
    }
}
@end

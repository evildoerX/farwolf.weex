//
//  ViewController.m
//  vshop
//
//  Created by 郑江荣 on 2017/5/18.
//  Copyright © 2017年 郑江荣. All rights reserved.
//

#import "ViewController.h"
#import "SplashControl.h"
@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
 

  NSString *s=@"http://192.168.1.100:9898/mv/busi/tab/serial.js";
//     NSString *s=@"http://192.168.2.117:9898/busi/tab/main/mainpage.js";
//      self.page=[SplashControl getPage:@"主页"];
    self.sourceURL=[NSURL URLWithString:s];
//    self.sourceURL = [[NSBundle mainBundle] URLForResource:@"app/busi/tab/mainpage" withExtension:@"js"];
    [[UIApplication sharedApplication]setStatusBarStyle:UIStatusBarStyleLightContent];
    [super viewDidLoad];
    [[UIApplication sharedApplication]setStatusBarHidden:false];
    // Do any additional setup after loading the view, typically from a nib.
}


-(UIStatusBarStyle)preferredStatusBarStyle
{
    return UIStatusBarStyleLightContent;
}
- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


-(void)viewWillAppear:(BOOL)animated
{
    self.navbarVisibility =@"hidden";
    [super viewWillAppear:animated];
    [[UIApplication sharedApplication]setStatusBarStyle:UIStatusBarStyleLightContent];
}
@end

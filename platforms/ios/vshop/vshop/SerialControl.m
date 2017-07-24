//
//  SerialControl.m
//  vshop
//
//  Created by 郑江荣 on 2017/7/16.
//  Copyright © 2017年 郑江荣. All rights reserved.
//

#import "SerialControl.h"
#import "SplashControl.h"

@implementation SerialControl
- (void)viewDidLoad {
    self.page=[SplashControl getPage:@"电视剧"];
    [super viewDidLoad];
    
 
}


-(void)viewWillAppear:(BOOL)animated
{
    self.navbarVisibility =@"hidden";
    [super viewWillAppear:animated];
    [[UIApplication sharedApplication]setStatusBarStyle:UIStatusBarStyleLightContent];
}

@end

//
//  SplashControl.m
//  vshop
//
//  Created by 郑江荣 on 2017/6/15.
//  Copyright © 2017年 郑江荣. All rights reserved.
//

#import "SplashControl.h"
#import "Page.h"
#import "WeexFactory.h"
static NSMutableDictionary<NSString*,Page*> *cache;
   
@interface SplashControl ()


@end

@implementation SplashControl

+(Page*)getPage:(NSString*)key
{
    return cache[key];
}
- (void)viewDidLoad {
    [super viewDidLoad];
    cache=[ NSMutableDictionary<NSString*,Page*> new];
    _count=0;
    NSMutableDictionary *d=[NSMutableDictionary new];
//    [d setValue:@"app/demo/login" forKey:@"推荐"];
//    [d setValue:@"app/demo/switch" forKey:@"电视剧"];
    [d setValue:@"app/demo/index" forKey:@"电影"];
//    [d setValue:@"app/demo/vlist" forKey:@"关注"];
//    [d setValue:@"app/demo/wechat" forKey:@"我的"];
 
    for(NSString* key in   d.allKeys)
    {
     
        NSString *s=[d objectForKey:key];
        NSURL *url=[[NSBundle mainBundle] URLForResource:s withExtension:@"js"];
        
        [WeexFactory render:url compelete:^(Page *p) {
    
           
            [cache setObject:p forKey:key];
            _count++;
            if(_count==1)
            {
                 [self present:@"Main/TabControl" anim:false];
                [self back:true];
            }
        }];
    }
    
    
    
    
    // Do any additional setup after loading the view.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end

//
//  WXStaticModule.m
//  Pods
//
//  Created by 郑江荣 on 2017/6/14.
//
//

#import "WXStaticModule.h"

@implementation WXStaticModule
@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(get:))
WX_EXPORT_METHOD(@selector(set:value:))
-(id)get:(NSString*)key
{
    if(map==nil)
        return nil;
    return [map objectForKey:key];
}

-(void)set:(NSString*)key value:(NSObject*)V
{
    if(map==nil)
        map=[NSMutableDictionary new];
    [map setValue:V forKey:key];
}

@end

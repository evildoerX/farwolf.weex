//
//  WXPrefModule.m
//  Pods
//
//  Created by 郑江荣 on 2017/7/13.
//
//

#import "WXPrefModule.h"
#import "farwolf.h"


@implementation WXPrefModule
WX_EXPORT_METHOD_SYNC(@selector(get:))
WX_EXPORT_METHOD(@selector(remove:))
WX_EXPORT_METHOD(@selector(set:value:))
-(void)set:(NSString*)key value:(NSString*)v
{
    [v save:key];
}

-(NSString*)get:(NSString*)key
{
    return  [self getSaveValue:key];
}

-(void)remove:(NSString*)key
{
    [self remove:key];
}



@end

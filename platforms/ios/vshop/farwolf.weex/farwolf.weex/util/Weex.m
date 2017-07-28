//
//  Weex.m
//  Pods
//
//  Created by 郑江荣 on 2017/5/4.
//
//

#import "Weex.h"
#import "WXLoadingIndicator.h"
#import "WXLoadingComponent.h"
#import "WXFDivComponent.h"
#import "WXFImageComponent.h"
#import "WXStaticModule.h"
#import "WXFarwolfModule.h"
#import "WXFEmbedComponent.h"
#import "ProgressModule.h"
#import "WXPrefModule.h"
#import "WXFPicker.h"
#import "WXFPickerModule.h"
#import "WXFWebComponent.h"

@implementation Weex

+(void)initWeex:(NSString*)group appName:(NSString*)appName appVersion:(NSString*)appVersion
{
    [WXAppConfiguration setAppGroup:group];
    [WXAppConfiguration setAppName:appName];
    [WXAppConfiguration setAppVersion:appVersion];
    
    [WXSDKEngine initSDKEnvironment];
    [WXSDKEngine registerModule:@"navigator" withClass:[WXNavigationModule class]];
    [WXSDKEngine registerModule:@"navbar" withClass:[WXNavBarModule class]];
    [WXSDKEngine registerModule:@"notify" withClass:[WXNotifyModule class]];
    [WXSDKEngine registerModule:@"photo" withClass:[WXPhotoModule class]];
    [WXSDKEngine registerModule:@"net" withClass:[WXNetModule class]];
    [WXSDKEngine registerModule:@"static" withClass:[WXStaticModule class]];
    [WXSDKEngine registerModule:@"farwolf" withClass:[WXFarwolfModule class]];
    [WXSDKEngine registerModule:@"progress" withClass:[ProgressModule class]];
      [WXSDKEngine registerModule:@"pref" withClass:[WXPrefModule class]];
        [WXSDKEngine registerModule:@"fpicker" withClass:[WXFPickerModule class]];
    
    [WXSDKEngine registerHandler:[WXEventModule new] withProtocol:@protocol(WXEventModuleProtocol)];
    [WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    [WXSDKEngine registerComponent:@"a" withClass:[WXPushComponent class]];
    [WXSDKEngine registerComponent:@"floading" withClass:[WXLoadingView class]];
    [WXSDKEngine registerComponent:@"image" withClass:[WXFImageComponent class]];
    [WXSDKEngine registerComponent:@"embed" withClass:[WXFEmbedComponent class]];
    [WXSDKEngine registerComponent:@"wheel" withClass:[WXFPicker class]];
    [WXSDKEngine registerComponent:@"web" withClass:[WXFWebComponent class]];
    
    
    [WXLog setLogLevel: WXLogLevelOff];
    
}


+(NSString*)getBaseDir
{
    return basedir;
}
+(void)setBaseDir:(NSString*)dir
{
    basedir=dir;
}

+(void)setBaseUrl:(NSString *)url
{
    //    NSString *url= weexInstance.scriptURL.absoluteString;
    NSString *s=[s replace:@"root:" withString:@""];
    
    if([url startWith:@"http"])
    {
        NSArray *n=  [url split:@":"];
        if(n.count==3)
        {
            url=[[[[[[@"" add:n[0]] add:@":"] add:n[1]] add:@":"] add:[n[2] split:@"/"][0]] add:@"/"];
        }
        else if(n.count==3)
        {
            url=[[[@"" add:n[0]] add:[n[1] split:@"/"][0]] add:@"/"] ;
        }
        
        url=[url add:s];
        
        if(![basedir isEqualToString:@""])
            url=[[url add:basedir]add:@"/"];
    }
    else
    {
        NSArray *n= [url split:@"/app/"];
        url=[n[0] add:@"/app/"] ;
    }
    baseurl=url;
    
}
+(NSString*)getBaseUrl
{
    return baseurl;
}

+(void)startDebug:(NSString*)ip port:(NSString*)port
{
     [WXDevTool setDebug:YES];
    NSString *url=[[[[@"ws://" add:ip]add:@":"]add:port]add:@"/debugProxy/native"];
    [WXDevTool launchDevToolDebugWithUrl:url];
//   [WXLog setLogLevel:WXLogLevelLog];
//     [WXDevTool setDebug:YES];
    
//     [WXDebugTool setDebug:YES];
}


+(NSString*)getFinalUrl:(NSString*)url weexInstance:(WXSDKInstance*)weexInstance
{
    if([url startWith:@"root:"])
    {
        url=[url replace:@"root:" withString:[Weex getBaseUrl]];
        return url;
    }
   
     return [NSURL URLWithString:url relativeToURL:weexInstance.scriptURL].absoluteString;
}

+(void)setImageSource:(NSString*)url compelete:(void(^)(UIImage *img))compelete
{
    if([url startWith:@"http"])
    {
        [[SDWebImageManager sharedManager] downloadImageWithURL:[NSURL URLWithString:url] options:0 progress:^(NSInteger receivedSize, NSInteger expectedSize) {
            
            
        } completed:^(UIImage *image, NSError *error, SDImageCacheType cacheType, BOOL finished, NSURL *imageURL) {
            
      
            compelete(image);
            
        }];
    }
    else
    {
        
        NSArray *n= [url split:@"/app"];
        compelete([UIImage imageNamed:[@"app" add:n[1]]]);
    }
}




@end

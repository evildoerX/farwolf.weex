//
//  WXFWebComponent.m
//  Pods
//
//  Created by 郑江荣 on 2017/7/26.
//
//

#import "WXFWebComponent.h"
#import "farwolf.h"
@implementation WXFWebComponent


-(void)viewDidLoad
{
    [super viewDidLoad];
    if(_s!=nil)
    {
        [self loadURL:_s];
    }
}

- (void)setUrl:(NSString *)url
{
    if([url startWith:@"http"])
    {
        [super setUrl:url];
    }
    else
    {
        self.s=url;
    }
}

- (void)loadURL:(NSString *)url
{
    if([url startWith:@"http"])
    {
        [super setUrl:url];
    }
    else
    {
        [((UIWebView*)self.view) loadHTMLString:_s baseURL:nil];
    }
}
@end

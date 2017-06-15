//
//  WXFImageComponent.m
//  Pods
//
//  Created by 郑江荣 on 2017/6/13.
//
//

#import "WXFImageComponent.h"
#import "farwolf.h"

@implementation WXFImageComponent


- (instancetype)initWithRef:(NSString *)ref type:(NSString *)type styles:(NSDictionary *)styles attributes:(NSDictionary *)attributes events:(NSArray *)events weexInstance:(WXSDKInstance *)weexInstance
{
    
    if (attributes[@"src"]) {
        NSString *s= [[WXConvert NSString:attributes[@"src"]] stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
          NSString *url= weexInstance.scriptURL.absoluteString;
        if([s startWith:@"root:"])
        {
            s=[s replace:@"root:" withString:@""];
         
            if([url startWith:@"http"])
            {
                NSArray *n=  [url split:@":"];
                if(n.count==3)
                {
                    url=[[[[[[[@"" add:n[0]] add:@":"] add:n[1]] add:@":"] add:[n[2] split:@"/"][0]] add:@"/"] add:s];
                }
                else if(n.count==3)
                {
                    url=[[[[@"" add:n[0]] add:[n[1] split:@"/"][0]] add:@"/"] add:s];
                }
                
                
            }
            else
            {
                NSArray *n= [url split:@"/app/"];
                url=[[n[0] add:@"/app/"] add:s];
            }
        }
//        NSMutableDictionary *temp=attributes;
        NSMutableDictionary *temp=[[NSMutableDictionary alloc]initWithDictionary:attributes];
        if([temp.allKeys containsObject:@"src"])
        {
            [temp removeObjectForKey:@"src"];
            [temp setValue:url forKey:@"src"];
        }
        return [super initWithRef:ref type:type styles:styles attributes:temp events:events weexInstance:weexInstance];
        
    }
    return [super initWithRef:ref type:type styles:styles attributes:attributes events:events weexInstance:weexInstance];
    
    
 
    
    return self;
}
@end

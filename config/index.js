export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wxfcedc59f55ddef1e",
    // 公众号appSecret
    appSecret: "1ae495280833250c48d6ff7e5a5edba5",
    // 模板消息id
    templateId: "LuoN_w-7200qLJM4eUrpXAw669P9d9JrIhjQwwwRjwE",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [o8TXt6jQPrnIyVoYEtLlLpg3f4hM],
     
    // 信息配置
    // 所在省份
    province: "重庆",
    // 所在城市
    city: "永川",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "媳妇儿", "year": "2001", "date": "07-19", "type": 'new'},
    
    ],
    // 在一起的日子，格式同上
    loveDate: "2020-07-18",
    // 结婚纪念日
    marryDate: "暂无"
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

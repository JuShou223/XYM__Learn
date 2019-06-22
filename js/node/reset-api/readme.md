fullstack 全栈
Front Enginner
Backend /api
restful api
浏览器与服务器通信方式的一种设计风格

    restful 的世界 一切皆资源
    url 来唯一定位资源的识别符
    posts/:id/comments
    添加一条评论 怎们办?
    {
        "id": 2,
        "body": '好巧 你那边也在下雨',
        postid: 1
    }
    /comments 设计好url POST
    设计有意义的utl
    资源 状态改变
    POST /comments 加一条评论 id:2
    修改一下内容
    PUT /comments/2 body '最美不过下雨天'
    操作     SQL方法  HTTP动词
    CREATE  INSERT   POST
    READ    SELECT   GET
    DELETE  DELETE   DELETE
    UPDATE  UPDATE   PUT/PATCH
## PUT/PATCH的区别
patch方法用来更新局部资源
而put虽然也是更新资源，但要求前端提供的一定是一个完整的资源对象

状态的切换 使用定义的谓语动词 
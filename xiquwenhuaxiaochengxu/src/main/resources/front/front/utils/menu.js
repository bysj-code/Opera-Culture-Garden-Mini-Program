const menu = {
    list() {
        return [
    {
        "backMenu":[
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
    {
        "backMenu":[
			
			{
                "child":[
                    {
						"appFrontIcon":"cuIcon-form",
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告"
            }
			,
			{
                "child":[
                    {
						"appFrontIcon":"cuIcon-form",
                        "buttons":[
                            "查看"
                        ],
                        "menu":"戏曲",
                        "menuJump":"列表",
                        "tableName":"xiqu"
                    }
                ],
                "menu":"戏曲"
            }
            ,
            {
                "child":[
                    {
						"appFrontIcon":"cuIcon-favor",
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"戏曲收藏",
                        "menuJump":"列表",
                        "tableName":"xiquCollection"
                    }
                ],
                "menu":"戏曲收藏"
            }
            ,
            {
                "child":[
                    {
						"appFrontIcon":"cuIcon-evaluate",
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"戏曲留言",
                        "menuJump":"列表",
                        "tableName":"xiquLiuyan"
                    }
                ],
                "menu":"戏曲留言"
            }
			,
			{
                "child":[
                    {
						"appFrontIcon":"cuIcon-form",
                        "buttons":[
                            "查看"
                        ],
                        "menu":"戏曲科普",
                        "menuJump":"列表",
                        "tableName":"xiqukepu"
                    }
                ],
                "menu":"戏曲科普"
            }
        ],
        "frontMenu":[
        ],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"是",
        "hasFrontRegister":"是",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]

	}
}
export default menu;

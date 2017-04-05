module.exports.FBCommentFunc = function(Sequelize,sequelize){
    return sequelize.define('FBComment',{  
       "id":{  
          "type":"INT(11)",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":true,
          autoIncrement:true
       },
       "created_time":{  
          "type":"DATETIME",
          "allowNull":true,
          "defaultValue":null,
          "primaryKey":false
       },
       "comment_id":{  
          "type":"VARCHAR(40)",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":false
       },
       "post_id":{  
          "type":"VARCHAR(40)",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":false
       },
       "uid":{  
          "type":"BIGINT(20)",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":false
       },
       "tid":{  
          "type":"VARCHAR(40)",
          "allowNull":true,
          "defaultValue":null,
          "primaryKey":false
       },
       "message":{  
          "type":"TEXT",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":false
       },
       "can_reply_privately":{  
          "type":"TINYINT(4)",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":false
       },
       "can_comment":{  
          "type":"TINYINT(4)",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":false
       },
       "can_hide":{  
          "type":"TINYINT(4)",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":false
       },
       "can_remove":{  
          "type":"TINYINT(4)",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":false
       },
       "comment_count":{  
          "type":"INT(11)",
          "allowNull":false,
          "defaultValue":null,
          "primaryKey":false
       }
    },{
        tableName:'fb_comment',
        timestamps:false,
        createdAt:false,
        updatedAt:false,
        deletedAt:false,
        underscored:true,
        scopes:{}
    });

}
package com.dao;

import com.entity.XiquLiuyanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.view.XiquLiuyanView;

/**
 * 戏曲留言 Dao 接口
 *
 * @author 
 */
public interface XiquLiuyanDao extends BaseMapper<XiquLiuyanEntity> {

   List<XiquLiuyanView> selectListView(Pagination page,@Param("params")Map<String,Object> params);

}
